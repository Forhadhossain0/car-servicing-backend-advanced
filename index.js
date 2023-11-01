const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken'); ///
const cookieParser = require('cookie-parser'); ///
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;



// middle ware 
app.use(cors ({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
  ); 
app.use(express.json());
app.use(cookieParser())


// main oparation

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3worizk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



//  my middleware 
const logger = async (req,res,next) => {
  console.log('my middle called : ', req.host , req.originalUrl);
  next();
}


const verifyToken = async(req,res,next)=> {
  const token = req?.cookies?.token;
  if(!token){
    return res.status(401).send({message : 'unauthorized accesss'});
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err){
      console.log(err);
      return res.status(401).send({message : 'unathorized token'});
    }
    console.log('the value of token : ', decoded);
    req.user = decoded;
    next();
  })
}


async function run() {
  try {
    await client.connect();
    const servicesCollection = client.db("carDoctor").collection("services");
    const bookmarkCollection = client.db("carDoctor").collection("bookmark");


    // jwt token oparation 
    app.post('/jwt' , logger,  async (req,res) => {
        const user = req.body;
        console.log('jwts :',user)
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1h'});
        res.cookie('token', token, {
                httpOnly: true, secure: false ,  // sameSite: 'none' //its use will cokkie will not come in fron end so comment it 
         })
         .send({success: true});
    })
    app.post('/logout' ,   async (req,res) => {
        const user = req.body;
        console.log(user)
        res.clearCookie('token', {maxAge: 0}).send({success: true})    
    })



    // services oparation 
    app.get("/services/:id", logger, async (req, res) => {
      const id = req.params.id;
      const query   = { _id: new ObjectId(id) };
      const options = {  projection: {
                              title: 1, price: 1, 
                              service_id: 1, description: 1,  img: 1,  
                            }};
      const result = await servicesCollection.findOne(query, options);
      res.send(result);
    });


    app.get("/services", async (req, res) => {
      const finds = servicesCollection.find();
      const result = await finds.toArray();
      res.send(result);
    });





    ///   bookmark services   ///

    app.get("/bookmark", logger, verifyToken, async (req, res) => {
      // console.log('i got my token he he  : ' , req.cookies?.token)
      // console.log('req user : ' , req?.user,  '  req.query : ' , req?.query)
      // if(req.user?.email !== req.query?.email){
      //   return res.status(403).send({message : 'forbidden'})
      // }

      let query = {};
      if (req.query?.email) { query = { email: req.query.email}; }
      const result = await bookmarkCollection.find(query).toArray();
      res.send(result);
    });


    app.post("/bookmark", async (req, res) => {
      const booking = req.body;
      const result = await bookmarkCollection.insertOne(booking);
      res.send(result);
    });

    app.patch("/bookmark/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateBooked = req.body;
      console.log(updateBooked);
      const updateDoc = {
        $set: { status: updateBooked.status },
      };

      const result = await bookmarkCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    app.delete("/bookmark/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookmarkCollection.deleteOne(query);
      res.send(result);
    });





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);




// first get or set // oparation
app.get("/", (req, res) => {
  res.send("car-backend-servere-is-running");
});
app.listen(port, () => {
  console.log("port is running or working");
});
