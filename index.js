const express = require('express');
const dbConn = require("./config/db.conn");  
const app = express();

const PORT = process.env.PORT || 5000;
dbConn();

// Routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});