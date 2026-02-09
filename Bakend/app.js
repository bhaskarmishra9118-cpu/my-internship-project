const dotenv=require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})