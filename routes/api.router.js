const express = require("express");
const router = express.Router();
const path = require("path");
const mongoModel = require("../services/mongo");

router.get("/readStudents", async (req, res) => {
  await mongoModel.connectClient();
  const db = await mongoModel.createDb("class");
  const students = await mongoModel.createCollection("students", db);
  const allstudents = await mongoModel.getStudents(students);
  res.json({ msg: "got students", res: allstudents });
});

router.post("/readStudents", async (req, res) => {
  const filterObj = req.body;
  console.log("filterObj", filterObj);
  await mongoModel.connectClient();
  const db = await mongoModel.createDb("class");
  const students = await mongoModel.createCollection("students", db);
  const filteredstudents = await mongoModel.getStudents(students, filterObj);
  res.json({ msg: "got students", res: filteredstudents });
});

router.put("/readStudents", async (req, res) => {
  const updateData = req.body;
  const { studentName, studentGrades } = updateData;
  console.log("updateData", updateData);
  await mongoModel.connectClient();
  const db = await mongoModel.createDb("class");
  const students = await mongoModel.createCollection("students", db);
  const updateRes = await mongoModel.updateStudent(
    students,
    { studentName },
    {
      $set: {
        studentGrades,
      },
    }
  );
  res.json({ msg: "updated students", res: updateRes });
});

router.delete("/readStudents", async (req, res) => {
  const deleteData = req.body;
  const { studentName } = deleteData;
  await mongoModel.connectClient();
  const db = await mongoModel.createDb("class");
  const students = await mongoModel.createCollection("students", db);
  const delRes = await mongoModel.deleteStudent(students, { studentName });
  res.json({ msg: "delete students", res: delRes });
});

router.post("/createStudent", async (req, res) => {
  const data = req.body;
  await mongoModel.connectClient();
  const db = await mongoModel.createDb("test2");
  const students = await mongoModel.createCollection("students", db);
  const resp = await mongoModel.insertToCol(data, students);
  await mongoModel.closeClient();
  res.json({ msg: "student created", data: resp });
});
module.exports = router;
