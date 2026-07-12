# 🛍️ ShopSphere - React E-Commerce Frontend

ShopSphere is a modern multi-route e-commerce frontend application built using React and Vite. The application allows users to browse products, view individual product details, manage a global shopping cart, and access a protected checkout flow without browser page reloads.

## 🚀 Features

- Multi-route React application
- Client-side routing using React Router DOM
- Product inventory fetched from DummyJSON REST API
- Dynamic product detail routes
- Product data hydration using `useParams()`
- Global cart management using Context API
- Dynamic cart badge synchronization
- Add to Cart functionality
- Cart quantity management
- Cart state persistence using localStorage
- Mock guest authentication
- Protected checkout route
- Automatic login redirection
- Persistent global Navbar
- Responsive e-commerce interface
- Single Page Application navigation without browser reloads

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- React Context API
- React Icons
- REST API
- DummyJSON
- localStorage
- CSS3

## 🌐 API

Product data is consumed from the DummyJSON Products API.

Base endpoint:

https://dummyjson.com/products

Individual product endpoint:

https://dummyjson.com/products/:id

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── pages/
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ProductView.jsx
│   └── Shop.jsx
├── App.jsx
├── index.css
└── main.jsx