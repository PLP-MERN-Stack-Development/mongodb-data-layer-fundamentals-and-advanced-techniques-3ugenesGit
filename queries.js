// Task 2: Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1951 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "Pride and Prejudice" }, { $set: { price: 22.00 } })

// Delete a book by its title
db.books.deleteOne({ title: "Wuthering Heights" })

// Task 3: Advanced Queries

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection (return only title, author, price)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sorting by price
db.books.find().sort({ price: 1 }) // ascending
db.books.find().sort({ price: -1 }) // descending

// Pagination (5 books per page)
db.books.find().skip(0).limit(5)   // page 1
db.books.find().skip(5).limit(5)   // page 2

//Task 4: Aggregation Pipeline

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [{ $divide: ["$published_year", 10] }, 1] } ] },
      count: { $sum: 1 }
    }
  }
])

//Task 5: Indexing

// Index on title
db.books.createIndex({ title: 1 })

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Check performance
db.books.find({ title: "Atomic Habits" }).explain("executionStats")

