const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';

async function listGroupChannels() {
  try {
    const response = await axios.get(`${BASE_URL}/group_channels`, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
      params: {
        custom_type: 'Avi',
        limit: 20,
        show_empty: true,
      }
    });

    console.log('✅ Group Channels with customType "Avi":');
    response.data.channels.forEach((channel, index) => {
      const memberList = channel.members?.map(m => m.user_id).join(', ') || 'No members';
      console.log(`\n[${index + 1}] ${channel.name}`);
      console.log(`URL: ${channel.channel_url}`);
      console.log(`Members: ${memberList}`);
    });

  } catch (error) {
    console.error('❌ Failed to fetch group channels:', error.message);
  }
}

listGroupChannels();

