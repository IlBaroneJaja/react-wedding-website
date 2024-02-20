import bcrypt from "bcrypt";
import fs from "fs";

const saltRounds = 10; // You can adjust the salt rounds as needed

// Read the file containing passwords (each line represents a password)
const passwordFile = 'passwords.txt'; // Update with your file name
const passwords = fs.readFileSync(passwordFile, 'utf-8').split('\n').map(line => line.trim());

// Encrypt passwords using bcrypt
const encryptedPasswords = passwords.map(password => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
});

// Save the encrypted passwords to a new file
const outputFile = 'encrypted_passwords.txt'; // Update with your desired output file name
fs.writeFileSync(outputFile, encryptedPasswords.join('\n'));

console.log(`Passwords encrypted and saved to ${outputFile}`);