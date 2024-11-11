import React from 'react';
import OrderStat from './OrderStat';

interface Stat {
  title: string;
  value: string;
  icon: string;
  percentage: string;
  color: string;
  bgColor: string;
}

interface WidgetOrderStatsProps {
  data: Stat[];
}

const WidgetOrderStats: React.FC<WidgetOrderStatsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-50 rounded-lg shadow-lg">
      {data.map((stat, index) => (
        <OrderStat key={index} {...stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
