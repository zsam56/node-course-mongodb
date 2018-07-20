// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b50febd1249833352c3a01e')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log("unable to get");
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos');
    console.log(`Todos count ${count}`);
  }, (error) => {
    console.log("unable to get");
  });

  db.collection('Users').find({
    name: 'Zachary Samuelson'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('No name that matches.');
  });

  client.close();
});
