import { Stock } from "../../types/stock.td";
import { useNavigate } from "react-router-dom";

const WatchlistCard = ({ stockData }: { stockData: Stock }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-fit gap-2 items-center border rounded-lg py-3 px-4 border-white ">
      <div className="flex flex-row h-fit justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-ss-full">
            <img src={`https://assets.stockbit.com/logos/companies/${stockData.code}.png`} alt="logo" className="w-10 h-10" />
          </div>
          <div className="flex flex-col ">
            <div className="font-semibold text-md">{stockData.code}</div>
            <div className="text-xs text-primary-light">{stockData.name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs items-center">
          <div
            className={`border ${
              stockData.health > 7.0 ? "border-green-500 text-green-500" : stockData.health > 5.0 ? "border-yellow-500 text-yellow-500" : "border-red-500 text-red-500"
            } border-green-500 text-green-500 rounded-full p-1 h-fit w-fit`}
          >
            {stockData.health}
          </div>
          Health
        </div>
      </div>
      <div className="w-full flex cursor-pointer hover:bg-opacity-65 justify-center text-semibold bg-green-700 rounded-md" onClick={() => window.open("https://bibit.id/", "_blank")}>
        BUY
      </div>
      <div  className="w-full flex cursor-pointer hover:bg-opacity-65 justify-center border border-blue-600 bg-blue-600 bg-opacity-40 rounded-md" onClick={()=>navigate("/adro")}>
        View Analysis
      </div>
    </div>
  );
};

export default WatchlistCard;
