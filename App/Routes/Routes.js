const express = require("express");
const router = express.Router();

const {
  addIntern,
  listIntern,
  deleteIntern,
  updateIntern,
  singleIntern
} = require("../Controller/Controller");

router.post("/add", addIntern);
router.get("/list", listIntern);
router.delete("/delete/:id", deleteIntern);
router.put("/edit/:id", updateIntern);
router.get("/single/:id", singleIntern);

module.exports = router;
