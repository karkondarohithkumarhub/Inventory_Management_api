📦 **Inventory Management API**

A RESTful Inventory Management System built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

This API supports CRUD operations, stock logic handling, filtering, sorting, and low-stock detection using a clean MVC structure.

---

### 🚀 Project Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/inventory-api.git
   cd inventory-api
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Configure Environment Variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB
   ```

   If using MongoDB Atlas:

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/inventoryDB
   ```
4. **Start Server**

   **Development mode:**
   ```bash
   npm run dev
   ```

   **Production mode:**
   ```bash
   npm start
   ```

   Server runs at:
   `http://localhost:5000`

---

### 🗂 Project Structure (MVC)
```
inventory-api/
│
├── models/
│   └── Product.js
│
├── controllers/
│   └── productController.js
│
├── routes/
│   └── productRoutes.js
│
├── server.js
├── .env
└── package.json
```

---

### 🛢 MongoDB Configuration

The application connects to MongoDB using Mongoose.

Connection is handled in `server.js`:
```js
mongoose.connect(process.env.MONGO_URI)
```

**Database Name:** `inventoryDB`

**Collection Name:** `products`

> Make sure MongoDB service is running locally if using local setup.

---

### 📌 API Documentation

**Base URL:**
```
http://localhost:5000/products
```

1️⃣ **Create Product**

`POST /products`

**Request Body:**
```json
{
  "name": "Wireless Mouse",
  "sku": "WM-101",
  "category": "Electronics",
  "price": 799,
  "quantity": 25,
  "supplier": "ABC Traders"
}
```

Rules:
- SKU must be unique
- If quantity = 0 → `isAvailable = false`

Returns **201 Created**

---

2️⃣ **Get All Products**

`GET /products`

Returns all products.

---

3️⃣ **Filtering**

Filter by category:
```
GET /products?category=Electronics
```

Filter by availability:
```
GET /products?isAvailable=true
```

---

4️⃣ **Sorting**

Sort by price ascending:
```
GET /products?sort=price
```

Sort by price descending:
```
GET /products?sort=-price
```

---

5️⃣ **Get Single Product**

`GET /products/:id`

Example:
```
GET /products/65f1c123abc4567890
```

Returns:
- **200** if found
- **404** if not found

---

6️⃣ **Update Product**

`PUT /products/:id`

Example body:
```json
{
  "price": 899,
  "quantity": 0
}
```

If quantity becomes 0:
`isAvailable` automatically set to `false`

---

7️⃣ **Delete Product**

`DELETE /products/:id`

Returns success message if deleted.

---

8️⃣ **Low Stock Products (Special Route)**

`GET /products/low-stock`

Returns products where:
- `quantity < 5`

---

✅ **Features Implemented**

- MVC Architecture
- CRUD Operations
- Unique SKU validation
- Stock availability logic
- Filtering & sorting
- Low stock detection
- Proper HTTP status codes
- 404 handling
- Async/await
- Environment configuration with dotenv


🧪 **Testing**

Use Postman to test all endpoints.

Include:
- Postman Collection JSON
- Screenshot of MongoDB products collection


👨‍💻 **Author**

Your Name
GitHub: https://github.com/your-usernamee
