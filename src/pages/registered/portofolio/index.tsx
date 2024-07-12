import { useEffect, useState } from "react";
import StockCard from "../../../components/stock-card";
import { Stock, stockData } from "../../../types/stock.td";

const PortofolioPage = () => {
  const [watchlists, setWatchlists] = useState<Stock[]>([]);

  useEffect(() => {
    setWatchlists(stockData);
  }, []);

  return (
    <div className="flex flex-col w-full gap-12 p-12">
      <div className="text-3xl font-semibold">Portofolio</div>
      <div className="grid grid-cols-6 h-fit gap-x-2">
        {watchlists.map((watchlist: Stock) => (
          <StockCard stockData={watchlist} />
        ))}
      </div>
    </div>
  );
}

export default PortofolioPage