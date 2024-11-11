import React, { useEffect, useState } from 'react';
import WidgetOrderStats from './components/WidgetOrderStats';

interface Stat {
  title: string;
  value: string;
  icon: string;
  percentage: string;
  color: string;
  bgColor: string;
}

const App: React.FC = () => {
  const [statsData, setStatsData] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStatsData(data.stats);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <WidgetOrderStats data={statsData} />
      )}
    </div>
  );
};

export default App;
