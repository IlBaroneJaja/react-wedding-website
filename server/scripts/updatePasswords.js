import fs from "fs";
const inputDbPath = './inputdb.json';
const encryptedPasswordsPath = './encrypted_passwords.json';

const inputDb = JSON.parse(fs.readFileSync(inputDbPath, 'utf-8'));
const encryptedPasswords = JSON.parse(fs.readFileSync(encryptedPasswordsPath, 'utf-8'));

// Function to update the password property in each object
const updatePasswords = (db, passwords) => {
    return db.map((obj, index) => {
        // Assuming that encrypted_passwords.json has an array of hashes
        const newPasswordHash = passwords[index].hash;

        // Update the password property
        return { ...obj, password: newPasswordHash };
    });
};

// Update the passwords in the inputDb
const updatedDb = updatePasswords(inputDb, encryptedPasswords);

// Convert the updated data back to JSON
const updatedDbJson = JSON.stringify(updatedDb, null, 2);

// Write the updated JSON data back to the inputdb.json file
fs.writeFileSync(inputDbPath, updatedDbJson);

console.log(`Passwords updated and changes persisted to ${inputDbPath}`);
