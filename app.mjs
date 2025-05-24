// app.mjs
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';

async function main() {
  const sb = await SendbirdChat.init({
    appId: '2C276FF1-DB28-4344-A670-2A68E89C42F2', // Your App ID
    modules: [new GroupChannelModule()],
  });

  console.log("✅ Sendbird initialized successfully!");

  // Connect as user "u1"
  try {
    const user = await sb.connect('u1');
    console.log(`✅ Connected as user: ${user.userId}`);
  } catch (error) {
    console.error("❌ Failed to connect:", error);
  }
}

main();


