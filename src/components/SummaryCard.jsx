import React from 'react'
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import formatCurrency from '../utils/formatCurrency';


function SummaryCard({ income, expenses, balance }) {
  const balanceColor = balance >= 0 ? 'text-green-500' : 'text-red-500';

  return (
      <section className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Total Paisa</h2>
          <div className="space-y-4">
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                      <TrendingUp className="text-green-500" size={24} />
                      <span className="text-lg text-slate-600">Ane Wala Paisa</span>
                  </div>
                  <span className="text-lg font-semibold text-green-500">
                      {formatCurrency(income)}
                  </span>
              </div>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                      <TrendingDown className="text-red-500" size={24} />
                      <span className="text-lg text-slate-600">Jane Wala PAisa</span>
                  </div>
                  <span className="text-lg font-semibold text-red-500">
                      {formatCurrency(expenses)}
                  </span>
              </div>
              <div className="border-t border-slate-200 my-4"></div>
              <div className="flex justify-between items-center">
                   <div className="flex items-center space-x-3">
                      <DollarSign className={balanceColor} size={24} />
                      <span className="text-lg font-bold text-slate-800">Baki Ka Paisa</span>
                  </div>
                  <span className={`text-xl font-bold ${balanceColor}`}>
                      {formatCurrency(balance)}
                  </span>
              </div>
          </div>
      </section>
  );
}

export default SummaryCard