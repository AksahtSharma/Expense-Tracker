import React from 'react'
import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onDeleteTransaction }) {
      // Sort transactions by date, newest first
      const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  
      return (
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-700">History</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {sortedTransactions.length > 0 ? (
                      sortedTransactions.map(t => 
                          <TransactionItem 
                              key={t.id} 
                              transaction={t} 
                              onDelete={onDeleteTransaction} 
                          />)
                  ) : (
                      <p className="text-slate-500 text-center py-8">No transactions yet.</p>
                  )}
              </div>
          </section>
      );
  }

export default TransactionList