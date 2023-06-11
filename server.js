//pk_test_51NESrqHpTTELhGYNLcO9J2PzPFHJE2mJLBVUuqv5NBF12heMthn2nQDE4Vk6eHJ1jfCepUisyvtNVpGeftS4qosh00zBENIGIi
//coffee : price_1NHhY9HpTTELhGYNqJko5s5l
//Sunglesses : price_1NHhbqHpTTELhGYNGYTVa2DF
//Camera :price_1NHhd2HpTTELhGYNWOiZig6S

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('STRIPE_URI');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
