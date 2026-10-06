// ======================================
// SERENITY POS
// PART 1
// ======================================

const TOTAL_TABLES = 10;
const APP_PASSWORD =
localStorage.getItem("appPassword")
|| "2610";

const USERS = [
{
username:"waiter",
password:"2610"
}
];

let currentTable = null;

let selectedItems = [];
let currentCategory = null;

const categoryImages = {

"Soups":"images/soup.jpg",

"Veg Starters":"images/veg-starters.jpg",

"Non Veg Starters":"images/non-vegstarters.jpg",

"Chinese":"images/chinese.jpg",

"Veg Main Course":"images/vegmaincourse.jpg",

"Non Veg Main Course":"images/non-veg-main-course.jpg",

"Rice & Biryani":"images/rice-biryani.jpg",

"Indian Breads":"images/indian-breads.jpg",

"Desserts":"images/desserts.jpg",

"Beverages":"images/beverages.jpg",

"Preparation":"images/preparation.jpg"

};

let orders =
JSON.parse(
localStorage.getItem("orders")
) || {};

let history =
JSON.parse(
    localStorage.getItem("billingHistory")
) || [];

let todaySales = 0;
let salesDate = "";

let kotCounter =
parseInt(localStorage.getItem("kotCounter")) || 1;

let billCounter =
parseInt(localStorage.getItem("billCounter")) || 1;

async function loadDataFromFirebase(){

const snapshot =
await window.getDoc(
window.doc(
window.firebaseDB,
"restaurant",
"main"
)
);

if(snapshot.exists()){

const data = snapshot.data();

orders = data.orders || {};
history = data.history || [];

todaySales = data.todaySales || 0;
salesDate = data.salesDate || "";

 console.log("FIREBASE HISTORY", history);
createTables();
updateDashboard();

console.log("Firebase Data Loaded");

}

}

// ======================================
// LOGIN
// ======================================

function login(){

const username =
document
.getElementById("username")
.value
.trim();

const password =
document
.getElementById("password")
.value
.trim();

if(password === APP_PASSWORD){

localStorage.setItem(
"loggedIn",
"true"
);

localStorage.setItem(
"waiterName",
username
);

document
.getElementById("loginScreen")
.classList
.add("hidden");

document
.getElementById("app")
.classList
.remove("hidden");

initializeApp();

}else{

document
.getElementById("loginError")
.innerText =
"Wrong Password";

}

}

// ======================================
// AUTO LOGIN
// ======================================

window.onload = () => {

loadTheme();

if(
localStorage.getItem(
"loggedIn"
) === "true"
){

document
.getElementById("loginScreen")
.classList
.add("hidden");

document
.getElementById("app")
.classList
.remove("hidden");

initializeApp();

}

};

// ======================================
// LOGOUT
// ======================================

function logout(){

localStorage.removeItem(
"loggedIn"
);

location.reload();

}

// ======================================
// THEME
// ======================================

function toggleTheme(){

document.body.classList.toggle(
"dark"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark"
)
);

}

function loadTheme(){

const dark =
localStorage.getItem(
"theme"
);

if(
dark === "true"
){

document.body.classList.add(
"dark"
);

}

}

// ======================================
// INIT
// ======================================

function initializeApp(){

const waiter =
localStorage.getItem(
"waiterName"
) || "Waiter";

const waiterDisplay =
document.getElementById(
"waiterDisplay"
);

if(waiterDisplay){

waiterDisplay.innerText =
`Waiter: ${waiter}`;

}

createTables();

updateDashboard();

//buildCategoryTabs();//

}

// ======================================
// TABLES
// ======================================

function createTables(){

const tableGrid =
document.getElementById(
"tableGrid"
);

tableGrid.innerHTML = "";

for(
let i = 1;
i <= TOTAL_TABLES;
i++
){

const card =
document.createElement(
"div"
);

let status =
"available";

if(
orders[i]
){

status =
"running";

}

card.className =
`table-card ${status}`;

card.innerHTML = `
<h3>
Table ${i}
</h3>

<p>
${status.toUpperCase()}
</p>
`;

card.onclick = () =>
openTable(i);

tableGrid.appendChild(
card
);

}

}

// ======================================
// OPEN TABLE
// ======================================

function openTable(tableNo){

currentTable =
tableNo;

document.getElementById("customerName").value =
orders[tableNo]?.customerName || "";

document
.getElementById(
"currentTable"
)
.innerText =
`Table ${tableNo}`;

document
.getElementById(
"orderPanel"
)
.classList
.remove("hidden");

if(
orders[tableNo]
){

selectedItems =
JSON.parse(
JSON.stringify(
orders[tableNo].items
)
);

}else{

selectedItems = [];

}
currentCategory = null;

renderMenu();

renderOrderSummary();

}

// ======================================
// CLOSE PANEL
// ======================================

function closeOrderPanel(){

document
.getElementById(
"orderPanel"
)
.classList
.add("hidden");

}

// ======================================
// DASHBOARD
// ======================================

function updateDashboard(){

const occupied =
Object.keys(
orders
).length;

const available =
TOTAL_TABLES -
occupied;

document
.getElementById(
"occupiedTables"
)
.innerText =
occupied;

document
.getElementById(
"availableTables"
)
.innerText =
available;

document
.getElementById(
"runningOrders"
)
.innerText =
occupied;

document
.getElementById(
"todaySales"
)
.innerText =
`₹${todaySales.toFixed(2)}`;

}

// ======================================
// STORAGE
// ======================================
async function saveOrdersToFirebase(){

    console.log({
    orders,
    history,
    todaySales,
    salesDate
});

    try{

        await window.setDoc(
            window.doc(
                window.firebaseDB,
                "restaurant",
                "main"
    ),
    {
        orders: orders,
        history: history,
        todaySales: todaySales,
        salesDate: salesDate
    }
);

        console.log("Firebase Saved");

    }catch(error){

        console.error("Firebase Error:", error);

    }

}

async function saveOrders(){

 localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("history", JSON.stringify(history));


createTables();
await saveOrdersToFirebase();
updateDashboard();


}
// ======================================
// SERENITY POS
// PART 2
// MENU + CART
// ======================================

// ======================================
// MENU RENDERING
// ======================================

function renderMenu(){

const container =
document.getElementById(
"menuCategories"
);

if(!container) return;

container.innerHTML = "";

const searchText =
document
.getElementById(
"searchMenu"
)
?.value
?.toLowerCase() || "";

const grouped = {};

MENU.forEach(item=>{

const nameMatch =
item.name
.toLowerCase()
.includes(searchText);

const marathiMatch =
item.marathi
.toLowerCase()
.includes(searchText);

if(
nameMatch ||
marathiMatch
){

if(
!grouped[item.category]
){

grouped[item.category] = [];

}

grouped[item.category]
.push(item);

}

});

let html = "";

if(!currentCategory){

Object.keys(grouped).forEach(category=>{

html += `
<div
class="category-card"
onclick="showCategory('${category}')"
>

<img
src="${categoryImages[category]}"
class="category-image"
>

<h3>${category}</h3>

</div>
`;

});
console.log("Cards Count:", Object.keys(grouped).length);
console.log(html);
container.innerHTML = html;

return;

}

Object.keys(grouped)
.forEach(category=>{

const section =
document.createElement(
"div"
);

section.className =
"category";

section.setAttribute(
"data-category",
category
);

if(currentCategory !== category){
return;
}

let html = `
<button
class="back-btn"
onclick="backToCategories()"
>
⬅ Back
</button>

<h3>${category}</h3>
`;

grouped[category]
.forEach(item=>{

const existing =
selectedItems.find(
i => i.name === item.name
);

const qty =
existing
?
existing.qty
:
0;

html += `

<div class="menu-item">

<div class="item-info">

<h4>
${item.name}
</h4>

<p>
${item.marathi}
</p>

<strong>
₹${item.price}
</strong>

</div>

${qty > 0 ?

`

<div class="qty-box">

<button
class="qty-btn"
onclick="decreaseMenuItem(
'${item.name}'
)"
>
-
</button>

<span>
${qty}
</span>

<button
class="qty-btn"
onclick="addItem(
'${item.name}',
${item.price}
)"
>
+
</button>

</div>

`

:

`

<button
class="add-btn"
onclick="addItem(
'${item.name}',
'${item.marathi}',
${item.price}
)"
>
+ Add
</button>

`

}

</div>

`;

});

