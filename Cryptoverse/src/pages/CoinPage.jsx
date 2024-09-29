import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header';
import { useParams } from 'react-router-dom';
import CircularIndeterminate from '../components/Common/Loader/Loader';
import { settingCoinObject } from '../functions/covertObject';
import List from '../components/Dashboard/List/List';
import CoinInfo from '../components/Coin/Coininfo/CoinInfo';
import { getCoinData } from '../functions/getcoindata';
import { getPrices } from '../functions/getPrices';
import LineChart from '../components/Coin/Coininfo/Chart/Chart';
import Selectd from '../components/Coin/Coininfo/Select/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/Coin/PriceType/Pricetype';
import "./coinpage.css"

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState();
  const [priceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]); 

  const getData = async () => {
    try {
      const data = await getCoinData(id);
      if (data) {
        settingCoinObject(data, setCoinData);
        const prices = await getPrices(id, days,priceType);
        if (prices) {
          settingChartData(setChartData, prices);
        }
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    const newDays = event.target.value;
    setDays(newDays);
    setIsLoading(true);
    try {
      const prices = await getPrices(id, newDays,priceType);
      if (prices) {
        settingChartData(setChartData, prices);
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };
  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    try {
      const prices = await getPrices(id, days,newType);
      if (prices) {
        settingChartData(setChartData, prices);
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <CircularIndeterminate />
       
        
      ) : error ? (
        <div>Error: {error}</div> // Display error if exists
      ) : (
        <>
          <div className='main-list-coin'>
            <div className='list-coin'>
              <List coin={coinData} />
            </div>
          </div>
          <div className='main-line'>
            <div className='slct-days'>
            <Selectd days={days} handleDaysChange={handleDaysChange} />
            <PriceType PriceType={priceType} handlePriceTypeChange={handlePriceTypeChange}></PriceType>
            
           
            </div>
            <div className='sm-line'>
              
              <LineChart chartData={chartData} />
            </div>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
};

export default CoinPage;
