import React from 'react';
import { FaArrowRight, FaShoppingCart, FaUtensils, FaGlassWhiskey } from 'react-icons/fa';

interface OrderStatProps {
  title: string;
  value: string;
  percentage: string;
  color: string;
  bgColor: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ title, value, percentage, color, bgColor }) => {
  let percentageColor = 'text-gray-500'; 

  const percentageValue = parseInt(percentage.replace('%', ''));

  if (percentageValue < 0) {
    percentageColor = 'text-red-500'; 
  } else if (percentageValue > 0) {
    percentageColor = 'text-green-500'; 
  }

  const getIcon = () => {
    switch (title) {
      case 'Take away':
        return <FaGlassWhiskey className="text-yellow-500" />;
      case 'Orders':
        return <FaShoppingCart className="text-green-500" />;
      case 'Dine in':
        return <FaUtensils className="text-red-500" />;
      case 'Revenue':
        return <FaArrowRight className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md w-64 h-32">
      <div className="flex flex-col justify-center items-start text-left space-y-0.5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bgColor}`}>
          {getIcon()}
        </div>
      </div>

      <div className="flex flex-col justify-center items-end space-y-0.5">
        <p className={`text-sm ${percentageColor} mb-0`}>{percentage}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default OrderStat;
