const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const db = client.db('mydb');
const collection = db.collection('users');


client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));
  
collection
  .insertOne({ name: "Arkadian", age: "25" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));

collection
  .findOne({ name: "Arkadian" })
  .then((user) => console.log(user))
  .catch((error) => console.log("Error: ", error));
////////////////////

const mongoose = require('mongoose');
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number}
  });

const User = mongoose.model('User', userSchema);

const newUser = new User({
    name: "Arkadian",
    email: "admin@arkx.group",
    age: 25,
  });
  
  newUser
    .save()
    .then((user) => console.log("User created succesfully: ", user))
    .catch((error) => console.log("Error creating user: ", error));

User.find({})
 .then((users) => console.log(users))
 .catch((error) => console.log("Error fetching users: ", error));

User.findOne({ name: "Arkadian" })
  .then((user) => {
    if (user) console.log(user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));

User.findOneAndUpdate(
    { email: "admin@arkx.group" },
    { $set: { email: "user@arkx.group", age: 20 } }
  )
    .then((user) => {
      if (user) console.log("User updated successfully: ", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error fetching users: ", error));

User.findOneAndDelete({ email: "user@arkx.group" })
    .then((user) => {
      if (user) console.log("User deleted successfully: ", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error deleting user: ", error));

