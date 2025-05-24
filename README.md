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

* `create-u2.js`, `create-u3.js`, `create-or-update-u2.js`
* `create-channel-1.js`, `create-channel-2.js`
* `send-msg-channel-1.js`, `send-msg-channel-2.js`

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

