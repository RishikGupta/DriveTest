
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rishikg7619:hello123@rishiknode.hrxljwe.mongodb.net/?retryWrites=true&w=majority&appName=RishikNode";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost'); 
async function main() {
    const uri = "mongodb+srv://rishikg7619:hello123@rishiknode.hrxljwe.mongodb.net/?retryWrites=true&w=majority&appName=RishikNode";
    
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
    
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);
//code for crud operations in main() method
// try {
    //     const blogpost = await BlogPost.create({
    //         title: "Your custom title",
    //         body: "Your custom body message"
    //     });
    //     console.log(blogpost);
    // }
    // catch (err) {
    //     console.log(err);
    // }
    // try {
    //     const blogposts = await BlogPost.find();
    //     console.log(blogposts);
    // } catch (err) {
    //     console.log(err);
    // }
    // try {
    //     const id = "665521d8fac1a38aa1d086b9";
    //     const updatedBlogpost = await BlogPost.findByIdAndUpdate(id, {
    //         title: "My First Blogpost",
    //         body: "Welcome to Full Stack Development"
    //     });
    //     console.log(updatedBlogpost);
    // } catch (err) {
    //     console.log(err);
    // }
    // try {
    //     const id = "665521d8fac1a38aa1d086b9";
    //     const deletedBlogpost = await BlogPost.findByIdAndDelete(id);
    //     console.log(deletedBlogpost);
    //     } catch (error) {
    //     console.log(error);
    //     }