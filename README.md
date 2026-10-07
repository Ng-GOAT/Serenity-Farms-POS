# 🍽️ SERENITY FARMS

## Family Restaurant Point of Sale (POS) System

A web-based Point of Sale (POS) system developed for **Serenity Farms & Family Restaurant** to simplify restaurant operations such as table management, order taking, billing, sales tracking, menu management, and bill history.

---

## 📋 Project Details

- **Project Name:** Serenity Farms Family Restaurant POS
- **Application Type:** Restaurant Point of Sale System
- **Restaurant:** Serenity Farms & Family Restaurant
- **Platform:** Web Application
- **Frontend:** HTML5, CSS3, JavaScript
- **Database:** Firebase Firestore
- **Hosting:** Firebase Hosting

---

## 🛠️ Technologies Used

- **HTML5** — Structure of the application
- **CSS3** — Styling and responsive design
- **JavaScript** — Application logic and user interactions
- **Firebase Firestore** — Cloud database and real-time data synchronization
- **Firebase Hosting** — Web application deployment

---

# 🚀 How to Run

## Step 1: Clone the Repository

```bash
git clone https://github.com/Ng-GOAT/Serenity-farms.git
```

## Step 2: Open the Project Folder

```bash
cd Serenity-farms
```

## Step 3: Open the Application

Open `index.html` in a web browser.

The application can also be run using a local development server.

---

# 🔥 Firebase Configuration

The application uses **Firebase Firestore** as its cloud database.

Firestore is used to store and synchronize restaurant-related information between connected devices.

The project also uses **Firebase Hosting** to deploy the web application.

---

## 🌐 Firebase Hosting Deployment

After making changes to the project, deploy the latest version using:

```bash
firebase.cmd deploy --only hosting
```

---

# ✨ Features

## 🪑 Table Management

- Manage restaurant tables
- Select tables while taking orders
- Track table-related orders
- Maintain table order information

---

## 📝 Order Management

- Add food items to an order
- Increase or decrease item quantity
- Remove items from an order
- Automatically calculate item totals
- Calculate the complete order total
- Manage orders efficiently from the POS interface

---

## 🍛 Digital Menu

The application provides a categorized digital restaurant menu.

### Menu Categories

- Soups
- Veg Starters
- Non-Veg Starters
- Chinese
- Veg Main Course
- Non-Veg Main Course
- Rice & Biryani
- Indian Breads
- Desserts
- Beverages
- Preparation

Food items contain:

- English name
- Marathi name
- Price
- Category

---

## 🌐 Bilingual Menu

The menu supports both:

- **English**
- **Marathi**

This makes the system easier to use for restaurant staff and customers familiar with Marathi.

---

# 🧾 Billing System

The billing module provides restaurant billing functionality.

### Features

- Generate bills
- Calculate item-wise totals
- Calculate complete bill amount
- Generate bill numbers
- Print bills
- View previous bills
- Print historical bills
- Delete bill history when required

---

# 📊 Today's Sales

The dashboard provides a **Today's Sales** section.

The system stores the current day's sales amount and updates it whenever a new bill is generated.

Sales are associated with the current date so that the displayed value represents the sales for the current day.

---

# 📜 Bill History

The system maintains previously generated bills.

Users can:

- View previous bills
- View bill details
- Print previous bills
- Delete bill history when required

---

# 🔄 Real-Time Synchronization

Firebase Firestore provides real-time synchronization for the application.

This allows restaurant data to stay synchronized across connected devices.

```text
Windows PC
     ↕
Firebase Firestore
     ↕
Android Tablet
```

Changes made from one connected device can be reflected on other connected devices using the same Firebase database.

---

# 💾 Backup and Restore

The application supports restaurant data backup functionality.

A backup can be maintained in JSON format:

```text
serenity_backup.json
```

This can be used to preserve important restaurant data and restore it when required.

---

# 🖨️ Printing

The POS system supports printing functionality for restaurant bills.

The system can:

- Print newly generated bills
- Print bills from bill history
- Provide formatted bill information for printing

---

# 🖼️ Images and Assets

Application images and visual assets are organized inside the:

```text
images/
```

folder.

The folder contains restaurant, login, logo, settings, menu-category, and other visual assets.

Keeping images in a separate directory makes the project easier to maintain and organize.

---

# 📂 Project Structure

```text
Serenity-farms/
│
├── images/
│   ├── restaurant.jpg
│   ├── logo.png
│   ├── login.jpg
│   ├── gear.jpg
│   ├── settings.jpg
│   └── category images...
│
├── index.html
│   # Main application interface
│
├── menu.js
│   # Restaurant menu items and pricing
│
├── script.js
│   # Main application logic and Firebase operations
│
├── style.css
│   # Application styling and responsive design
│
├── firebase.js
│   # Firebase configuration
│
├── firebase.json
│   # Firebase Hosting configuration
│
├── .firebaserc
│   # Firebase project configuration
│
├── 404.html
│   # Firebase Hosting fallback page
│
├── .gitignore
│   # Files ignored by Git
│
└── README.md
    # Project documentation
```

---

# 🗄️ Database

The application uses **Firebase Firestore** as its database.

Firestore stores restaurant-related data and allows the application to access the same data from multiple connected devices.

The application uses Firebase operations for tasks such as:

- Reading data
- Adding data
- Updating data
- Retrieving bills
- Maintaining sales information
- Real-time synchronization

---

# 🧮 Billing Data

The billing system maintains information related to generated bills, including:

- Bill number
- Ordered items
- Item quantities
- Item prices
- Total amount
- Sales date
- Bill history

---

# 📱 Supported Devices

The application is designed to work on:

- 💻 Windows PC
- 📱 Android Tablet
- 🌐 Modern Web Browsers

The responsive interface makes it practical for restaurant staff to use the system on different screen sizes.

---

# 🎯 Project Objective

The main objective of the Serenity Farms POS system is to provide a simple and efficient digital solution for restaurant operations.

The system reduces manual work involved in:

- Taking orders
- Managing tables
- Calculating bills
- Maintaining bill history
- Tracking daily sales
- Managing restaurant menu items

It provides restaurant staff with a centralized interface for handling day-to-day restaurant activities.

---

# 📌 Key Highlights

- Simple and easy-to-use POS interface
- Bilingual English + Marathi menu
- Organized menu categories
- Digital order management
- Automated bill calculation
- Bill history
- Today's sales tracking
- Bill printing
- Firebase Firestore integration
- Real-time data synchronization
- Firebase Hosting deployment
- Responsive interface for PC and tablet
- Organized image and project structure

---

# 👨‍💻 Developer

**Nishant Girhepunje**

B.Tech — Computer Science & Engineering (AI)

---

# 📄 Project

**Serenity Farms & Family Restaurant**

**Restaurant Point of Sale (POS) System**

Built using:

```text
HTML5
CSS3
JavaScript
Firebase Firestore
Firebase Hosting
```

---

## ❤️ Acknowledgement

This project was developed to provide a practical digital POS solution for **Serenity Farms & Family Restaurant**, focusing on simplicity, usability, and efficient restaurant management.
