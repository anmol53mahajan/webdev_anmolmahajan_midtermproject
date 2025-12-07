# ⏱️ Timer Web Application

A beautiful countdown timer web application with browser notifications and audio alerts, built using Web APIs.

## 📌 Project Overview

This project is a **Web API assignment** focusing on the **Notification API** and **Audio API**. The application allows users to set a countdown timer that displays live updates and triggers a notification with a beep sound when the timer reaches zero.

## 🎯 Features

- **⏰ Time Input**: Set custom time (minutes and seconds) using an editable display
- **▶️ Start Button**: Begin the countdown timer
- **🔄 Reset Button**: Reset the timer to its original value
- **🔧 Change Time Button**: Make the timer display editable to set custom time
- **📊 Live Countdown Display**: Real-time countdown shown on screen
- **🔔 Notification**: Browser notification when timer finishes ("Timer finished!")
- **🔊 Beep Sound**: Audio alert when countdown reaches zero
- **💅 Responsive Design**: Beautiful gradient background with smooth animations

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Core functionality and Web APIs
  - **Notification API**: Desktop notifications
  - **Web Audio API**: Generating beep sound
  - **setInterval**: Countdown timer logic
  - **DOM Manipulation**: Dynamic content updates

## 🧩 What This Project Demonstrates

### 1. **setInterval Basics**
- Creating periodic callbacks for countdown functionality
- Managing timer state with `clearInterval`
- Preventing multiple simultaneous timers

### 2. **Notification API**
- Requesting notification permissions
- Creating and displaying browser notifications
- Fallback handling when notifications aren't supported

### 3. **Audio Feedback**
- Using Web Audio API to generate sounds programmatically
- Creating oscillators for beep sound generation
- Error handling for audio playback

### 4. **DOM Manipulation**
- Dynamic content updates
- ContentEditable for inline editing
- Event handling (click events)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anmol53mahajan/webdev_anmolmahajan_midtermproject.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd webdev_anmolmahajan_midtermproject
   ```

3. **Run a local server** (recommended for full functionality)
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js (if you have `http-server` installed):
   ```bash
   npx http-server
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

   > **Note**: While you can open `index.html` directly, running through a local server ensures the Notification API works properly.

## 📖 How to Use

1. **Set Time**: Click the "change time" button to edit the minutes and seconds
2. **Start Timer**: Click the "start" button to begin the countdown
3. **Watch Countdown**: The display updates every second
4. **Reset**: Click "reset" to restore the timer to its original value
5. **Notification Permission**: Allow notifications when prompted by your browser
6. **Completion**: When the timer reaches zero, you'll receive a notification and hear a beep sound

## 🌐 Deployment on GitHub Pages

### Step 1: Push Your Code to GitHub

If you haven't already pushed your code:

```bash
# Add all files
git add .

# Commit changes
git commit -m "Complete timer application with README"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/anmol53mahajan/webdev_anmolmahajan_midtermproject`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment

### Step 3: Access Your Live Site

Your site will be available at:
```
https://anmol53mahajan.github.io/webdev_anmolmahajan_midtermproject/
```

> **Important**: Make sure to allow notifications when visiting the live site!

## 📁 Project Structure

```
webdev_anmolmahajan_midtermproject/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Timer logic and Web APIs
└── README.md           # Project documentation
```

## 🎨 Key Code Highlights

### Notification API Usage
```javascript
// Request permission
Notification.requestPermission().then(permission => {
    console.log('Notification permission:', permission);
});

// Show notification
if (Notification.permission === 'granted') {
    new Notification("Timer finished!");
}
```

### Web Audio API for Beep Sound
```javascript
function playBeep() {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Frequency in Hz
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}
```

### Timer Logic with setInterval
```javascript
timerId = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft < 0) {
        clearInterval(timerId);
        // Trigger notification and sound
    }
}, 1000);
```

## 🐛 Troubleshooting

### Notifications Not Working?
- Ensure you've granted notification permissions
- Use a local server instead of opening the HTML file directly
- Check browser console for errors

### No Sound Playing?
- The Web Audio API generates sound programmatically
- Check browser console for errors
- Ensure your browser supports the Web Audio API

## 📝 Assignment Requirements Met

✅ **Web APIs Used**: Notification API + Audio API  
✅ **Input Functionality**: Editable time input (minutes:seconds)  
✅ **Start Button**: Initiates countdown  
✅ **Live Countdown Display**: Real-time updates  
✅ **Notification**: Shows "Timer finished!" at zero  
✅ **Audio Feedback**: Beep sound on completion  
✅ **Learning Outcomes**: setInterval, Notification usage, Audio feedback  

## 👨‍💻 Author

**Anmol Mahajan**
- GitHub: [@anmol53mahajan](https://github.com/anmol53mahajan)
- Repository: [webdev_anmolmahajan_midtermproject](https://github.com/anmol53mahajan/webdev_anmolmahajan_midtermproject)

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for Web Development Assignment**
