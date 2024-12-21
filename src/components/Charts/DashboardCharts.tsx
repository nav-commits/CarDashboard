import React from 'react';
import SalesChart from './SalesChart';
import InventoryChart from './InventoryChart';

const DashboardCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SalesChart />
      <InventoryChart />
    </div>
  );
};

export default DashboardCharts;