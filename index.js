let express = require('express');
let app = express();
let mongoose = require('mongoose');
let router = require('./App/Routes/Routes');
require('dotenv').config();

app.use(express.json()); // json file read


let cors = require('cors'); // cros module
app.use(cors({
  origin: "http://localhost:5173"
}));



// routes
app.use('/api/website/enquiry', router);
//www.localhost:8000/api/website/enquiry/




app.use('/', (req, res) => {
  res.send("Welcome to the Enquiry API");
}); // www.localhost:8000/




// connect to mongoose
mongoose.connect(process.env.DBURL)
  .then(() => {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });
