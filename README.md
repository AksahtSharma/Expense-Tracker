 Kya Kharcha? - Expense Tracker

Kya Kharcha is a modern, responsive personal expense tracker built with React. It helps you manage your finances by tracking income, expenses, and visualizing spending patterns through a dynamic pie chart.

Live Demo: 🔗 View App on Vercel

🚀 Features

✅ Add Income and Expenses

✅ View Real-time Balance Summary

✅ Pie Chart Visualization by Category

✅ Transaction History with Delete Functionality

✅ Responsive Design using Tailwind CSS

✅ Data Persistence with localStorage

🛠️ Tech Stack

React.js (with Hooks: useState, useEffect, useMemo)

Tailwind CSS (Utility-first styling)

Lucide React (Beautiful icons)

Recharts (Interactive charting)

localStorage (Data persistence)

📸 Screenshots

(Add your own screenshots below)





📂 Folder Structure

/src
├── components
│   ├── Header.js
│   ├── SummaryCard.js
│   ├── ExpenseForm.js
│   ├── TransactionList.js
│   ├── TransactionItem.js
│   └── ChartComponent.js
├── utils
│   └── formatCurrency.js
└── App.js

🧠 How It Works

Data is stored in local state using useState

Saved and loaded from localStorage using useEffect

Balance and chart data are memoized for performance using useMemo

📦 Deployment

Step 1: GitHub

git init
git remote add origin https://github.com/AksahtSharma/Expense-Tracker.git
git add .
git commit -m "Initial commit"
git push -u origin main

Step 2: Vercel

Login at https://vercel.com

Import GitHub repo

Select React framework

Click Deploy 🚀

🙌 Future Improvements



🧑‍💻 Author

Akshat Sharma
