// create-u3.js

const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function createUser() {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      user_id: 'u3',
      nickname: 'u3',
      profile_url: '',
      metadata: {},
      is_active: true
    }, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ User u3 created successfully:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Failed to create user u3. Error response:');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('❌ Unknown error:', error.message);
    }
  }
}

createUser();