section.innerHTML =
html;

container.appendChild(
section
);

});

}
function showCategory(category){

currentCategory = category;

renderMenu();

}
function backToCategories(){

currentCategory = null;

renderMenu();

}
// ======================================
// SEARCH
// ======================================

document.addEventListener(
"input",
function(e){

if(
e.target.id ===
"searchMenu"
){

renderMenu();

}

}
);

// ======================================
// CATEGORY TABS
// ======================================

function buildCategoryTabs(){

const categories =
[
...new Set(
MENU.map(
item =>
item.category
)
)
];

const container =
document.getElementById(
"categoryTabs"
);


container.innerHTML = "";

categories.forEach(cat=>{

const chip =
document.createElement(
"div"
);

chip.className =
"category-chip";

chip.innerText =
cat;

chip.onclick = () => {

const section =
document.querySelector(
`[data-category="${cat}"]`
);

if(section){

section.scrollIntoView({
behavior:"smooth"
});

}

};

container.appendChild(
chip
);

});

}

// ======================================
// ADD ITEM
// ======================================

function addItem(
itemName,
marathiName,
price
){

const existing =
selectedItems.find(
item =>
item.name === itemName
);

if(existing){

existing.qty++;

}else{

selectedItems.push({
name:itemName,
marathi:marathiName,
price:price,
qty:1
});

}


renderOrderSummary();
renderMenu();
}

// ======================================
// INCREASE QTY
// ======================================

function increaseQty(index){

selectedItems[index].qty++;

renderOrderSummary();

}

// ======================================
// DECREASE QTY
// ======================================

function decreaseQty(index){

if(
selectedItems[index].qty > 1
){

selectedItems[index].qty--;

}else{

selectedItems.splice(
index,
1
);

}

renderOrderSummary();

}

// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index){

selectedItems.splice(
index,
1
);

renderOrderSummary();

}

// ======================================
// CART COUNT
// ======================================

function updateCartCount(){

let qty = 0;

selectedItems.forEach(item=>{

qty += item.qty;

});

const badge =
document.getElementById(
"cartCount"
);

if(badge){

badge.innerText = qty;

}

}

// ======================================
// ORDER SUMMARY
// ======================================

function renderOrderSummary(){

const container =
document.getElementById(
"selectedItems"
);

if(!container) return;

container.innerHTML = "";

let total = 0;

selectedItems.forEach(
(item,index)=>{

const amount =
item.qty *
item.price;

total += amount;

const div =
document.createElement(
"div"
);

div.className =
"selected-item";

div.innerHTML = `

<div>

<strong>
${item.name}
</strong>

<br>

₹${item.price}

</div>

<div>

<button
onclick="
decreaseQty(${index})
"
>
-
</button>

${item.qty}

<button
onclick="
increaseQty(${index})
"
>
+
</button>

₹${amount}

<button
onclick="
removeItem(${index})
"
>
❌
</button>

</div>

`;

container.appendChild(
div
);

});

document
.getElementById(
"grandTotal"
)
.innerText =
`₹${total}`;

updateCartCount();

}

// ======================================
// ORDER TOTAL
// ======================================

function getOrderTotal(){

let total = 0;

selectedItems.forEach(item=>{

total +=
item.qty *
item.price;

});

return total;

}

// ======================================
// FLOATING CART
// ======================================

function scrollToBill(){

document
.getElementById(
"orderSummary"
)
.scrollIntoView({

behavior:"smooth"

});

}

// ======================================
// SERENITY POS
// PART 3
// SAVE ORDER + BILLING
// ======================================

