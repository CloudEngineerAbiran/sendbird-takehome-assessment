// assignment1-users-channels-summary.js
const axios = require('axios');
const chalk = require('chalk');

const API_TOKEN = '4e784a20d600a45c26213c31ee01b0e5a0028d9f';
const APP_ID = '2C276FF1-DB28-4344-A670-2A68E89C42F2';
const BASE_URL = `https://api-${APP_ID}.sendbird.com/v3`;

const headers = {
  'Content-Type': 'application/json',
  'Api-Token': API_TOKEN,
};

const targetUsers = ['u1', 'u2', 'u3'];
const targetChannels = ['channel-u1-u2', 'channel-u2-u3'];

async function listUsers() {
  const { data } = await axios.get(`${BASE_URL}/users`, { headers });
  const filtered = data.users.filter(user => targetUsers.includes(user.user_id));

  console.log(chalk.yellow.bold('\n👥 Assignment 1 Users:'));
  filtered.forEach((user, index) => {
    console.log(chalk.green(`[${index + 1}] ${user.user_id} (${user.nickname})`));
  });
}

async function listChannels() {
  const { data } = await axios.get(`${BASE_URL}/group_channels?limit=20`, { headers });
  const filtered = data.channels.filter(ch => targetChannels.includes(ch.name));

  console.log(chalk.yellow.bold('\n💬 Assignment 1 Channels:'));
  filtered.forEach((ch, index) => {
    console.log(chalk.cyan(`\n[${index + 1}] ${ch.name}`));
    console.log(chalk.gray(`  Channel URL: ${ch.channel_url}`));

    const members = (ch.members || []).map(m => m.user_id).join(', ') || 'No members';
    console.log(chalk.gray(`  Members: ${members}`));

    if (ch.last_message?.message) {
      const sender = ch.last_message.user?.user_id || 'Unknown';
      console.log(chalk.magenta(`  Last Message: "${ch.last_message.message}" by ${sender}`));
    } else {
      console.log(chalk.red(`  Last Message: (No message)`));
    }
  });
}

async function run() {
  console.log(chalk.bold.blue('\n📊 Assignment 1 Summary — Users, Channels, Messages'));
  await listUsers();
  await listChannels();
}

run().catch(err => {
  console.error(chalk.red('❌ Error:'), err.response?.data || err.message);
});

