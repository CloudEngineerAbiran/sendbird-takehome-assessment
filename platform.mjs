// platform.mjs

import SendbirdPlatformSdk from 'sendbird-platform-sdk';

const apiInstance = new SendbirdPlatformSdk.UsersApi();

// 🔐 Replace with your actual API token from the Sendbird Dashboard > Settings > Application > API Token
const apiToken = '6d5513ec85e764be827cf4a7cf8b1d579eeb45a3';  // 👈 update this
const appId = '2C276FF1-DB28-4344-A670-2A68E89C42F2';

// Try to get user 'u1'
apiInstance.getUserById(apiToken, appId, 'u1')
  .then((data) => {
    console.log("✅ Connected as u1:", data);
  })
  .catch((error) => {
    console.error("❌ Failed to connect:", error.body?.message || error.message);
  });
