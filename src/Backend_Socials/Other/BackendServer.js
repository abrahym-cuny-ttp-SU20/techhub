const express = require('express')
const app = express()
const port = 3001
const SocialInfoModel = require('./LoginInfo.js')

//const { response } = require('express')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.get('/',(req,res)=>{
  SocialInfoModel.getSocialInfo()
  .then(response => {res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/socialinfo',(req,res)=>{
  SocialInfoModel.createSocialInfo(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))