import { useNavigate } from "react-router-dom";
import { Stock } from "../../types/stock.td";

const StockCard = ({ stockData }: { stockData: Stock }) => {
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
            <div className="text-xs text-primary-light text-nowrap">{stockData.name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs items-center">
          <div className={`text-semibold text-green-500 text-lg rounded-full p-1 h-fit w-fit`}>+44.5%</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full mt-2">
        <div className="col-span-1 text-left font-semibold text-nowrap">Net profit</div>
        <div className="col-span-1 text-left text-primary-light">: IDR {stockData.fundamental.net_profit}</div>

        <div className="col-span-1 text-left font-semibold">EPS</div>
        <div className="col-span-1 text-left text-primary-light">: {stockData.fundamental.eps}</div>

        <div className="col-span-1 text-left font-semibold">Price to book</div>
        <div className="col-span-1 text-left text-primary-light">: {stockData.fundamental.pbv}%</div>

        <div className="col-span-1 text-left font-semibold">ROE</div>
        <div className="col-span-1 text-left text-primary-light">: IDR {stockData.fundamental.roe}</div>

        <div className="col-span-1 text-left font-semibold text-blue-500">Suggestion</div>
        <div className="col-span-1 text-left text-blue-500">: HOLD</div>
      </div>

      <div onClick={()=>navigate("/adro")} className="w-full flex cursor-pointer hover:bg-opacity-65 justify-center border border-blue-600 bg-blue-600 bg-opacity-40 rounded-md">View Analysis</div>
    </div>
  );
};

export default StockCard;
