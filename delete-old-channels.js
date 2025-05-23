// delete-old-channels.js

const axios = require('axios');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const BASE_URL = 'https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3';
const CUSTOM_TYPE = 'Avi';

async function deleteOldChannels() {
  try {
    const listResp = await axios.get(`${BASE_URL}/group_channels`, {
      headers: {
        'Api-Token': API_TOKEN,
        'Content-Type': 'application/json',
      },
      params: {
        custom_type: CUSTOM_TYPE,
        limit: 20,
        show_empty: true,
      }
    });

    const channels = listResp.data.channels;
    if (channels.length === 0) {
      console.log('✅ No old channels to delete.');
      return;
    }

    for (const channel of channels) {
      console.log(`🗑 Deleting: ${channel.name} | ${channel.channel_url}`);
      await axios.delete(`${BASE_URL}/group_channels/${channel.channel_url}`, {
        headers: {
          'Api-Token': API_TOKEN,
          'Content-Type': 'application/json',
        },
      });
      console.log(`✅ Deleted: ${channel.channel_url}`);
    }

    console.log(`\n🎉 All '${CUSTOM_TYPE}' group channels deleted.`);
  } catch (error) {
    console.error('❌ Failed to delete channels:', error.response?.data || error.message);
  }
}

deleteOldChannels();

