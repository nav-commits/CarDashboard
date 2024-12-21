import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import Stats from './components/Dashboard/Stats';
import DashboardCharts from './components/Charts/DashboardCharts';
import CarGrid from './components/Cars/CarGrid';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen lg:pl-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-gray-600">
              Overview of your dealership's performance
            </p>
          </div>

          <Stats />

          <div className="mb-8">
            <DashboardCharts />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <CarGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;