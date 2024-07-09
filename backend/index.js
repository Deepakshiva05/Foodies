const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Port = 8000;
const bcrypt =require('bcrypt');
const FoodieUser = require('./model/ReactSchema'); 
require('dotenv').config();


const MONGO_URL=process.env.Mongo_url;




const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => console.log(error));

app.post('/signup', async (req, res) => {
    const { username, email, password, cpassword } = req.body;
    console.log(`${username} ${email}`);
 
    try {
        const existingUser = await FoodieUser.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }
    } catch (err) {
        return res.status(500).send("Error checking existing user");
    }


    if (password !== cpassword) {
        return res.status(400).send("Passwords do not match");
    }

    var hpassword=await bcrypt.hash(password, 10);
    console.log(hpassword);

    const formData = new FoodieUser({
        username: username,
        email: email,
        password: hpassword,
        cpassword: cpassword
    });

    try {
        await formData.save();
        res.send("Inserted data");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error inserting data");
    }
});

app.post("/login",async(req,res)=>{
    
    const { email, password } = req.body;

    try {
        const user = await FoodieUser.findOne({ email: email });
        if (!user) {
            return res.status(400).send("Email not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send("Invalid password");
        }

        res.send("Login successful");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error during login");
    }
});



app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
