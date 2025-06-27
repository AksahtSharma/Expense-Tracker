import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import  formatCurrency  from '../utils/formatCurrency';

function ChartComponent({ data }) {
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1943', '#19B2FF'];
  
      return (
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 uppercase text-slate-700">IDhar Dekh Le</h2>
              <div style={{ width: '100%', height: 300 }}>
                  {data.length > 0 ? (
                      <ResponsiveContainer>
                          <PieChart>
                              <Pie
                                  data={data}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                  {data.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                              </Pie>
                              <Tooltip formatter={(value) => formatCurrency(value)} />
                              <Legend />
                          </PieChart>
                      </ResponsiveContainer>
                  ) : (
                      <div className="flex items-center justify-center h-full">
                          <p className="text-slate-500">No expense data to display.</p>
                      </div>
                  )}
              </div>
          </section>
            );
  }

export default ChartComponent;