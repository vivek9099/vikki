  const express = require('express'); 
  const hbs = require('hbs');
  const fs=require('fs'); 
 
var app = express();
 const port = 3000; 
 

 
app.use((req,res,next) => {
    var currentTime= new Date().toString();
    console.log(`Timestamp is -${currentTime}`);
    console.log(`Request Method is -${req.method}`);
    console.log(`Url Visited is- ${req.url}`);

    //storing to a file
    var storedata=`${currentTime}${req.method}${req.url}`;
    fs.appendFile('savedata.log',storedata+'\n',(err)=>{
        if(err){
            console.log('Error Found');
        }
    });
    next();
});
app.use((req,res,next)=>{
    res.render ('undermain.hbs');
})
hbs.registerPartials(__dirname + '/views/partials'); 
 
app.set('view engine', 'hbs');
 app.use(express.static(__dirname + '/public')); 
 

 hbs.registerHelper('getCurrentYear', () => {   return new Date().getFullYear(); }); 
 
hbs.registerHelper('changeCase', (text) => {   return text.toUpperCase();
 }); 
 
hbs.registerHelper('changeCaseLower', (text) => {   return text.toLowerCase();
}); 
 
app.get('/', (req, res) => {   res.render('home1.hbs',
 {     pageTitle: 'Home Page',    
  welcomeMessage: 'Welcome to my resume website',    
   studentDetails: ' home page of Resume'   
}); 
}); 

 
 
 
app.get('/About', (req, res) => {   res.render('about1.hbs',
 {     pageTitle: 'About Page', 
  }); 
}); 

 
app.get('/error', (req, res) => {    res.send({      errorMsg: 'Unable to find the page'   
 });
 }); 
 
app.listen(port, () => {     console.log(`App listening on port number :- ${port}...!!!`); }); 