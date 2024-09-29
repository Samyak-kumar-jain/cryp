import React from 'react'
import Header from '../components/Common/Header/Header'
import Tabs from '../components/Dashboard/Tabs'
import { useEffect,useState } from 'react'

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState('inr');
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=100&page=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCoins();
  }, []);
  return (
    <>
    <Header/>
    <Tabs coins={coins}
    error={error}
    currency={currency}/>
    
    </>
  )
}

export default Dashboard