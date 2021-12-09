const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer")
const { google } = require('googleapis');
let User = require('./models/user.model');
const jwt = require ("jsonwebtoken");
const { jwtSecret, jwtExpire } = require ("../config/keys");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
 
app.use(cors()); 
app.use(express.json());

const CLIENT_ID = '496826699716-ndbuocflsrp7rsm0mde6gfvvdap6sanp.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-KIevWwrTSOCgYIARAAGAQSNwF-L9Ir1-bGyz-tUfGxMMvoLCByzPfcH3jFv6-uygO7p0uOw02Dh35a-ujGKyv61--Lbyo6Nrs';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');
const addressesRouter = require('./routes/addresses');
const boxesRouter = require('./routes/boxes');
const ordersRouter = require('./routes/orders');
const orderitemsRouter = require('./routes/orderitems');
const palletsRouter = require('./routes/pallets');
const productsRouter = require('./routes/products');
const transactionsRouter = require('./routes/transactions');

app.use('/items', itemsRouter);
app.use('/users', usersRouter);
app.use('/addresses', addressesRouter);
app.use('/boxes', boxesRouter);
app.use('/orders', ordersRouter);
app.use('/orderitems', orderitemsRouter);
app.use('/pallets', palletsRouter);
app.use('/products', productsRouter);
app.use('/transactions', transactionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.post("/send_mail", (req, res) => {
	let { email, firstname, lastname, total } = req.body;
	const accessToken = oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'storeittusa@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
	  tls: {
		rejectUnauthorized: false
	}
	})

	transport.sendMail({
		from: '<storeittusa@gmail.com>',
		to: email,
		subject: "Invoice for your products at Store It Usa",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <p>Hi ${firstname} ${lastname},</p>
		<p>I hope you’re well. 
		The total amount for your unpaid products is ${total}. 
		Please don’t hesitate to reach out if you have any questions.</p>
    
        <p>Kind regards,</p>
		<p>Store It Usa</p>
         </div>
    `
	})
    res.json({message: "Invoice sent. Please check email."})
})


app.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) { 
                const payload = { 
                    user:{
                        _id: user._id     
                    }, 
                };
            
                jwt.sign(payload, jwtSecret, {expiresIn: jwtExpire}, (err, token) => {
                    if (err) console.log("jwt error= ", err);
                     const {_id, username, firstname, lastname, email, roleid, items} = user;
                     res.json({message: "Login Successfull", token, user: {_id, username, firstname, lastname, email, roleid, items}})
                });
          } else {
              res.send({ message: "Passwords didn't match."})
          }
      } else {
          res.send({message: "User is not registered."})
      }


  })
}) 

app.post("/register", (req, res)=> {
  const { firstname, middlename, lastname, username, email, password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User is already registerd"})
      } else {
          const user = new User({
              firstname,
              middlename,
              lastname, 
              username,
              email,
              password
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
}) 