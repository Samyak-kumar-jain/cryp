export const getCoinData = async (id, setError) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Return the fetched data
    } catch (error) {
      console.error(error.message);
      if (setError) {
        setError(true);
      }
      return null; // Return null in case of an error
    }
  };
  