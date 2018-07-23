// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");
  // const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Get a job',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert todo.", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Zachary Samuelson',
  //   age: 23,
  //   location: 'NY'
  // }, (err, result) => {
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // client.close();
});
