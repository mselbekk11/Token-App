import React from 'react';
import Logo from '../../assets/img/logo.png';


const Homepage = () => {
    return ( 
        <div className="section">
          <div className="logo">
            <img src={Logo} alt="Alkimi logo" className="logo"></img>
          </div>
          <div className="left">
          <coingecko-coin-price-chart-widget currency="usd" coin-id="alkimi" locale="en" className="chart one"></coingecko-coin-price-chart-widget>  
          </div>​
          <div className="right">
          <coingecko-coin-ticker-widget currency="usd" coin-id="alkimi" locale="en" className="chart two"></coingecko-coin-ticker-widget>
          </div>
        </div>
    )
}

export default Homepage