import bcrypt from "bcrypt";
import fs from "fs";
import generatePassword from "generate-password";

const saltRounds = 10; // You can adjust the salt rounds as needed
const numberOfPasswords = 55; // Specify the number of passwords to generate

// Function to generate a secure password of 12 characters
const generateSecurePassword = () => {
    return generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: false,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,
    });
};

// Generate random passwords
const generatedPasswords = Array.from({ length: numberOfPasswords }, generateSecurePassword);

console.log(`Generated ${numberOfPasswords} passwords`);

// Encrypt passwords using bcrypt
const encryptedPasswords = generatedPasswords.map(password => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return {
        password: password,
        hash: hash
    };
});

// Save the encrypted passwords (including the secure password) to a new file
const outputFile = 'encrypted_passwords.json'; // Update with your desired output file name
fs.writeFileSync(outputFile, JSON.stringify(encryptedPasswords));

console.log(`Passwords encrypted and saved to ${outputFile}`);