// ======================================
// SAVE ORDER
// ======================================

function saveOrder(){

if(!currentTable){

alert(
"Please select a table"
);

return;

}

if(
selectedItems.length === 0
){

alert(
"No items selected"
);

return;

}

orders[currentTable] = {
customerName:
document.getElementById("customerName").value.trim(),

tableNo:
currentTable,

items:
JSON.parse(
JSON.stringify(
selectedItems
)
),

lastKotCount:
orders[currentTable]?.lastKotCount || 0,

total:
getOrderTotal(),

updatedAt:
new Date()
.toLocaleString()

};

console.log("Orders after save:", orders);

saveOrders();

alert(
`Order saved for Table ${currentTable}`
);

}

// ======================================
// BILL NUMBER
// ======================================

function generateBillNo(){

return (
"SF" +
Date.now()
.toString()
.slice(-8)
);

}

// ======================================
// PRINT CURRENT BILL
// ======================================

function printBill(){
const billNo =
generateBillNumber();

if(
selectedItems.length === 0
){

alert(
"No items selected"
);

return;

}

const total =
getOrderTotal();

let rows = "";

selectedItems.forEach(item=>{

rows += `

<tr>

<td>
${item.name}
</td>

<td>
${item.qty}
</td>

<td>
₹${item.price}
</td>

<td>
₹${item.qty * item.price}
</td>

</tr>

`;

});

const printWindow =
window.open(
"",
"",
"width=900,height=800"
);

printWindow.document.write(`

<html>

<head>

<title>
Serenity Farms Bill
</title>

<style>

body{
width:58mm;
margin:0;
padding:5px;
font-family:monospace;
font-size:12px;
}

table{
width:100%;
border-collapse:collapse;
}

th,td{
border:1px solid #000;
padding:4px;
font-size:11px;
}

.center{
text-align:center;
}

@media print{

body{
width:58mm;
}

}

</style>

</head>

<body>

<div class="center">

<h2 style="margin:0;">
🌿 SERENITY FARMS
</h2>

<div style="font-size:13px;line-height:1.2;">
Family Restaurant<br>
Pindkepar, Korambhi Road<br>
Bhandara<br>
📞 9284315089
</div>

</div>

<hr>

<p>
Bill No :
${billNo}
</p>
<p>
<b>Customer :</b>
${orders[currentTable]?.customerName || ""}
</p>
<p>
Table :
${currentTable}
</p>

<p>
Date :
${new Date().toLocaleString()}
</p>

<table>

<thead>

<tr>

<th>Item</th>
<th>Qty</th>
<th>Rate</th>
<th>Amount</th>

</tr>

</thead>

<tbody>

${rows}

</tbody>

</table>

<h2>
Grand Total :
₹${total}
</h2>

<hr>

<div class="center">

Thank You Visit Again

</div>

</body>

</html>

`);

printWindow.document.close();

printWindow.print();

}

// ======================================
// CLOSE TABLE
// ======================================

async function closeTable(){

if(
!currentTable
){

return;

}

if(
selectedItems.length === 0
){

alert(
"No order available"
);

return;

}

const bill = {

billNo:
generateBillNo(),

tableNo:
currentTable,

items:
JSON.parse(
JSON.stringify(
selectedItems
)
),

total:
getOrderTotal(),

date:
new Date()
.toISOString()

};
history.push(bill);

// ===== TODAY'S SALES =====
const today = new Date().toISOString().split("T")[0];

if (salesDate === today) {

    todaySales += bill.total;

} else {

    salesDate = today;
    todaySales = bill.total;

}
console.log("Bill Total:", bill.total);
console.log("Today's Sales:", todaySales);

// =========================

console.log("Bill Added");
console.log(history.length);
console.log(history);

let billingHistory =
JSON.parse(
localStorage.getItem(
"billingHistory"
)
) || [];

async function saveBillToFirebase(bill){

    await addDoc(
        collection(window.db,"billingHistory"),
        bill
    );

}

delete orders[
currentTable
];

selectedItems = [];

await saveOrders();

renderOrderSummary();

closeOrderPanel();

alert(
`Table ${currentTable} closed successfully`
);

}

