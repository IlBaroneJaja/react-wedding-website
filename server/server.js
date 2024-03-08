import 'dotenv/config';
import express from "express";
import enforceHttps from "./middlewares/forcehttps.js";
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import {config} from "dotenv";
import find, {updateGuest} from "./services/mongoService.js";

const env = config();

const app = express();

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = process.env.SECRET_JWT;

if (process.env.NODE_ENV === 'production') {
    app.use(enforceHttps());

}

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Handle requests for all routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.post('/auth', async (req, res) => {
    const {email, password} = req.body

    // Look up the user entry in the database
    const query = {email};
    const documents = await find('weddingDb', 'users', query);


    // If found, compare the hashed passwords and generate the JWT token for the user
    if (documents.length === 1) {
        const user = documents[0];
        bcrypt.compare(password, user.password, function (_err, result) {
            if (!result) {
                return res.status(401).json({message: 'Invalid password'})
            } else {
                let loginData = {
                    email,
                    signInTime: Date.now(),
                }

                const options = {
                    expiresIn: '1h'
                };

                const token = jwt.sign(loginData, jwtSecretKey, options)
                res.status(200).json({message: 'success', token})
            }
        })
        // If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
    } else if (documents.length === 0) {
        bcrypt.hash(password, 10, function (_err, hash) {
            console.log({email, password: hash})
            // db.get('users').push({ email, password: hash }).write()
            //
            // let loginData = {
            //     email,
            //     signInTime: Date.now(),
            // }
            //
            // const token = jwt.sign(loginData, jwtSecretKey)
            res.status(404).json({status: 'not found', message: 'error'})
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
            return res.status(200).json({status: 'logged in', message: 'success'})
        } else {
            // Access Denied
            return res.status(401).json({status: 'invalid auth', message: 'error'})
        }
    } catch (error) {
        // Access Denied
        console.error('Invalid authentication');
        return res.status(401).json({status: 'invalid auth', message: 'error'})
    }
})

// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', async (req, res) => {
    console.log(req.body);
    const {email} = req.body;

    const query = {email};
    try {
        const documents = await find('weddingDb', 'users', query);

        if (documents.length === 1) {
            res.status(200).json({
                status: 'account verified',
                message: `User ${email} exists`,
                userExists: documents.length === 1
            });
        } else {
            res.status(404).json({
                status: 'account does not exist',
                message: `User ${email} is not found`,
                userExists: documents.length === 1
            });
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/guest', async (req, res) => {
    try {
        console.log(req.body);
        const {email} = req.body;
        const query = {email};
        const documents = await find('weddingDb', 'users', query);

        if (documents.length === 1) {
            res.status(200).json({guest: documents[0], message: 'success'});
        } else {
            res.status(404).json({
                status: 'account does not exist',
                message: `User ${email} is not found`,
                userExists: documents.length === 1
            });
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.put('/guest', async (req, res) => {
    try {
        console.log(req.body);
        const {
            email,
            guestList,
            comments,
            allergyInfo,
            confirmationSiteDone,
            confirmationRoomBooking,
            roomBooking
        } = req.body;
        const query = {email};
        const documents = await updateGuest(
            'weddingDb',
            'users',
            query,
            guestList,
            comments,
            allergyInfo,
            confirmationSiteDone,
            confirmationRoomBooking,
            roomBooking
        );

        if (documents.matchedCount === 0) {
            res.status(404).json({
                status: 'could not update guest info',
                message: `User ${email} is not found or problem occurred while updating`
            });
        } else {
            res.status(200).json({message: 'updated successfully'});
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send('Internal Server Error');
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
