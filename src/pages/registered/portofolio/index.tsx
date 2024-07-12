import { useEffect, useState } from "react";
import StockCard from "../../../components/stock-card";
import { Stock } from "../../../types/stock.td";
import { portoUser } from "../../../types/porto.td";

const PortofolioPage = () => {
  const [portos, setPortos] = useState<Stock[]>([]);

  useEffect(() => {
    setPortos(portoUser);
  }, []);

  return (
    <div className="flex flex-col w-full gap-12 p-12">
      <div className="text-3xl font-semibold">Portofolio</div>
      <div className="grid grid-cols-5 h-fit gap-x-2">
        {portos.map((porto: Stock) => (
          <StockCard stockData={porto} />
        ))}
      </div>
    </div>
  );
}

export default PortofolioPage