# 🏁 Sports Travel – Landing Page

A fully responsive landing page for a Sports Travel platform, built as part of the _Founding Engineer Assignment._

The project includes a **modern UI, component-based architecture, a working lead form with validation, and a simple Express backend API.**

This project closely follows the reference design provided in the assignment.

## 🧩 Features

### 🌄 Hero Section<hr/>

- Large background banner

- Primary + secondary CTAs

- Clean typography & gradient overlay

- Matches reference design layout

### 🎟️ Featured Event Card<hr/>

- Overlaps hero with negative margin

- Includes pricing, description, and CTA

### 🧳 Top Packages<hr/>

- Responsive card grid

- Shadowed cards with images

- Enquiry buttons

- Matches orange pill button design

### ⭐ Why Choose Us<hr/>

- Left: stats

- Right: 3-step vertical process

### 🔁 How It Works<hr/>

- Three-step horizontal cards

### 🖼️ Sample Itinerary<hr/>

- Horizontal scroll with mini-cards

### 💼 Add-ons & VIP Experiences<hr/>

- 6-tile grid

- “Add” button on each card

- Popular tags

### 📬 Contact Form<hr/>

- Right-side form with name/email/phone/message

- Fully styled

### ❓ FAQ Accordion<hr/>

- Smooth expand/collapse

- Simple and clean UX

### 📝 Lead Form Modal<hr/>

- Opens via “Plan My Trip” and “Enquire” buttons

#### **Validates:**

- Name

- Email (regex)

- Phone

- Sends POST request to backend

- Shows success/failure UI

## 📦 Project Structure

```
SRVIZ-fullstack/
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── FeaturedCard.jsx
│   │       ├── Packages.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── Itinerary.jsx
│   │       ├── AddOnsAndContact.jsx
│   │       ├── FAQ.jsx
│   │       ├── LeadFormModal.jsx
│   │       └── Footer.jsx
│   └── ...
│
└── backend/
    ├── server.js
    ├── package.json
    └── ...
```

## 🚀 Tech Stack

### Frontend

- React (Vite)

- JavaScript (no TypeScript as required)

- TailwindCSS

- Axios

- Fully modular component architecture

- Reusable buttons, cards, layouts, sections

### Backend

- Node.js

- Express.js

- CORS enabled

- Simple /leads endpoint for form submissions

## 🛠️ Installation & Setup
### 1️⃣ Clone the repository
```
git clone https://github.com/Mallikarjuna-dev/SRVIZ-fullstack.git

cd SRVIZ-fullstack
```

## FRONTEND SETUP
### 2️⃣ Install dependencies
```
cd frontend
npm install
```

### 3️⃣ Run the development server
```
npm run dev
```

### The app will start on:
```
http://localhost:5173/
```

## BACKEND SETUP
### 4️⃣ Install backend dependencies
```
cd backend
npm install
```
### 5️⃣ Run the Express server
```
npm run dev
```

### The API runs on:
```
http://localhost:4000/
```

## Available endpoints:

### ➤ POST /leads
**Submit lead form data:**
```
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "+919876543210",
  "message": "Looking for package details"
}
```

### ➤ GET /leads

**Returns all collected leads (in-memory).**

## 📱 Responsive Design

- Full mobile, tablet and desktop support

- Collapsible mobile navigation

- Smooth spacing, compact UI

## 🎨 UI/UX

- Closely matches the reference screenshot

- Orange accent color matches provided design

- **Used Tailwind utility classes for:**

    - spacing

    - shadows

    - gradient overlays

    - rounded pill buttons

- Hero typography + layout recreated faithfully

## 🚀 Deployment
### Frontend (Vercel)

From frontend/:

```
npm run build
```

### Backend (Render)

Set start command:
```
node server.js
```

## 🔗 Live links

-  **Frontend (Vercel):** https://srviz-fullstack.vercel.app/

-  **Backend (Render):** ```https://sportstravel-server.onrender.com```

## 👨‍💻 Author
*Mallikarjuna Annigeri*
