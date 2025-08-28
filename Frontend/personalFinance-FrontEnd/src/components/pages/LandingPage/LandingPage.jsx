import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'; 
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie} from 'recharts'; 
import { BarChart, Bar, Rectangle, ResponsiveContainer } from 'recharts';
import { PieChart } from 'recharts';
import featureData from '../../../assets/feature-data.png';
import featureAlerts from '../../../assets/feature-alerts.png';
import featureReports from '../../../assets/feature-reports.png';

import './LandingPage.css'; 



// sample data for charts
const BudgetData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
  { month: 'Jul', income: 3490, expenses: 4300 },
];

const StockData = [
  { name: 'AAPL', price: 150, change: 1.2 },
  { name: 'GOOGL', price: 2800, change: -0.5 },
  { name: 'AMZN', price: 3400, change: 2.3 },
  { name: 'MSFT', price: 299, change: 0.8 },
];

const SavingsGoalsData = [
  { goal: 'emergency fund', saving:5000 },
  { goal: 'vacation', saving: 2000 },
  { goal: 'new car', saving: 15000 },
  { goal: 'home down payment', saving: 30000 },
  { goal: 'retirement', saving: 100000 },
  { goal: 'education', saving: 25000 },
];


const BudgetChart = () => (
   <ResponsiveContainer width="100%" height={300}>
    <BarChart data={BudgetData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" fill="#8884d8" />
      <Bar dataKey="expenses" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

const StockChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={StockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="change" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
);

const SavingsGoalsChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart data={SavingsGoalsData}>
      <Pie
        data={SavingsGoalsData}
        dataKey="saving"
        nameKey="goal"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  
  </ResponsiveContainer>
);


const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />
      {/* Hero Section */}
      <section className="landing-hero">
        <h1>Welcome to Your Personal Finance Tracker</h1>
        <p>Track your budgets, investments, and financial goals effortlessly.</p>
        <Link to="/login">Get Started</Link>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard">
        <div className="card">
          <h2>Budget Tracker</h2>
          <p>Manage your income and expenses efficiently.</p>
          <div className="charts"><BudgetChart /></div>
        </div>

        <div className="card">
          <h2>Stock Portfolio</h2>
          <p>Track live market data and your holdings.</p>
          <div className="charts"><StockChart /></div>
        </div>

        <div className="card">
          <h2>Savings Goals</h2>
          <p>Plan and monitor your savings targets.</p>
          <div className="charts"><SavingsGoalsChart /></div>
        </div>
      </section>
      {/* Feature Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Real-time Data</h3>
            <img src={featureData}  alt="Real-time Data" />
            <p>Get the latest financial data at your fingertips.</p>
          </div>
          <div className="feature-item">
            <h3>Custom Alerts</h3>
            <img src={featureAlerts} alt="Custom Alerts" />
            <p>Set up alerts for important financial events.</p>
          </div>
          <div className="feature-item">
            <h3>Comprehensive Reports</h3>
            <img src={featureReports} alt="Comprehensive Reports" />
            <p>Generate detailed reports on your financial health.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="landing-footer">
        <div className="footer-info">
        <p>&copy; 2023 Personal Finance Tracker. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/contact">Contact Us</Link>
        </div>  
        

        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: support@personalfinancetracker.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Finance St, Money City, FC 12345</p>
          
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
