
// ======================================
// SERENITY FARMS FAMILY RESTAURANT
// COMPLETE MENU
// ======================================

const MENU = [

    // ======================================
    // SOUPS | सूप
    // ======================================

    {
        name: "Tomato Soup",
        marathi: "टमाटर सूप",
        price: 120,
        category: "Soups"
    },

    {
        name: "Sweet Corn Soup",
        marathi: "स्वीट कॉर्न सूप",
        price: 130,
        category: "Soups"
    },

    {
        name: "Hot & Sour Soup",
        marathi: "हॉट अँड सॉर सूप",
        price: 140,
        category: "Soups"
    },

    {
        name: "Chicken Manchow Soup",
        marathi: "चिकन मंचाव सूप",
        price: 150,
        category: "Soups"
    },

    {
        name: "Chicken Hot & Sour Soup",
        marathi: "चिकन हॉट अँड सॉर सूप",
        price: 160,
        category: "Soups"
    },


    // ======================================
    // VEG STARTERS | वेज स्टार्टर
    // ======================================

    {
        name: "Papad Fry",
        marathi: "पापड फ्राय",
        price: 25,
        category: "Veg Starters"
    },

    {
        name: "Papad Roast",
        marathi: "पापड रोस्ट",
        price: 20,
        category: "Veg Starters"
    },

    {
        name: "Masala Papad",
        marathi: "मसाला पापड",
        price: 40,
        category: "Veg Starters"
    },

    {
        name: "Green Salad",
        marathi: "ग्रीन सॅलड",
        price: 60,
        category: "Veg Starters"
    },

    {
        name: "Veg Crispy",
        marathi: "वेज क्रिस्पी",
        price: 200,
        category: "Veg Starters"
    },

    {
        name: "Paneer Tikka",
        marathi: "पनीर टिक्का",
        price: 300,
        category: "Veg Starters"
    },

    {
        name: "Hara Bhara Kebab",
        marathi: "हरा भरा कबाब",
        price: 250,
        category: "Veg Starters"
    },

    {
        name: "Veg Manchurian Dry",
        marathi: "वेज मंचुरियन ड्राय",
        price: 180,
        category: "Veg Starters"
    },

    {
        name: "Chilli Paneer",
        marathi: "चिली पनीर",
        price: 280,
        category: "Veg Starters"
    },

    {
        name: "Paneer 65",
        marathi: "पनीर ६५",
        price: 300,
        category: "Veg Starters"
    },

    {
        name: "Paneer Crispy",
        marathi: "पनीर क्रिस्पी",
        price: 300,
        category: "Veg Starters"
    },

    {
        name: "Chana Garlic Roast",
        marathi: "चना गार्लिक रोस्ट",
        price: 200,
        category: "Veg Starters"
    },

    {
        name: "Chana Chilli",
        marathi: "चना चिली",
        price: 180,
        category: "Veg Starters"
    },
{
    name: "Kachumber Salad",
    marathi: "कचुंबर सलाद",
    price: 80,
    category: "Veg Starters"
},
{
    name: "Pakoda",
    marathi: "पकौड़ा",
    price: 120,
    category: "Veg Starters"
},
{
    name: "Corn Crispy",
    marathi: "कॉर्न क्रिस्पी",
    price: 200,
    category: "Veg Starters"
},
{
    name: "Garlic Fry",
    marathi: "गार्लिक फ्राई",
    price: 100,
    category: "Veg Starters"
},
{
    name: "Methi Lasuni",
    marathi: "मेथी लसुणी",
    price: 150,
    category: "Veg Starters"
},
{
    name: "Kadhai Masala",
    marathi: "कढ़ाई मसाला",
    price: 200,
    category: "Veg Starters"
},
{
    name: "Peanut Masala",
    marathi: "पीनट मसाला",
    price: 120,
    category: "Veg Starters"
},
{
    name: "Green Peas",
    marathi: "हरे मटर",
    price: 170,
    category: "Veg Starters"
},
{
    name: "Tomato Chutney",
    marathi: "टमाटर चटनी",
    price: 120,
    category: "Veg Starters"
},
{
    name: "Mushroom Masala",
    marathi: "मशरूम मसाला",
    price: 270,
    category: "Veg Starters"
},

    // ======================================
    // NON-VEG STARTERS | नॉन-वेज स्टार्टर
    // ======================================

    {
        name: "Chicken Tandoori - Full",
        marathi: "चिकन तंदुरी - फुल",
        price: 600,
        category: "Non Veg Starters"
    },

    {
        name: "Chicken Tandoori - Half",
        marathi: "चिकन तंदुरी - हाफ",
        price: 350,
        category: "Non Veg Starters"
    },

    {
        name: "Chicken Tikka",
        marathi: "चिकन टिक्का",
        price: 350,
        category: "Non Veg Starters"
    },

    {
        name: "Chilli Chicken",
        marathi: "चिली चिकन",
        price: 320,
        category: "Non Veg Starters"
    },

    {
        name: "Fish Fry",
        marathi: "फिश फ्राय",
        price: 250,
        category: "Non Veg Starters"
    },

    {
        name: "Chicken 65",
        marathi: "चिकन ६५",
        price: 350,
        category: "Non Veg Starters"
    },

    {
        name: "Chicken Seekh Kebab",
        marathi: "चिकन सीख कबाब",
        price: 350,
        category: "Non Veg Starters"
    },

    {
        name: "Chicken Oil Roast",
        marathi: "चिकन ऑइल रोस्ट",
        price: 250,
        category: "Non Veg Starters"
    },

    {
        name: "Mutton Roast",
        marathi: "मटण रोस्ट",
        price: 320,
        category: "Non Veg Starters"
    },

    {
        name: "Mutton Seekh Kebab",
        marathi: "मटण सीख कबाब",
        price: 400,
        category: "Non Veg Starters"
    },

    {
        name: "Egg Fry",
        marathi: "अंडा फ्राय",
        price: 60,
        category: "Non Veg Starters"
    },

    {
        name: "Boiled Egg",
        marathi: "उकडलेले अंडे",
        price: 40,
        category: "Non Veg Starters"
    },

    {
        name: "Egg Bhurji",
        marathi: "अंडा भुर्जी",
        price: 100,
        category: "Non Veg Starters"
    },

    {
        name: "Egg Omelette",
        marathi: "अंडा ऑम्लेट",
        price: 80,
        category: "Non Veg Starters"
    },

    {
        name: "Egg Curry",
        marathi: "अंडा करी",
        price: 150,
        category: "Non Veg Starters"
    },


    // ======================================
    // CHINESE | चायनीज
    // ======================================

    {
        name: "Veg Noodles",
        marathi: "वेज नूडल्स",
        price: 150,
        category: "Chinese"
    },

    {
        name: "Hakka Noodles",
        marathi: "हक्का नूडल्स",
        price: 170,
        category: "Chinese"
    },

    {
        name: "Schezwan Noodles",
        marathi: "शेजवान नूडल्स",
        price: 180,
        category: "Chinese"
    },

    {
        name: "Chicken Noodles",
        marathi: "चिकन नूडल्स",
        price: 220,
        category: "Chinese"
    },


    // ======================================
    // VEG MAIN COURSE | वेज मेन कोर्स
    // ======================================

    {
        name: "Paneer Butter Masala",
        marathi: "पनीर बटर मसाला",
        price: 320,
        category: "Veg Main Course"
    },

    {
        name: "Kadai Paneer",
        marathi: "कढाई पनीर",
        price: 280,
        category: "Veg Main Course"
    },

    {
        name: "Palak Paneer",
        marathi: "पालक पनीर",
        price: 260,
        category: "Veg Main Course"
    },

    {
        name: "Paneer Masala",
        marathi: "पनीर मसाला",
        price: 270,
        category: "Veg Main Course"
    },

    {
        name: "Paneer Saoji",
        marathi: "पनीर सावजी",
        price: 280,
        category: "Veg Main Course"
    },

    {
        name: "Paneer Angara",
        marathi: "पनीर अंगारा",
        price: 280,
        category: "Veg Main Course"
    },

    {
        name: "Veg Angara",
        marathi: "वेज अंगारा",
        price: 280,
        category: "Veg Main Course"
    },

    {
        name: "Veg Kolhapuri",
        marathi: "वेज कोल्हापुरी",
        price: 220,
        category: "Veg Main Course"
    },

    {
        name: "Mix Veg",
        marathi: "मिक्स वेज",
        price: 200,
        category: "Veg Main Course"
    },

    {
        name: "Dal Tadka",
        marathi: "डाळ तडका",
        price: 170,
        category: "Veg Main Course"
    },

    {
        name: "Dal Fry",
        marathi: "डाळ फ्राय",
        price: 150,
        category: "Veg Main Course"
    },
{
    name: "Plain Dal",
    marathi: "सादी दाल",
    price: 120,
    category: "Veg Main Course"
},

    // ======================================
    // NON-VEG MAIN COURSE | नॉन-वेज मेन कोर्स
    // ======================================

    {
        name: "Butter Chicken - Plate",
        marathi: "बटर चिकन - प्लेट",
        price: 350,
        category: "Non Veg Main Course"
    },

    {
        name: "Butter Chicken - Half",
        marathi: "बटर चिकन - हाफ",
        price: 700,
        category: "Non Veg Main Course"
    },

    {
        name: "Butter Chicken - Full",
        marathi: "बटर चिकन - फुल",
        price: 1400,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Curry - Plate",
        marathi: "चिकन करी - प्लेट",
        price: 300,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Curry - Half",
        marathi: "चिकन करी - हाफ",
        price: 600,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Curry - Full",
        marathi: "चिकन करी - फुल",
        price: 1200,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Masala - Plate",
        marathi: "चिकन मसाला - प्लेट",
        price: 320,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Masala - Half",
        marathi: "चिकन मसाला - हाफ",
        price: 700,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Masala - Full",
        marathi: "चिकन मसाला - फुल",
        price: 1400,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Saoji - Plate",
        marathi: "चिकन सावजी - प्लेट",
        price: 320,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Saoji - Half",
        marathi: "चिकन सावजी - हाफ",
        price: 700,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Saoji - Full",
        marathi: "चिकन सावजी - फुल",
        price: 1400,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Kolhapuri - Plate",
        marathi: "चिकन कोल्हापुरी - प्लेट",
        price: 320,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Kolhapuri - Half",
        marathi: "चिकन कोल्हापुरी - हाफ",
        price: 700,
        category: "Non Veg Main Course"
    },

    {
        name: "Chicken Kolhapuri - Full",
        marathi: "चिकन कोल्हापुरी - फुल",
        price: 1400,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Curry - Plate",
        marathi: "मटण करी - प्लेट",
        price: 350,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Curry - Half",
        marathi: "मटण करी - हाफ",
        price: 700,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Curry - Full",
        marathi: "मटण करी - फुल",
        price: 1400,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Saoji - Plate",
        marathi: "मटण सावजी - प्लेट",
        price: 360,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Saoji - Half",
        marathi: "मटण सावजी - हाफ",
        price: 720,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Saoji - Full",
        marathi: "मटण सावजी - फुल",
        price: 1450,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Kolhapuri - Plate",
        marathi: "मटण कोल्हापुरी - प्लेट",
        price: 350,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Kolhapuri - Half",
        marathi: "मटण कोल्हापुरी - हाफ",
        price: 750,
        category: "Non Veg Main Course"
    },

    {
        name: "Mutton Kolhapuri - Full",
        marathi: "मटण कोल्हापुरी - फुल",
        price: 1500,
        category: "Non Veg Main Course"
    },

    {
        name: "Murgh Musallam - Half",
        marathi: "मुर्ग मुसल्लम - हाफ",
        price: 800,
        category: "Non Veg Main Course"
    },

    {
        name: "Murgh Musallam - Full",
        marathi: "मुर्ग मुसल्लम - फुल",
        price: 1600,
        category: "Non Veg Main Course"
    },

    {
        name: "Fish Curry - Plate",
        marathi: "फिश करी - प्लेट",
        price: 280,
        category: "Non Veg Main Course"
    },

    {
        name: "Fish Curry - Half",
        marathi: "फिश करी - हाफ",
        price: 600,
        category: "Non Veg Main Course"
    },

    {
        name: "Fish Curry - Full",
        marathi: "फिश करी - फुल",
        price: 1000,
        category: "Non Veg Main Course"
    },

    {
        name: "Sundari",
        marathi: "सुंदरी",
        price: 250,
        category: "Non Veg Main Course"
    },

    {
        name: "Khima Kaleji",
        marathi: "खिमा कलेजी",
        price: 350,
        category: "Non Veg Main Course"
    },


    // ======================================
    // RICE & BIRYANI | राईस व बिर्याणी
    // ======================================

    {
        name: "Steam Rice - Full",
        marathi: "स्टीम राईस - फुल",
        price: 120,
        category: "Rice & Biryani"
    },

    {
        name: "Steam Rice - Half",
        marathi: "स्टीम राईस - हाफ",
        price: 70,
        category: "Rice & Biryani"
    },

    {
        name: "Jeera Rice - Full",
        marathi: "जिरा राईस - फुल",
        price: 140,
        category: "Rice & Biryani"
    },

    {
        name: "Jeera Rice - Half",
        marathi: "जिरा राईस - हाफ",
        price: 80,
        category: "Rice & Biryani"
    },

    {
        name: "Garlic Rice - Full",
        marathi: "गार्लिक राईस - फुल",
        price: 160,
        category: "Rice & Biryani"
    },

    {
        name: "Garlic Rice - Half",
        marathi: "गार्लिक राईस - हाफ",
        price: 100,
        category: "Rice & Biryani"
    },

    {
        name: "Veg Pulao",
        marathi: "वेज पुलाव",
        price: 180,
        category: "Rice & Biryani"
    },

    {
        name: "Veg Biryani",
        marathi: "वेज बिर्याणी",
        price: 230,
        category: "Rice & Biryani"
    },

    {
        name: "Veg Fried Rice",
        marathi: "वेज फ्राईड राईस",
        price: 160,
        category: "Rice & Biryani"
    },

    {
        name: "Schezwan Rice",
        marathi: "शेजवान राईस",
        price: 180,
        category: "Rice & Biryani"
    },

    {
        name: "Paneer Pulao",
        marathi: "पनीर पुलाव",
        price: 220,
        category: "Rice & Biryani"
    },

    {
        name: "Egg Fried Rice",
        marathi: "एग फ्राईड राईस",
        price: 200,
        category: "Rice & Biryani"
    },

    {
        name: "Chicken Biryani",
        marathi: "चिकन बिर्याणी",
        price: 320,
        category: "Rice & Biryani"
    },

    {
        name: "Chicken Fried Rice",
        marathi: "चिकन फ्राईड राईस",
        price: 250,
        category: "Rice & Biryani"
    },

    {
        name: "Mutton Biryani",
        marathi: "मटण बिर्याणी",
        price: 350,
        category: "Rice & Biryani"
    },


    // ======================================
    // INDIAN BREADS | इंडियन ब्रेड्स
    // ======================================

    {
        name: "Plain Roti",
        marathi: "साधी रोटी",
        price: 15,
        category: "Indian Breads"
    },

    {
        name: "Butter Roti",
        marathi: "साधी बटर रोटी",
        price: 20,
        category: "Indian Breads"
    },

    {
        name: "Naan",
        marathi: "नान",
        price: 40,
        category: "Indian Breads"
    },

    {
        name: "Butter Naan",
        marathi: "बटर नान",
        price: 50,
        category: "Indian Breads"
    },

    {
        name: "Garlic Naan",
        marathi: "गार्लिक नान",
        price: 70,
        category: "Indian Breads"
    },

    {
        name: "Stuffed Kulcha",
        marathi: "स्टफ्ड कुलचा",
        price: 120,
        category: "Indian Breads"
    },

    {
        name: "Aloo Paratha",
        marathi: "आलू पराठा",
        price: 100,
        category: "Indian Breads"
    },

    {
        name: "Paneer Paratha",
        marathi: "पनीर पराठा",
        price: 150,
        category: "Indian Breads"
    },

    {
        name: "Tandoori Roti",
        marathi: "तंदुरी रोटी",
        price: 25,
        category: "Indian Breads"
    },

    {
        name: "Tandoori Butter Roti",
        marathi: "तंदुरी बटर रोटी",
        price: 30,
        category: "Indian Breads"
    },


    // ======================================
    // DESSERTS | डेझर्ट्स
    // ======================================

    {
        name: "Gulab Jamun",
        marathi: "गुलाबजाम",
        price: 50,
        category: "Desserts"
    },

    {
        name: "Rasgulla",
        marathi: "रसगुल्ला",
        price: 70,
        category: "Desserts"
    },


    // ======================================
    // BEVERAGES | पेय पदार्थ
    // ======================================

    {
        name: "Mineral Water",
        marathi: "मिनरल वॉटर",
        price: 20,
        category: "Beverages"
    },

    {
        name: "Fresh Lime Soda",
        marathi: "फ्रेश लाईम सोडा",
        price: 60,
        category: "Beverages"
    },

    {
        name: "Hot Coffee",
        marathi: "हॉट कॉफी",
        price: 50,
        category: "Beverages"
    },

    {
        name: "Tea",
        marathi: "चहा",
        price: 20,
        category: "Beverages"
    },

    {
        name: "Black Tea",
        marathi: "ब्लॅक टी",
        price: 15,
        category: "Beverages"
    },

    {
    name: "Plastic Glass",
    marathi: "प्लास्टिक ग्लास",
    price: 10,
    category: "Beverages"
},
{
    name: "Soda",
    marathi: "सोडा",
    price: 70,
    category: "Beverages"
},
{
    name: "Sprite / Cold Drink",
    marathi: "स्प्राइट / कोल्ड ड्रिंक",
    price: 30,
    category: "Beverages"
},

    // ======================================
    // PREPARATION | बनवाई
    // ======================================

    {
        name: "Preparation",
        marathi: "बनवाई",
        price: 400,
        category: "Preparation"
    }

];