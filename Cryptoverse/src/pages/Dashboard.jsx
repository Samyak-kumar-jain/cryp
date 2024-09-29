import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import Searchbar from '../components/Dashboard/SearchBar/Searchbar';
import PaginationControlled from '../components/Dashboard/Pagination/Pagination';
import CircularIndeterminate from '../components/Common/Loader/Loader';
import Back2Top from '../components/Common/Back2Top/Back2Top';

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const[paginatedCoins, setPaginatedCoins] = useState([])
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState('inr');
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const[isLoading,setIsLoading] = useState("true")


  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoin = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const hasNoResults = filterCoin.length === 0 && search !== "";

  const handlePageChange = (event,value) =>{
    setPage(value);
    var previousIndex = (value-1)*10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10));
    


  }


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=100&page=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoins(data);
        setPaginatedCoins(data.slice(0,10));
        setIsLoading(false);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchCoins();

   
  }, []);

  return (
    <>
      <Header />
      <Back2Top/>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <Searchbar search={search} onSearchChange={onSearchChange} />
          <TabsComponent
            coins={search ? filterCoin : paginatedCoins}
            error={error}
            currency={currency}
            hasNoResults={hasNoResults}
          />
          {!search && (
            <PaginationControlled
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
}
  


export default Dashboard
