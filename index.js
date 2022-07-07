const express= require('express');
const app=express();
function Auth() {
    const now = new Date()
    return now.getDay() !== 0 && now.getDay() !== 6 && now.getHours() >= 9 && now.getHours() < 17;
}
app.use(function(req, res, next){
    if(Auth()){
        next();
    }
    else{
        console.log("This App is not available at Weekends !");
        res.send('<h1 style="text-align: center;">This App is not available at Weekends !</h1>');
    }
 });
 app.use(express.static('views'));
 app.get('/css/style.css', function(req, res) {
     res.sendFile(__dirname+'/css/style.css');
   });
   app.get('/', function(req, res) {
     res.sendFile(__dirname+'/views/accueil.html');
   });
   app.get('/services', function(req, res) {
     res.sendFile(__dirname+'/views/services.html');
   });
   app.get('/contact', function(req, res) {
     res.sendFile(__dirname+'/views/contact.html');
  });
  
  
app.listen(5000,()=>console.log('server is running'));