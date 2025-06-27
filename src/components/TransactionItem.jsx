import React from 'react'
import { Trash2 } from 'lucide-react';
import  formatCurrency  from '../utils/formatCurrency';


function TransactionItem({ transaction, onDelete }) {
      const { id, title, amount, type, category, date } = transaction;
      const isExpense = type === 'expense';
      const amountColor = isExpense ? 'text-red-500' : 'text-green-500';
      const borderColor = isExpense ? 'border-r-red-500' : 'border-r-green-500';
  
      return (
          <div className={`flex items-center justify-between p-4 bg-slate-50 rounded-lg border-r-4 ${borderColor} transition-all hover:shadow-md hover:bg-slate-100`}>
              <div className="flex-1">
                  <p className="font-bold text-slate-800">{title}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                      <span>{category}</span>
                      <span>•</span>
                      <span>{new Date(date).toLocaleDateString()}</span>
                  </div>
              </div>
              <div className="flex items-center space-x-4">
                  <span className={`font-semibold ${amountColor}`}>
                      {isExpense ? '-' : '+'} {formatCurrency(amount)}
                  </span>
                  <button 
                      onClick={() => onDelete(id)} 
                      className="text-slate-400 hover:text-red-600 transition-colors"
                      aria-label={`Delete transaction ${title}`}
                  >
                      <Trash2 size={18} />
                  </button>
              </div>
          </div>
      );
  }
  

export default TransactionItem