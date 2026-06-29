
```markdown
# 🛒 E-Commerce Backend System

## 📌 Overview

This project is a **complete backend system for an E-commerce application** built using:

- Node.js
- Express.js
- MongoDB (Mongoose)

It handles core functionalities like:

- Product management
- Inventory (stock) tracking
- Cart operations
- Order processing
- Payment workflow
- Stock reservation and rollback

---

## 🚀 Tech Stack

- **Node.js** – Backend runtime (asynchronous & scalable)
- **Express.js** – API framework
- **MongoDB Atlas** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing

---

## 🧱 Architecture

The application follows a clean and scalable architecture:

```

Route → Controller → Service → Model → MongoDB

```

### 📌 Layers Explained

- **Routes** → Define API endpoints
- **Controllers** → Handle requests & responses
- **Services** → Business logic (core logic)
- **Models** → Database structure (Mongoose schemas)
- **Database** → MongoDB stores data

---

## 📦 Modules

---

### 🛍️ Product Service

Manages product data.

**Features:**

- Create product
- Get all products
- Get product by ID

---

### 📦 Inventory Service

Manages product stock separately.

**Features:**

- Create inventory for product
- Get stock by productId
- Update stock
- Reduce stock during order ✅
- Restore stock on payment failure ✅

---

### 🛒 Cart Service

Handles temporary storage for user items.

**Features:**

- Add item to cart
- Update item quantity
- Remove item
- View cart

📌 Cart does NOT store total (calculated dynamically)

---

### 📑 Order Service

Handles checkout process.

**Features:**

- Create order using cart
- Calculate total amount
- Reduce stock ✅
- Clear cart after order

---

### 💰 Payment Service

Handles payment lifecycle.

**Features:**

- Create payment
- Update payment status
- Confirm order on success ✅
- Restore stock on failure ✅

---

## 🔄 Workflow

```

Product
↓
Inventory
↓
Cart
↓
Order (stock reduced ✅)
↓
Payment
↓
Order Confirmed ✅ / Failed ❌

```

---

## 🔥 Key Features

---

### ✅ Stock Reservation

Stock is reduced when an order is created to **prevent overselling**.

---

### ✅ Stock Rollback (Compensating Transaction)

If payment fails:

```

Stock is restored ✅
Order marked as FAILED ✅

```

---

### ✅ Order Lifecycle

```

CREATED → CONFIRMED → FAILED

```

---

## 🧪 API Endpoints

---

### 🛍️ Products

```

POST   /api/products
GET    /api/products
GET    /api/products/:id

```

---

### 📦 Inventory

```

POST   /api/inventory
GET    /api/inventory/:productId
PATCH  /api/inventory/:productId

```

---

### 🛒 Cart

```

POST   /api/cart/items
GET    /api/cart
PATCH  /api/cart/items/:id
DELETE /api/cart/items/:id

```

---

### 📑 Orders

```

POST   /api/orders
GET    /api/orders
GET    /api/orders/:id

```

---

### 💰 Payments

```

POST   /api/payments
PATCH  /api/payments/:id
GET    /api/payments/:id

````

---

## ⚙️ Setup Instructions

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/gayathri-ms2006/ecommerce.git
cd ecommerce
````

***

### 2️⃣ Install Dependencies

```bash
npm install
```

***

### 3️⃣ Add Environment Variables

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

***

### 4️⃣ Run Server

```bash
npm run dev
```

***

## ✅ Server runs at:

```
http://localhost:5000
```

***

## 🧪 Testing (Postman Flow)

Follow these steps:

1. Create product
2. Create inventory
3. Add item to cart
4. Create order
5. Create payment
6. Update payment status

***

## 📂 Project Structure

```
src/
 ├── modules/
 │   ├── product/
 │   ├── inventory/
 │   ├── cart/
 │   ├── order/
 │   ├── payment/
 ├── config/
 │   └── db.js
 ├── app.js
 └── server.js
```



