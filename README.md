# Sendbird Take-Home Assignment

## 👤 Candidate: Abiran

## 📅 Submitted: May 2025

This repository contains all work completed for the Sendbird Take-Home Assignment using the JavaScript SDK and React. The assessment consists of 4 parts.

---

## ✅ Assessment 1: User Creation & Messaging via Platform API

### Tasks Completed:

* Created three users: `u1`, `u2`, and `u3` using Platform API.
* Created two group channels:

  * `channel-u1-u2` (between u1 and u2)
  * `channel-u2-u3` (between u2 and u3)
* Sent message "Assessment1" through each channel.

### Scripts Used:
- `create-u2.js`, `create-u3.js`, `create-or-update-u2.js`
- `create-channel-1.js`, `create-channel-2.js`
- `send-msg-channel-1.js`, `send-msg-channel-2.js`
- `assignment1-users-channels-summary.js` → Lists u1, u2, u3 and the specific channels/messages for validation.


### Screenshot Evidence:

* `assessment1-user-u1.png`
* `assessment1-user-u2.png`
* `assessment1-user-u3.png`

---

## ✅ Assessment 2: Custom Type Channels & Message Sending

### Tasks Completed:

* Used React app to create two new group channels with `customType = Avi`
* Channels:

  * `Channel 1 (Avi)` with user `u2`
  * `Channel 2 (Avi)` with user `u3`
* Sent message "Assessment2" in each channel
* Displayed format in UI: `Channel Name (Avi)`

### Screenshot:

* `assessment2-screenshot.png`

---

## ✅ Assessment 3: Filter Channels by customType

### Tasks Completed:

* Modified `App.js` to filter and display only group channels that have `customType` defined
* Used `customTypeStartsWithFilter` to restrict display

### Screenshot:

* `assessment3-screenshot.png`

---

## ✅ Assessment 4: Browser Notification on New Message

### Tasks Completed:

* Implemented `GroupChannelHandler` to listen for new messages
* Used Web Notification API to show popup while on channel list
* Sent trigger message from `u2` to test it

### Screenshot:

* `assessment4-screenshot.png`

---

## 🌟 Bonus Section

### 1. Why do channels not display unless a message is sent?

Sendbird does not show empty channels by default unless you explicitly include them. By default, the SDK filters out channels without activity to optimize UI and performance.

### 2. How can we list channels even without messages?

We can include empty channels in the list by setting:


const listQuery = sb.groupChannel.createMyGroupChannelListQuery();
listQuery.includeEmpty = true;


### 3. Why be careful with push notifications in conversation view?

Triggering push/browser notifications while a user is already viewing a conversation can be annoying and redundant. It may result in:

* Duplicate alerts
* Unnecessary distractions
* Privacy issues
* Poor user experience

It’s better to suppress notifications when the user is in the relevant conversation.

### 4. Use of Platform API via cURL

#### i. Create a new user `u4`

**Command:**


curl -X POST \
  https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3/users \
  -H "Content-Type: application/json" \
  -H "Api-Token: 4e784a20d600a45c26213c31ee01b0e5a0028d9f" \
  -d '{
        "user_id": "u4",
        "nickname": "u4",
        "profile_url": ""
      }'


**Response:**

```
{
  "user_id": "u4",
  "nickname": "u4",
  "profile_url": "",
  ...
  "is_active": true,
  "is_created": true
}
```

#### ii. Create group channel with users `u1` and `u4`, customType = "b4"

**Command:**

```
curl -X POST \
  https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3/group_channels \
  -H "Content-Type: application/json" \
  -H "Api-Token: 4e784a20d600a45c26213c31ee01b0e5a0028d9f" \
  -d '{
        "user_ids": ["u1", "u4"],
        "name": "bonus-channel-u1-u4",
        "is_distinct": false,
        "custom_type": "b4"
      }'


**Response:**

```
{
  "channel_url": "sendbird_group_channel_541306613_261a0c698f9f48da065b74fbfb9b628e8b4f76a6",
  "name": "bonus-channel-u1-u4",
  "custom_type": "b4",
  "member_count": 2,
  ...
}
```

#### iii. Send message "Bonus4" to the channel

**Command:**

curl -X POST \
  https://api-2C276FF1-DB28-4344-A670-2A68E89C42F2.sendbird.com/v3/group_channels/sendbird_group_channel_541306613_261a0c698f9f48da065b74fbfb9b628e8b4f76a6/messages \
  -H "Content-Type: application/json" \
  -H "Api-Token: 4e784a20d600a45c26213c31ee01b0e5a0028d9f" \
  -d '{
        "message_type": "MESG",
        "user_id": "u1",
        "message": "Bonus4"
      }'


**Response:**

```
{
  "message_id": 5829301720,
  "message": "Bonus4",
  "user": { "user_id": "u1" },
  "channel_url": "sendbird_group_channel_541306613_261a0c698f9f48da065b74fbfb9b628e8b4f76a6"
}
```

### Bonus Screenshots:

* `bonus4-create-user-u4.png`
* `bonus4-create-channel-u1-u4.png`
* `bonus4-send-msg-bonus4.png`

---

## 📁 Folder Structure

```
sendbird-assessment-app/
├── public/
├── src/
├── screenshots/
│   ├── assessment1-user-u1.png
│   ├── assessment1-user-u2.png
│   ├── assessment1-user-u3.png
│   ├── assessment2-screenshot.png
│   ├── assessment3-screenshot.png
│   ├── assessment4-screenshot.png
│   ├── bonus4-create-user-u4.png
│   ├── bonus4-create-channel-u1-u4.png
│   ├── bonus4-send-msg-bonus4.png
├── *.js / *.mjs platform API scripts
├── README.md
```

---

## 🛠 Tech Stack

* React
* Sendbird JavaScript Chat SDK v4
* Node.js for scripting Platform API

---

## 🔗 Submission Link

* GitHub: [https://github.com/CloudEngineerAbiran/sendbird-takehome-assessment](https://github.com/CloudEngineerAbiran/sendbird-takehome-assessment)

All assessments verified with screenshots and working code.

---

✅ End of Submission

