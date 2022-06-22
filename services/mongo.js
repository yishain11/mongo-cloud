const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://yishain11:mizpootel1@cluster0.rixoi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
let db;
let isConnected = false;
let collection;
async function connectClient() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return;
}

function createDb(dbName) {
  if (!db) {
    db = client.db(dbName);
  }
  return db;
}

async function closeClient() {
  await client.close();
  isConnected = false;
}

function createCollection(colName, db) {
  if (!collection) {
    collection = db.collection(colName);
  }
  return collection;
}

// CREATE
async function insertToCol(doc, collection) {
  const insertRes = await collection.insertOne(doc);
  return insertRes;
}

// READ
async function getStudents(collection, queryObj = {}) {
  const findResult = await collection.find(queryObj).toArray();
  return findResult;
}

// UPDATE
async function updateStudent(collection, filter, updateData) {
  const res = await collection.updateOne(filter, updateData);
  return res;
}

// DELETE
async function deleteStudent(collection, query) {
  const delres = await collection.deleteOne(query);
  return delres;
}

module.exports = {
  connectClient,
  createDb,
  closeClient,
  createCollection,
  insertToCol,
  getStudents,
  updateStudent,
  deleteStudent,
};
