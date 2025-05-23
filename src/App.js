import React, { useEffect, useState } from 'react';
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule, GroupChannelHandler } from '@sendbird/chat/groupChannel';

const APP_ID = '2C276FF1-DB28-4344-A670-2A68E89C42F2';
const USER_ID = 'u1';
const CUSTOM_TYPE = 'Avi';
const HEADING = 'Assessment 4';

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    let sb;

    const init = async () => {
      sb = await SendbirdChat.init({
        appId: APP_ID,
        modules: [new GroupChannelModule()],
      });

      await sb.connect(USER_ID);

      // Step 1: Check and create channels if needed
      const listQuery = sb.groupChannel.createMyGroupChannelListQuery();
      listQuery.includeEmpty = true;
      listQuery.customTypeFilter = CUSTOM_TYPE;
      const existingChannels = await listQuery.next();

      if (existingChannels.length < 2) {
        const invites = [['u2'], ['u3']];
        const names = ['Channel 1', 'Channel 2'];

        for (let i = 0; i < 2; i++) {
          const channel = await sb.groupChannel.createChannel({
            invitedUserIds: invites[i],
            name: names[i],
            isDistinct: false,
            customType: CUSTOM_TYPE,
          });
          await channel.sendUserMessage({ message: 'Assessment2' });
        }
      }

      // Step 2: Fetch channels with any customType
      const finalQuery = sb.groupChannel.createMyGroupChannelListQuery();
      finalQuery.includeEmpty = true;
      finalQuery.customTypeStartsWithFilter = '';
      const updatedChannels = await finalQuery.next();
      setChannels(updatedChannels);

      // Step 3: Request notification permission
      if (Notification.permission !== 'granted') {
        await Notification.requestPermission();
      }

      // Step 4: Setup channel handler
      const handler = new GroupChannelHandler();
      handler.onMessageReceived = (channel, message) => {
        console.log("🔔 Incoming message: ", message.message); // Confirm handler works

        if (Notification.permission === 'granted') {
          new Notification(`📩 New message in ${channel.name}`, {
            body: message.message,
          });
        }
      };

      sb.groupChannel.addGroupChannelHandler('notification-handler', handler);
    };

    init();

    return () => {
      if (sb) {
        sb.groupChannel.removeGroupChannelHandler('notification-handler');
      }
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>{HEADING} — Custom Type: {CUSTOM_TYPE}</h2>
      <ul>
        {
          [...new Map(
            channels
              .filter(channel => ['Channel 1', 'Channel 2'].includes(channel.name))
              .map(channel => [channel.name, channel])
          ).values()].map(channel => (
            <li key={channel.url}>
              {channel.name} ({CUSTOM_TYPE})
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;