// ======================================
// REPRINT HISTORY BILL
// ======================================

function printHistoryBill(index){

const bill =
history[index];

if(!bill) return;

let rows = "";

bill.items.forEach(item=>{

rows += `

<tr>

<td>
${item.name}
</td>

<td>
${item.qty}
</td>

<td>
₹${item.price}
</td>

<td>
₹${item.qty * item.price}
</td>

</tr>

`;

});

const printWindow =
window.open(
"",
"",
"width=300,height=700"
);

printWindow.document.write(`

<html>

<head>

<title>
${bill.billNo}
</title>

<style>

body{
font-family:Arial;
padding:20px;
}

table{
width:100%;
border-collapse:collapse;
}

th,td{
border:1px solid black;
padding:8px;
}

.center{
text-align:center;
}

</style>

</head>

<body>

<div class="center">

<h2>
🌿 SERENITY FARMS
</h2>

<p>
Family Restaurant
</p>

</div>

<q1                                                                                         >

<p>
Bill No :
${bill.billNo}
</p>

<p>
Table :
${bill.tableNo}
</p>

<p>
Date :
${bill.date}
</p>

<table>

<thead>

<tr>

<th>Item</th>
<th>Qty</th>
<th>Rate</th>
<th>Total</th>

</tr>

</thead>

<tbody>

${rows}

</tbody>

</table>

<h2>
Total :
₹${bill.total}
</h2>

<hr>

<div class="center">

Thank You Visit Again

</div>

</body>

</html>

`);

printWindow.document.close();

printWindow.print();

}

// ======================================
// SERENITY POS
// PART 4
// HISTORY + REPORTS + UTILITIES
// ======================================

// ======================================
// OPEN HISTORY
// ======================================

function openHistory(){

const container =
document.getElementById(
"menuCategories"
);

if(!container) return;

container.innerHTML = `

<div class="history-container">

<h2>
📜 Order History
</h2>

<input
type="text"
id="historySearch"
placeholder="Search Bill No or Table..."
onkeyup="renderHistory()"
/>

<div id="historyList">

</div>

</div>

`;

renderHistory();

}

// ======================================
// RENDER HISTORY
// ======================================

function renderHistory(){

const container =
document.getElementById(
"historyList"
);

if(!container) return;

const search =
document
.getElementById(
"historySearch"
)
?.value
?.toLowerCase() || "";

let html = "";
if(!currentCategory){

Object.keys(grouped).forEach(category=>{

html += `
<div
class="category-card"
onclick="showCategory('${category}')"
>
${category}
</div>
`;

});
console.log("CATEGORY CARDS RENDERED");
container.innerHTML = html;

return;

}

history.forEach(
(bill,index)=>{

const billNo =
bill.billNo
.toLowerCase();

const tableNo =
String(
bill.tableNo
);

if(
billNo.includes(search)
||
tableNo.includes(search)
){

html += `

<div class="history-card">

<h3>
${bill.billNo}
</h3>

<p>
Table :
${bill.tableNo}
</p>

<p>
${bill.date}
</p>

<h4>
₹${bill.total}
</h4>

<button
onclick="
printHistoryBill(${index})
"
>
🖨 Reprint
</button>

</div>

`;

}

});

container.innerHTML =
html ||
`
<p>
No history found
</p>
`;

}

// ======================================
// SALES REPORT
// ======================================

function showSalesReport(){

let totalSales = 0;

let totalBills =
history.length;

history.forEach(
bill=>{

totalSales +=
bill.total;

});

const avgBill =
totalBills > 0
?
Math.round(
totalSales /
totalBills
)
:
0;

alert(

`🌿 SERENITY FARMS

Total Bills :
${totalBills}

Total Sales :
₹${totalSales}

Average Bill :
₹${avgBill}

`

);

}

// ======================================
// QUICK ADD TEA
// ======================================

