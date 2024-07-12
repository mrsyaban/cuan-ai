import { useEffect, useState } from "react"
import StockCard from "../../../components/stock-card"
import { Stock, stockBca } from "../../../types/stock.td"


const WatchlistPage = () => {
  const [watchlists, setWatchlists] = useState<Stock[]>([]);

  useEffect(() => {
    setWatchlists(stockBca)
  }, []);
  
  return (
    <div>
      {
        watchlists.map((watchlist:Stock) => (
          <StockCard stockData={watchlist}/>
        ))
      }
    </div>
  )
}

export default WatchlistPage