export const getPrices = async (id, days, priceType, setError) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      // console.log("Prices>>>", data);
      if (priceType === "market_caps") {
        return data.market_caps;
      } else if (priceType === "total_volumes") {
        return data.total_volumes;
      } else {
        return data.prices;
     }
    } catch (error) {
      console.error(error.message);
      if (setError) {
        setError(true);
      }
      return null; // Return null in case of an error
    }
  };
  