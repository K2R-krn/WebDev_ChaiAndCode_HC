import { useEffect, useState } from "react";
// THis hook is also a function itself
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // Exios response to json connected
      .then((res) => setData(res[currency]))// here actulally getting data
    }, [currency])
    
    // whoever using this we need to return 
    console.log(data);
    return data
}
export default useCurrencyInfo