import { useEffect, useState } from "react";
import { Stock} from "../../../types/stock.td";
import WatchlistCard from "../../../components/watchlist-card";
import { watchlistUser } from "../../../types/watchlist.td";
import { FaPlusCircle } from "react-icons/fa";

const WatchlistPage = () => {
  const [watchlists, setWatchlists] = useState<Stock[]>([]);

  useEffect(() => {
    setWatchlists(watchlistUser);
  }, []);

  return (
    <div className="flex flex-col w-full gap-12 p-12">
      <div className="flex flex-row justify-between w-full">
        <div className="text-3xl font-semibold">Your Watchlist</div>
        <div className="flex flex-row gap-2 border rounded-md items-center p-2">
          <FaPlusCircle size={24} />
          Add Stock Wishlist
        </div>
      </div>
      <div className="grid grid-cols-5 h-fit gap-x-4 gap-y-4">
        {watchlists.map((watchlist: Stock) => (
          <WatchlistCard stockData={watchlist} />
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;
