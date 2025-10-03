# 📚 PLP Bookstore - MongoDB Project

## 🚀 Setup

1. Install MongoDB locally OR create a free MongoDB Atlas cluster
2. Connect using MongoDB Compass or `mongosh`
3. Create the database:

   ```bash
   use plp_bookstore
   ```

## 📂 Files

- `insert_books.js` → Inserts 10+ sample books into the `books` collection
- `queries.js` → Contains CRUD, advanced queries, aggregations, and indexing commands
- `README1.md` → Instructions on setup and usage

## ▶️ How to Run

1. Insert sample data:

   ```bash
   mongosh < insert_books.js
   ```

2. Run queries:

   ```bash
   mongosh < queries.js
   ```

## ✅ Features

- Basic CRUD operations
- Filtering, projection, sorting, and pagination
- Aggregation pipelines for insights (average price, top author, grouping by decade)
- Indexing with performance analysis using `explain()`

## 📸 Screenshots

[Books Collection in Compass](screenshots/books_collection.png)
[Aggregation Result](screenshots/aggregation.png)
[Indexing](screenshots/index.png)

- Sample query results (e.g., books by author, sorted results, aggregations)
- Indexing performance comparison using `.explain()`
