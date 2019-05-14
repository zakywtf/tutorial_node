import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbname = "tutorial_node";

let client;
    
    async function connection() {
        if(!client) client = await MongoClient.connect(url);
        return {
            db : client.db(dbname),
            client : client
        }
    }

    async function read(){
        const {db, client} = await connection();
        const collection = db.collection('log_users');
        return await collection.find().toArray();
    }

module.exports={connection, read}
