import { useEffect, useState } from "react";
import StockCard from "../../../components/stock-card";
import { Stock, stockData } from "../../../types/stock.td";

const WatchlistPage = () => {
  const [watchlists, setWatchlists] = useState<Stock[]>([]);

  useEffect(() => {
    setWatchlists(stockData);
  }, []);

  return (
    <div className="flex flex-col w-full gap-12 p-12">
      <div className="flex flex-row">
        <div className="text-3xl font-semibold">Your Watchlist</div>
        
      </div>
      <div className="grid grid-cols-6 h-fit gap-x-4 gap-y-4">
        {watchlists.map((watchlist: Stock) => (
          <StockCard stockData={watchlist} />
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;
