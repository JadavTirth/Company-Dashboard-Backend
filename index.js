let express = require("express");
let app = express();
let mongoose = require("mongoose");
let router = require("./App/Routes/Routes");
let cors = require("cors");
require("dotenv").config();

app.use(express.json());

// ✅ CORS (local + vercel dono ke liye)
app.use(cors());

// ✅ routes
app.use("/api/website/enquiry", router);

// ✅ health / test route
app.get("/", (req, res) => {
  res.send("Welcome to the Enquiry API");
});

// ✅ MongoDB connect + server start
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });
