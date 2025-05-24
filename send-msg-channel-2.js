// send-msg-channel-2.js

const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

// Channel URL from your previous output
const CHANNEL_URL = 'sendbird_group_channel_541310072_75d393b005d307183666a5b3eb323694972f10f9';

async function sendMessage() {
  try {
    const response = await axios.post(`${BASE_URL}/group_channels/${CHANNEL_URL}/messages`, {
      message_type: 'MESG',
      user_id: 'u2',
      message: 'Assessment1'
    }, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ Message sent to channel-u2-u3:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Failed to send message. Error response:');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('❌ Unknown error:', error.message);
    }
  }
}

sendMessage();

