// create-or-update-u2.js

const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function upsertUser() {
  try {
    const response = await axios.put(`${BASE_URL}/users/u2`, {
      user_id: 'u2',
      nickname: 'u2',
      profile_url: '',                // optional
      metadata: {},                   // optional
      is_active: true,                // makes sure user is marked as active
    }, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ User u2 created or updated:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Failed to create/update user u2. Error response:');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('❌ Unknown error:', error.message);
    }
  }
}

upsertUser();

