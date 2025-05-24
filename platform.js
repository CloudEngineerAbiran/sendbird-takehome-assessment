// platform.js

const axios = require('axios');

// Your real credentials
const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const APP_ID = '2C276FF1-DB28-4344-A670-2A68E89C42F2';
const USER_ID = 'u1';

// Sendbird API Base URL (based on your app ID)
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function getUser() {
  try {
    const response = await axios.get(`${BASE_URL}/users/${USER_ID}`, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    console.log('✅ User found:', response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('❌ User not found. Let’s create them next.');
    } else {
      console.error('❌ Error fetching user:', error.message);
    }
  }
}

getUser();

