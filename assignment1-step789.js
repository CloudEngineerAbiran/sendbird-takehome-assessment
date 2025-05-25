// assignment1-step789.js
const axios = require('axios');
const chalk = require('chalk');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const APP_ID = '2C276FF1-DB28-4344-A670-2A68E89C42F2';
const BASE_URL = `https://api-${APP_ID}.sendbird.com/v3`;

const headers = {
  'Content-Type': 'application/json',
  'Api-Token': API_TOKEN,
};

async function listUsers() {
  const { data } = await axios.get(`${BASE_URL}/users`, { headers });
  console.log(chalk.yellow.bold('\n👥 Users:'));
  data.users.forEach((user, index) => {
    console.log(chalk.green(`[${index + 1}] ${user.user_id} (${user.nickname})`));
  });
}

async function listChannels() {
  const { data } = await axios.get(`${BASE_URL}/group_channels?limit=20`, { headers });
  console.log(chalk.yellow.bold('\n💬 Channels:'));

  data.channels.forEach((ch, index) => {
    console.log(chalk.cyan(`
[${index + 1}] ${ch.name} (customType: ${ch.custom_type || 'None'})`));
    console.log(chalk.gray(`  Channel URL: ${ch.channel_url}`));
    
    const memberList = (ch.members || []).map(m => m.user_id).join(', ') || 'No members';
    console.log(chalk.gray(`  Members: ${memberList}`));

    if (ch.last_message?.message) {
      const sender = ch.last_message.user?.user_id || 'Unknown';
      console.log(chalk.magenta(`  Last Message: "${ch.last_message.message}" by ${sender}`));
    } else {
      console.log(chalk.red(`  Last Message: (No message)`));
    }
  });
}

async function run() {
  console.log(chalk.bold.blue('📊 Listing Sendbird Users, Channels & Messages (Assignment 1 Summary)'));
  await listUsers();
  await listChannels();
}

run().catch(error => {
  console.error(chalk.red('❌ Error:'), error.response?.data || error.message);
});

