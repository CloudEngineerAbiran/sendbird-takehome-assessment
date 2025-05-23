const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

const CHANNEL_URL = 'sendbird_group_channel_541309900_b5b38953a90b6c2f3ae70a9dd1b61c229a86542e';

async function sendTestMessage() {
  try {
    const response = await axios.post(
      `${BASE_URL}/group_channels/${CHANNEL_URL}/messages`,
      {
        message_type: 'MESG',
        user_id: 'u2',
        message: '🔔 Hello from u2 to trigger Assessment 4 notification!',
      },
      {
        headers: {
          'Api-Token': API_TOKEN,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ Message sent successfully:', response.data);
  } catch (error) {
    console.error('❌ Failed to send message:', error.response?.data || error.message);
  }
}

sendTestMessage();

