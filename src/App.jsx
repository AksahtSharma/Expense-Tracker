import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import ExpenseForm from './components/ExpenseForm';
import TransactionList from './components/TransactionList';
import ChartComponent from './components/ChartComponent';





// --- Main App Component ---
 function App() {
    // --- State Management ---
    // Main state for all transactions, loaded from localStorage
    const [transactions, setTransactions] = useState(() => {
        try {
            const savedTransactions = localStorage.getItem('transactions');
            return savedTransactions ? JSON.parse(savedTransactions) : [];
        } catch (error) {
            console.error("Error parsing transactions from localStorage", error);
            return [];
        }
    });

    // --- Effects ---
    // Persist transactions to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('transactions', JSON.stringify(transactions));
        } catch (error) {
            console.error("Error saving transactions to localStorage", error);
        }
    }, [transactions]);

    // --- Event Handlers ---
    // Add a new transaction to the list
    const handleAddTransaction = (transaction) => {
        setTransactions([...transactions, { ...transaction, id: crypto.randomUUID() }]);
    };

    // Delete a transaction by its ID
    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    // --- Memoized Calculations ---
    // Calculate summary data only when transactions change
    const summary = useMemo(() => {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + t.amount, 0);
        const expenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + t.amount, 0);
        const balance = income - expenses;
        return { income, expenses, balance };
    }, [transactions]);
    
    // Process data for the expense pie chart
    const expenseChartData = useMemo(() => {
        const expenseByCategory = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
                return acc;
            }, {});

        return Object.entries(expenseByCategory).map(([name, value]) => ({ name, value }));
    }, [transactions]);

    

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
            <div className="container mx-auto p-4 md:p-8">
                <Header />
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Left Column: Form and Summary */}
                    <div className="lg:col-span-1 space-y-8">
                        <SummaryCard {...summary} />
                        <ExpenseForm onAddTransaction={handleAddTransaction} />
                    </div>

                    {/* Right Column: Chart and Transaction List */}
                    <div className="lg:col-span-2 space-y-8">
                        <ChartComponent data={expenseChartData} />
                        <TransactionList 
                            transactions={transactions} 
                            onDeleteTransaction={handleDeleteTransaction}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;


