const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middle ware 
app.use(cors());
app.use(express.json());




// main oparation 
// main oparation 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3worizk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const servicesCollection = client.db('carDoctor').collection('services')
    const bookmarkCollection = client.db('carDoctor').collection('bookmark')

    app.get('/services/:id', async (req,res) => {
         const id = req.params.id;
         const query = {_id: new ObjectId(id)}
         const options = {
          projection: {title:1,price:1,service_id:1,description:1,img:1}
         }
         const result = await servicesCollection.findOne(query,options)
        res.send(result)
    })

    app.get('/services', async (req,res) => {
        const finds = servicesCollection.find();
        const result = await finds.toArray();
        res.send(result)
    })



    // bookmark services 

    app.get('/bookmark', async (req,res) => {
      // console.log(req.query.userEmail)
      let query = {} ;
      if(req.query?.userEmail){ 
        query = {userEmail : req.query.userEmail}
      }

      const result = await bookmarkCollection.find(query).toArray();
      res.send(result)
  })

    app.post('/bookmark', async (req,res)=> {
      const booking = req.body;
      const result = await bookmarkCollection.insertOne(booking)
      res.send(result)
    })



    app.patch('/bookmark/:id', async (req,res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const updateBooked = req.body;
      console.log(updateBooked)
      const updateDoc = {
        $set : { status : updateBooked.status  }
      }
      
      const result = await bookmarkCollection.updateOne(query,updateDoc)
      res.send(result)
 
    })

    app.delete('/bookmark/:id', async (req,res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await bookmarkCollection.deleteOne(query)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);









// first get or set // oparation 
app.get('/',(req,res)=> {
    res.send('car-backend-servere-is-running')
})
app.listen(port,()=>{
    console.log('port is running or working')
})