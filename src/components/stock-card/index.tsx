import { Stock } from "../../types/stock.td"


const StockCard = ({stockData}:{stockData:Stock}) => {
  return (
    <div className="flex flex-col border-2 border-white ">
      {stockData.name}

    </div>
  )
}

export default StockCard