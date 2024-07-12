import { Stock } from "../../types/stock.td";

const StockCard = ({ stockData }: { stockData: Stock }) => {
  return (
    <div className="flex flex-row h-fit gap-2 items-center border rounded-lg p-2 border-white ">
      <div className="rounded-ss-full">
        <img src={`https://assets.stockbit.com/logos/companies/${stockData.code}.png`} alt="logo" className="w-10 h-10" />
      </div>
      <div className="flex flex-col ">
        <div className="font-semibold text-md w-full flex items-center">
          {stockData.code}
          {/* <div className="flex rounded-full">
            stockData.health
          </div> */}
        </div>
        <div className="text-xs text-primary-light">{stockData.name}</div>
      </div>
    </div>
  );
};

export default StockCard;
