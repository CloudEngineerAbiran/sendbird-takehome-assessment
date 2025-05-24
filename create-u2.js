// create-u2.js

const axios = require('axios');

// Your real credentials
const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function createUser() {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      user_id: 'u2',
      nickname: 'u2'
    }, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ User u2 created:', response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log('⚠️ User u2 already exists.');
    } else {
      console.error('❌ Error creating u2:', error.message);
    }
  }
}

createUser();
