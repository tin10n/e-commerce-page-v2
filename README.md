# 💎✨ SZN — Luxury E-Commerce App ✨💎

**SZN** is a full-stack, responsive, and dynamic eCommerce web application that brings luxury to online shopping.  
It combines a refined user interface with a robust backend powered by Node.js, Express, and PostgreSQL — offering a seamless and sophisticated shopping experience.

> ✨ **Live Demo:** [SZN](https://e-commerce-page-v2-frontend.onrender.com)

---

## 🖥️ Overview

SZN delivers a high-end, elegant digital storefront that feels both luxurious and intuitive.  
Every product, price, and image is served dynamically from a connected PostgreSQL database hosted on **Render**, ensuring content freshness and consistency.

---

## 🧩 Tech Stack

### 🪞 Frontend
- **React.js (Create React App)** — Component-based architecture for modular UI design  
- **React Router** — Smooth client-side navigation  
- **JavaScript (ES6+)** — Interactive rendering and logic handling  
- **CSS3** — Responsive layouts and minimalist design  
- **Swiper.js** — Sleek product sliders for “New Arrivals”  
- **Fetch API** — Fetches dynamic product data from backend endpoints  

### ⚙️ Backend
- **Node.js & Express.js** — RESTful API serving product data  
- **PostgreSQL** — Relational database hosted on Render  
- **CORS & Express Middleware** — Secure, structured data communication  
- **Render Database + TablePlus** — For easy management, queries, and data visualization  

### ☁️ Hosting
- **Frontend:** Render (Static Site)  
- **Backend:** Render (Web Service)  
- **Database:** Render PostgreSQL (connected via TablePlus)

---

## ✨ Features

### 🏠 Home Page
- **Hero Section:** Elegant, minimalist landing banner with luxury branding  
- **New Arrivals Slider:** Interactive carousel displaying latest products  
- **Responsive Design:** Fluid layouts across desktop, tablet, and mobile  

### 🛍️ Products Page
- **Dynamic Product Rendering:** Data fetched directly from PostgreSQL via backend API  
- **Advanced Filters:** Filter products by category and price range  
- **Live Grid Updates:** Instant re-render when filters are applied  
- **Hover Animations:** Subtle motion for a polished user feel  

### 🌐 Global Design
- **Reusable Navbar & Footer** — Consistent across all pages  
- **Responsive Layouts** — Built for elegance on any device  
- **Accessible Design** — Modern best practices for inclusivity  

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/luxuryshop.git
cd luxuryshop
```

### 2. Install Dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Set Up Environment Variables
Create a .env file inside your /backend directory:
```bash
DB_HOST=your_database_host
DB_USER=your_database_user
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_URL=your_postgres_connection_string
PORT=5000
```

Create a .env file inside your /frontend directory:
```bash
REACT_APP_API_URL=https://e-commerce-page-v2-backend.onrender.com
```

### 4. Run the App Locally
Run both the frontend and backend in separate terminals:
```bash
# Frontend
cd frontend
npm start

# Backend
cd backend
npm start
```

Your app will be live at 👉 http://localhost:3000

---

## 🔮 Future Enhancements

### 💼 Product Detail Page *(implementing later)*
- Displays detailed product information with pricing and descriptions  
- Future-ready “Add to Cart” functionality 

### Upcoming Features
- 🛒 Implement full cart and checkout functionality
- 🔍 Add real-time search and sorting options
- 👤 User authentication (login, profile, and orders)
- 💬 Product reviews and star ratings
- 📸 Image optimization and CDN delivery

---

### ** ‧₊˚ ⋅ Feel free to explore the code, browse through the products, and enjoy the curated selection! ⋅ ‧₊˚ ** 

“Luxury is in each detail.” — Hubert de Givenchy