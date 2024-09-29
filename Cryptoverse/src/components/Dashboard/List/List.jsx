import React from 'react'
import "./List.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { convertNumber } from '../../../functions/convert';
import { Link } from 'react-router-dom';
const List = ({coin}) => {
  return (
    <>
    <Link to ={`/coin/${coin.id}`}>
    <tr className='list-row'>
    <td className='td-image'>
                <img src={coin.image} className='coin-logo'></img>
                </td>
                <td>
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
                
            </td>
            {coin.price_change_percentage_24h >0?(
            <td className='chip'>
                    <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip td-icon'>
                    <TrendingUpIcon/>
                    </div>


                </td>):(
                     <td className='chip'>
                     <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                     <div className='icon-chip chip-red td-icon'>
                     <TrendingDownIcon/>
                     </div>
 
 
                 </td>

                )
            }
           <td>
           <h3 className='coin-price  td-center-align '
            style={{
                color:coin.price_change_percentage_24h<0 ?"var(--red)":"var(--green)"
            }}>$ {coin.current_price.toLocaleString()}</h3>
           </td>
           
           
                <td>
            <p className='total-v td-right-align td-total-volume '>Total Volume: {coin.total_volume.toLocaleString()}</p>
            </td>
            <td >
            <p className='total-v td-right-align desktop-td-mkt'>Market Cap: $ {coin.market_cap.toLocaleString()}</p>
            </td>
            <td>
            <p className='total-v td-right-align mobile-td-mkt'>Market Cap: $ {convertNumber(coin.market_cap)}</p>
        </td> 
    </tr>
    </Link>
    </>
  )
}

export default List