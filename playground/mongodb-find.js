const {MongoClient,ObjectID} = require('mongodb');

var url='Mongodb://localhost:27017/TodoApp';

MongoClient.connect(url)
.then((client)=> 
	{ 
		console.log("Connected to server!");
		const db = client.db('TodoApp');

		db.collection('Users').find({age:28}).toArray().then((result)=>{console.log("Result -->",result); client.close();})
													   .catch((err)=> {console.log("Error is -->",err);});
		db.collection('Users').find().count().then((count)=>{console.log("Count -->",count)});											   

	})
.catch((err)=>{console.log("Error connecting to server, Try Again!")});