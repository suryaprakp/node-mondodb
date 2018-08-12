const MongoClient=require('Mongodb').MongoClient;

var url='Mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,client)=>{
	if(err)
		return console.log('Error while connecting TodoApp');

	console.log('Connected to DB');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed : false
	// },(err,result)=>{
	// 	if(err)
	// 		return console.log('Error inserting Todos');
	
	// 	console.log(JSON.stringify(result.ops,undefined,2));

	// });

	db.collection('Users').insertOne({
			name:'Vinay Prakash Patel',
			age: 28,
			location:'Bangalore'
		}).then((result)=>{console.log(JSON.stringify(result.ops,undefined,2));
		});

	client.close();

});


