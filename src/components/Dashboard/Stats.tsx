import React from 'react';
import StatsCard from './StatsCard';

const statsData = [
  { label: 'Total Sales', value: '$1.2M' },
  { label: 'Available Cars', value: '124' },
  { label: 'Test Drives', value: '48' },
  { label: 'New Inquiries', value: '32' },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default Stats;