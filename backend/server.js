const app=require("./app");
const dotenv=require("dotenv");

// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled  rejection`);
    process.exit(1);
})
// Config
dotenv.config({path:"backend/config/config.env"});
const connectDB=require("./config/database")
connectDB();

  
const server=app.listen(process.env.PORT,()=>{
    console.log(`working on https://localhost:${process.env.PORT}`)
})



// unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
server.close(()=>{
    process.exit(1);
});
})