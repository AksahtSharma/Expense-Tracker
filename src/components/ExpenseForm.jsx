import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

function ExpenseForm({ onAddTransaction }) {
      const [title, setTitle] = useState('');
      const [amount, setAmount] = useState('');
      const [type, setType] = useState('expense');
      const [category, setCategory] = useState('Food');
      const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
      const [error, setError] = useState('');
      
      const expenseCategories = ['Food', 'College Fee' , 'Travle', 'Bills', 'DTH/CableTV', 'Health', 'Shopping', 'Other'];
      const incomeCategories = ['Salary', 'Part Time Work', 'Investment', 'Family Gifts', 'Other'];
  
      const handleSubmit = (e) => {
          e.preventDefault();
          if (!title || !amount || !category || !date) {
              setError('All fields are required.');
              return;
          }
          if (parseFloat(amount) <= 0) {
              setError('Amount must be greater than zero.');
              return;
          }
          
          onAddTransaction({
              title,
              amount: parseFloat(amount),
              type,
              category,
              date,
          });
  
          // Reset form
          setTitle('');
          setAmount('');
          setError('');
      };
  
      return (
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-700">Transaction Panal</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}
                  
                  {/* Type Selector */}
                  <div className="grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
                      <button type="button" onClick={() => setType('expense')} className={`p-2 rounded-md text-sm font-semibold transition-colors ${type === 'expense' ? 'bg-red-600 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}>
                          Expenses
                      </button>
                      <button type="button" onClick={() => setType('income')} className={`p-2 rounded-md text-sm font-semibold transition-colors ${type === 'income' ? 'bg-green-600 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}>
                          Income
                      </button>
                  </div>
  
                  {/* Form Inputs */}
                  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
                  <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                      {(type === 'expense' ? expenseCategories : incomeCategories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
  
                  <button type="submit" className="w-full flex items-center justify-center p-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 active:bg-blue-800 transition-all transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <PlusCircle className="mr-2" size={20} /> Add New Transaction
                  </button>
              </form>
          </section>
      );
  }

export default ExpenseForm