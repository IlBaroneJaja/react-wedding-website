import 'dotenv/config';
import express from "express";
import enforceHttps from "./middlewares/forcehttps.js";
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import {JSONFilePreset} from "lowdb/node";
import {config} from "dotenv";


const env = config();

const db = await JSONFilePreset('database.json', { users: [] })

const app = express();

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = process.env.SECRET_JWT;

if (process.env.NODE_ENV === 'production') {
    app.use(enforceHttps());
}

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Handle requests for all routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.post('/auth', (req, res) => {
    const { email, password } = req.body

    // Look up the user entry in the database
    const { users } = db.data;
    const results = users.filter((user) => email === user.email);


    // If found, compare the hashed passwords and generate the JWT token for the user
    if (results.length === 1) {
        const user = results[0];
        bcrypt.compare(password, user.password, function (_err, result) {
            if (!result) {
                return res.status(401).json({ message: 'Invalid password' })
            } else {
                let loginData = {
                    email,
                    signInTime: Date.now(),
                }

                const options = {
                    expiresIn: '1h'
                };

                const token = jwt.sign(loginData, jwtSecretKey, options)
                res.status(200).json({ message: 'success', token })
            }
        })
        // If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
    }
    else if (results.length === 0) {
        bcrypt.hash(password, 10, function (_err, hash) {
            console.log({ email, password: hash })
            // db.get('users').push({ email, password: hash }).write()
            //
            // let loginData = {
            //     email,
            //     signInTime: Date.now(),
            // }
            //
            // const token = jwt.sign(loginData, jwtSecretKey)
            res.status(404).json({ status: 'not found', message: 'error' })
        })
    }
})

// The verify endpoint that checks if a given JWT token is valid
app.post('/verify', (req, res) => {
    const tokenHeaderKey = 'jwt-token'
    const authToken = req.headers[tokenHeaderKey]
    try {
        const verified = jwt.verify(authToken, jwtSecretKey)
        if (verified) {
            return res.status(200).json({ status: 'logged in', message: 'success' })
        } else {
            // Access Denied
            return res.status(401).json({ status: 'invalid auth', message: 'error' })
        }
    } catch (error) {
        // Access Denied
        return res.status(401).json({ status: 'invalid auth', message: 'error' })
    }
})

// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', (req, res) => {
    const { email } = req.body

    console.log(req.body);
    const { users } = db.data;
    const results = users.filter((user) => email === user.email);

    if (results.length === 1) {
        res.status(200).json({status: 'account verified', message:`User ${email} exists`, userExists: results.length === 1});
    } else {
        res.status(404).json({status: 'account does not exist', message:`User ${email} is not found`, userExists: results.length === 1});
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
