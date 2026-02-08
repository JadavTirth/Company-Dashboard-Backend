let enquiryModel = require("../Model/Model");

// add
let addIntern = async (req, res) => {
  try {

    const data = await enquiryModel.create(req.body);

    res.send({
      status: 1,
      message: "Enquiry added successfully",
      data: data
    });

  } catch (err) {
    res.status(500).send({
      status: 0,
      message: err.message
    });
  }
};


// list
const listIntern = async (req, res) => {
  try {
    const list = await enquiryModel.find().sort({ createdAt: -1 });

    res.send({
      status: 1,
      data: list
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: err.message
    });
  }
};



// delete
const deleteIntern = async (req, res) => {
  try {
    await enquiryModel.deleteOne({ _id: req.params.id });

    res.send({
      status: 1,
      message: "Intern deleted"
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: err.message
    });
  }
};

// update
const updateIntern = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await enquiryModel.updateOne(
      { _id: id },
      req.body
    );

    res.send({
      status: 1,
      message: "Intern updated successfully",
      data: result
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: err.message
    });
  }
};

// single row
const singleIntern = async (req, res) => {
  try {
    const data = await enquiryModel.findById(req.params.id);

    res.send({
      status: 1,
      data
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: err.message
    });
  }
};

module.exports = {
  addIntern,
  listIntern,
  deleteIntern,
  updateIntern,
  singleIntern
};