function quickAddTea(){

if(!currentTable){

alert(
"Open a table first"
);

return;

}

addItem(
"Tea",
20
);

}

// ======================================
// QUICK ADD WATER
// ======================================

function quickAddWater(){

if(!currentTable){

alert(
"Open a table first"
);

return;

}

addItem(
"Mineral Water",
20
);

}

// ======================================
// CLEAR HISTORY
// ======================================

function clearHistory(){

if(
confirm(
"Delete complete history?"
)
){

history = [];

saveOrders();

renderHistory();

}

}

// ======================================
// TODAY SALES
// ======================================

function getTodaySales(){

    let billingHistory =
    JSON.parse(
        localStorage.getItem("billingHistory")
    ) || [];

    const today = new Date();

    return billingHistory
        .filter(bill => {

            const billDate =
            new Date(bill.date);

            return (
                billDate.getDate() === today.getDate() &&
                billDate.getMonth() === today.getMonth() &&
                billDate.getFullYear() === today.getFullYear()
            );

        })
        .reduce(
            (sum,bill) => sum + bill.total,
            0
        );
}

// ======================================
// EXPORT DATA
// ======================================

function exportData(){

const data = {

orders,
history

};

const blob =
new Blob(

[
JSON.stringify(
data,
null,
2
)
],

{
type:
"application/json"
}

);

const url =
URL.createObjectURL(
blob
);

const a =
document.createElement(
"a"
);

a.href = url;

a.download =
"serenity_backup.json";

a.click();

URL.revokeObjectURL(
url
);

}

// ======================================
// IMPORT DATA
// ======================================

function importData(event){

const file =
event.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload =
function(e){

try{

const data =
JSON.parse(
e.target.result
);

orders =
data.orders || {};

history =
data.history || [];

saveOrders();

createTables();

updateDashboard();

alert(
"Backup restored successfully"
);

}catch{

alert(
"Invalid backup file"
);

}

};

reader.readAsText(
file
);

}

// ======================================
// REFRESH MENU VIEW
// ======================================

function reopenCurrentTable(){

if(currentTable){

openTable(
currentTable
);

}

}
function decreaseMenuItem(itemName){

const item =
selectedItems.find(
i => i.name === itemName
);

if(!item) return;

item.qty--;

if(item.qty <= 0){

selectedItems =
selectedItems.filter(
i => i.name !== itemName
);

}

renderOrderSummary();
renderMenu();

}

function changePassword(){

const current =
prompt(
"Enter Current Password"
);

if(
current !== APP_PASSWORD
){

alert(
"Wrong Password"
);

return;

}

const newPassword =
prompt(
"Enter New Password"
);

if(!newPassword){

return;

}

localStorage.setItem(
"appPassword",
newPassword
);

alert(
"Password Changed Successfully\nRefresh Page"
);
} 

function openSettings(){

document
.getElementById("settingsModal")
.classList
.remove("hidden");

}


function closeSettings(){

document
.getElementById("settingsModal")
.classList
.add("hidden");

}



function generateKOTNumber(){

const today = new Date();

const datePart =
today.getFullYear() +
String(today.getMonth()+1).padStart(2,"0") +
String(today.getDate()).padStart(2,"0");

const kotNo =
`KOT-${datePart}-${String(kotCounter).padStart(3,"0")}`;

kotCounter++;

localStorage.setItem(
"kotCounter",
kotCounter
);

return kotNo;

}

