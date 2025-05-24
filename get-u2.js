// get-u2.js

const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function getUser() {
  try {
    const response = await axios.get(`${BASE_URL}/users/u2`, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    console.log('✅ User u2 exists:', response.data);
  } catch (error) {
    console.error('❌ Could not fetch user u2:', error.message);
  }
}

getUser();

