const express = require('express');
const dbConn = require("./config/db.conn");  
const app = express();

const PORT = process.env.PORT || 5000;
dbConn();
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});