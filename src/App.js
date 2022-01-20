import React from "react";
import './App.css';
import useFetch from './useFetch';


function App() {

  const {data, loading, error} = useFetch("https://api.coingecko.com/api/v3/coins/alkimi");

  if (loading) return <h1>LOADING...</h1>

  if (error) console.log(error);


  return (
    <div className="App">
      <h1>$ADS Token Information</h1>
      <div className="section">
      <div className="block"><span>ID: </span><p>{data?.id}</p></div>
      <div className="block"><span>Name: </span><p>{data?.name}</p></div>
      <div className="block"><span>Asset platform ID: </span><p>{data?.asset_platform_id}</p></div>
      <div className="block"><span>Website </span><p>{data?.links.homepage}</p></div>
      <div className="block"><span>announcement URL </span><p>{data?.links.announcement_url}</p></div>
      <div className="block"><span>Twitter: </span><p>{data?.links.twitter_screen_name}</p></div>
      <div className="block"><span>Telegram: </span><p>{data?.links.telegram_channel_identifier}</p></div>
      <div className="block"><span>Contract Address: </span><p>{data?.contract_address}</p></div>
      <div className="block"><span>Current Price GBP: </span><p>{data?.market_data.current_price.gbp}</p></div>
      <div className="block"><span>Total Volume: </span><p>{data?.market_data.total_volume.gbp}</p></div>
      <div className="block"><span>Total Volume: </span><p>{data?.market_data.total_volume.gbp}</p></div>
      <div className="block"><span>High 24h: </span><p>{data?.market_data.high_24h.gbp}</p></div>
      <div className="block"><span>Low 24h: </span><p>{data?.market_data.low_24h.gbp}</p></div>
      <div className="block"><span>Price Change 24h: </span><p>{data?.market_data.price_change_24h}</p></div>
      <div className="block"><span>Total Supply: </span><p>{data?.market_data.total_supply}</p></div>
      </div>
    </div>

  );
}

export default App;
