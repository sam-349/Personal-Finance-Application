# 💰 Personal Finance Planner

A full-stack **Personal Finance Web Application** that helps users manage expenses, set budgets, track investments, and monitor financial goals in real time.  
Built with **React (Frontend)**, **Node.js/Express (Backend)**, and **MySQL (Database)**.  

---

## 🚀 Features

- 🔐 **User Authentication** – Secure login/register with JWT  
- 💸 **Expense Tracking** – Add, view, and categorize daily expenses  
- 📊 **Budget Management** – Set budgets and track progress  
- 📈 **Investment Tracking** – Monitor stocks, crypto, and currencies using Yahoo Finance API  
- 🎯 **Savings Goals** – Define and track personal savings targets  
- 📢 **Financial Alerts** – Notifications for budget overspending and market changes  
- 🖥 **Interactive Dashboard** – Real-time insights and visualizations  

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React (Vite)
- CSS / Bootstrap (styling)

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MySQL

### APIs / Integrations
- [Yahoo Finance API (`yfinance`)](https://pypi.org/project/yfinance/) for market data  

---

## 📂 Project Structure

```
PersonalFinance/
│── Backend/ # Node.js + Express backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
│
│── Frontend/ # React (Vite) frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
│ └── public/
│
│── .gitignore
│── README.md

```

```



### 1. Clone the repo

---

git clone https://github.com/<your-username>/PersonalFinance.git
cd PersonalFinance


```

### Backend Setup
```
cd Backend
npm install
cp .env.example .env   # configure DB and JWT secret
npm run dev

```

### Front End Setup 

```
cd ../Frontend
npm install
npm run dev

```

The app should now be running at:
```

Frontend → http://localhost:5173

Backend → http://localhost:3000

```