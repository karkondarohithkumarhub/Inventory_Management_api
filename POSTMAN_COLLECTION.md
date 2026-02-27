# Postman Collection for Inventory Management API

Use this markdown to import or recreate the Postman collection in your workspace.

## Importing the Collection

1. Open Postman.
2. Click **Import** in the top-left corner.
3. Choose **Raw Text** and paste the JSON below.
4. Click **Continue**, then **Import**.

---

```json
{
  "info": {
    "name": "Inventory API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Product",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Wireless Mouse\",\n  \"sku\": \"WM-101\",\n  \"category\": \"Electronics\",\n  \"price\": 799,\n  \"quantity\": 25,\n  \"supplier\": \"ABC Traders\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/products",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products"
          ]
        }
      }
    },
    {
      "name": "Get All Products",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/products",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products"
          ]
        }
      }
    },
    {
      "name": "Get Product by ID",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/products/{{product_id}}",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "{{product_id}}"
          ]
        }
      }
    },
    {
      "name": "Update Product",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"price\": 899,\n  \"quantity\": 0\n}"
        },
        "url": {
          "raw": "http://localhost:5000/products/{{product_id}}",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "{{product_id}}"
          ]
        }
      }
    },
    {
      "name": "Delete Product",
      "request": {
        "method": "DELETE",
        "url": {
          "raw": "http://localhost:5000/products/{{product_id}}",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "{{product_id}}"
          ]
        }
      }
    },
    {
      "name": "Low Stock Products",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/products/low-stock",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "low-stock"
          ]
        }
      }
    }
  ]
}
```

---

### Environment Variable Setup

Create an environment in Postman and add the following:

- `base_url` = `http://localhost:5000`
- `product_id` = *(leave blank until you create a product)*

Use `{{base_url}}/products` in requests for portability.

---

You can copy this entire markdown into your docs or share with team members.