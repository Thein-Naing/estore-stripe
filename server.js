//pk_test_51NESrqHpTTELhGYNLcO9J2PzPFHJE2mJLBVUuqv5NBF12heMthn2nQDE4Vk6eHJ1jfCepUisyvtNVpGeftS4qosh00zBENIGIi
//coffee : price_1NHhY9HpTTELhGYNqJko5s5l
//Sunglesses : price_1NHhbqHpTTELhGYNGYTVa2DF
//Camera :price_1NHhd2HpTTELhGYNWOiZig6S

//import all dependencies.
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const STRIPE_URI='pk_test_51NESrqHpTTELhGYNLcO9J2PzPFHJE2mJLBVUuqv5NBF12heMthn2nQDE4Vk6eHJ1jfCepUisyvtNVpGeftS4qosh00zBENIGIi'


const stripe = require('stripe')(STRIPE_URI);

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());


app.post('/checkout', async(req, res)=> {
  /*
  req.body.items [
    {
      id: 1,
      quantity: 3
    }
  ]
  but stripe wants like this [
    {
      price: 1,
      quantity: 3
    }
  ]
  */
})
// app.listen()