function printKOT(){

const kotNo =
generateKOTNumber();

const tableOrder =
orders[currentTable];

const lastKotCount =
tableOrder?.lastKotCount || 0;

const newItems =
selectedItems.slice(lastKotCount);

console.log("All Items", selectedItems);
console.log("Last KOT Count", lastKotCount);
console.log("New Items", newItems);

if(selectedItems.length===0){
alert("No Items Selected");
return;
}

let kotWindow =
window.open(
"",
"_blank",
"width=230,height=800"
);

let kotHtml = `
<html>
<head>
<title>KOT</title>
<style>

@page{
size:58mm auto;
margin:0;
}

html,body{
width:58mm;
margin:0;
padding:2mm;
font-family:monospace;
font-size:11px;
overflow:hidden;
}

table{
width:100%;
border-collapse:collapse;
}

th,td{
padding:2px;
font-size:11px;
}

</style>
</head>

<body onload="window.print()">

<center>

<h2>KOT</h2>
<p>
<b>KOT No:</b>
${kotNo}
</p>

<b>Waiter / वेटर :</b>
${localStorage.getItem("waiterName")}

<br>

<b>Table No / टेबल क्रमांक :</b>
${currentTable}

<hr>

</center>

<hr>


<table width="100%">

<tr>
<th>Sr</th>
<th>Item Name / पदार्थ </th>
<th>Qty / प्रमाण</th>
</tr>

<hr>

<table>
`;

newItems.forEach((item,index)=>{

kotHtml += `
<tr>

<td>${index+1}</td>

<td>
${item.name}
(${item.marathi})
</td>

<td>${item.qty}</td>

</tr>
`;

});

kotHtml += `
</table>

<hr>

<p>
${new Date().toLocaleString()}
</p>

</body>
</html>
`;

kotWindow.document.write(kotHtml);

kotWindow.document.close();

orders[currentTable].lastKotCount =
selectedItems.length;

saveOrders();

setTimeout(() => {

    kotWindow.focus();


}, 1000);

}
window.addEventListener("load", () => {

setTimeout(() => {

loadDataFromFirebase();

startRealtimeSync();

}, 2000);

});

function startRealtimeSync(){

console.log("Realtime Sync Started");

window.onSnapshot(

window.doc(
window.firebaseDB,
"restaurant",
"main"
),

(snapshot)=>{
console.log("Snapshot Fired");

if(snapshot.exists()){

const data = snapshot.data();

orders = data.orders || {};
history = data.history || [];
todaySales = data.todaySales || 0;
salesDate = data.salesDate || "";

createTables();
updateDashboard();

console.log("Realtime Updated");

}

}

);

}

function generateBillNumber(){

const today = new Date();

const datePart =
today.getFullYear() +
String(today.getMonth()+1).padStart(2,"0") +
String(today.getDate()).padStart(2,"0");

const billNo =
`SF-${datePart}-${String(billCounter).padStart(3,"0")}`;

billCounter++;

localStorage.setItem(
"billCounter",
billCounter
);

return billNo;

}
function openSalesReport(){

    let totalSales = 0;
    let monthlySales = 0;
    let itemCount = {};
    let totalBills = history.length;

    const today = new Date();

    history.forEach(bill => {

        totalSales += bill.total;

        const billDate =
        new Date(bill.date);

        if(
            billDate.getMonth() === today.getMonth() &&
            billDate.getFullYear() === today.getFullYear()
        ){
            monthlySales += bill.total;
        }

        bill.items.forEach(item => {

            itemCount[item.name] =
            (itemCount[item.name] || 0) + item.quantity;

        });

    });

    const monthlyBills =
    history.filter(bill => {

        const d = new Date(bill.date);

        return (
            d.getMonth() === today.getMonth() &&
            d.getFullYear() === today.getFullYear()
        );

    }).length;

    let averageBill =
    monthlyBills > 0
    ? Math.round(monthlySales / monthlyBills)
    : 0;

    document.getElementById(
        "reportTodaySales"
    ).innerText =
    "Today's Sales : ₹" + getTodaySales();

    document.getElementById(
        "reportMonthlySales"
    ).innerText =
    "Monthly Sales : ₹" + monthlySales;

    document.getElementById(
        "reportBillsGenerated"
    ).innerText =
    "Bills Generated : " + totalBills;

    document.getElementById(
        "reportAverageBill"
    ).innerText =
    "Average Bill : ₹" + averageBill;

    document.getElementById(
        "salesReportModal"
    ).classList.remove("hidden");

}

function closeSalesReport(){

    document.getElementById(
        "salesReportModal"
    ).classList.add("hidden");

}

// ======================================
// END OF SCRIPT
// ======================================