require('dotenv').config();
const connectDB = require('./db');
const Product = require('./models/Product');
const products = require('./products.json');

async function seed() {
  await connectDB();
  try {
    await Product.deleteMany({});
    // Ensure products have numeric `id` field for schema
    const docs = products.map(p => ({ ...p, id: Number(p.id) }));
    await Product.insertMany(docs);
    console.log('Seed complete. Inserted', docs.length, 'products');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
