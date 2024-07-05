const express = require("express");
const colors = require("colors");
const Person = require("../modelSchemas/userSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched!".rainbow);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error!" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data Saved To Database!".rainbow);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error!" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const updatedInfo = req.body;
    const response = await Person.findByIdAndUpdate(getId, updatedInfo, {
      runvalidator: true,
      new: true,
    });
    if (!response) {
      return res.status(400).json({ Error: "Cannot Find Person" });
    }
    console.log("Data Updated To Database!".rainbow);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const response = await Person.findByIdAndDelete(getId);
    if (!response) {
      return res.status(400).json({ Error: "Cannot Find Person" });
    }
    console.log("Data Deleted From the Database!".rainbow);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error!" });
  }
});
module.exports = router;
