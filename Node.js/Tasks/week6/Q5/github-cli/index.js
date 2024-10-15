// I used axios to deal with http requests
const axios = require('axios');
const fs = require('fs');

const readline = require('readline');

// Create an interface to take input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getRepositories = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;

  try {

    const response = await axios.get(url);
    const repos = response.data.map(repo => repo.name);

    if (repos.length === 0) {
      console.log(`No repositories found for user: ${username}`);
      rl.close();
      return;
    }

    const fileName = `${username}.txt`;
    fs.writeFileSync(fileName, repos.join('\n'));

    console.log(`Repositories saved to ${fileName}`);

    const fileContent = fs.readFileSync(fileName , 'utf8');
    console.log("\nFile Content is\n",fileContent)
  } 
  catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`User "${username}" not found.`);
    } else {
      console.log('An error occurred:', error.message);
    }
  }
  finally {
    rl.close();
  }
};


rl.question('Enter a GitHub username: ', (username) => {
  getRepositories(username);
});

