const readline = require('readline');
const fs = require('fs');


let phonebook = [];


// Read the phonebook.json file
fs.readFile('phonebook.json', 'utf8', (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exit(1);
  }


  phonebook = JSON.parse(data);


  // Initialize readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  // Prompt user for the name
  rl.question('Please enter the name of the person you want to lookup: ', (name) => {
    // Find the person in the phonebook
    const person = phonebook.find(p => p.name === name);


    // Check if the person was found and print the result
    if (person) {
      console.log(`${person.name}'s phone number is: ${person.phoneNumber}`);
    } else {
      console.log(`No phone number found for ${name}.`);
    }


    // Close the readline interface
    rl.close();
  });
});
