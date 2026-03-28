#  PixelCraft — Image Editor App

A browser-based image editor built using **JavaScript and HTML5 Canvas API** that allows users to apply real-time filters, use presets, reset edits, and download the final image.

---

# 🌟 Features

* 🎚️ Real-time filter adjustments (brightness, contrast, blur, etc.)
* 🎨 Preset filters (one-click styling)
* 🔄 Reset functionality (restore original image)
* 📥 Download edited image
* 🖼️ Image upload support
* ⚡ Dynamic UI generation using JavaScript
* 🧠 State-driven architecture

---

# 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Canvas API

---

# ⚙️ How It Works

## 1. Image Upload

* User selects an image
* Image is loaded onto the canvas

## 2. Filter System

* Filters are stored in a central object
* Sliders update filter values in real time

## 3. Canvas Rendering

* Filters are applied using:

```js
canvasCtx.filter = "brightness(120%) contrast(110%)"
```

* Image is redrawn after every update

## 4. Presets

* Predefined filter combinations
* Applied dynamically using object mapping

## 5. Reset

* Restores default filter values
* Re-renders UI and canvas

## 6. Download

* Canvas is converted to image using:

```js
canvas.toDataURL()
```

* File is downloaded via anchor element

---

# 🧠 Key Concepts Used

* DOM Manipulation
* Event-driven programming
* Callback functions
* State management
* Dynamic UI rendering
* Canvas API
* File handling in browser

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/ayushisatpathy/PixelCraft---Image-Editor-app.git
```

## Open project

Simply open `index.html` in your browser.

---

# 📂 Project Structure

```text
PixelCraft/
│
├── index.html
├── style.css
├── script.js
├── assets/
└── README.md
```

---

# 🎯 Future Improvements

* 🎥 Add image cropping
* 🎛️ Advanced filters (shadows, highlights)
* 💾 Save custom presets
* 📱 Make fully responsive
* ⚡ Performance optimization

---

# 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and improve it.

---

# 📬 Contact

* GitHub: [https://github.com/ayushisatpathy](https://github.com/ayushisatpathy)

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!

---



