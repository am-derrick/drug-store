const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request } = require("express");
const { response } = require("express");
const stripe = require('stripe')('sk_test_51KdXbYKeW4rZEkPG0P198il493giGeqjCDRgQrk8mGwxsMd9feAlODUCgkA03KBWn4MwynFxa70V6kZUXiIjihtI00CSiSstuD');

// API set up
// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send ('hello world!'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('/Payment Request Received for >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);