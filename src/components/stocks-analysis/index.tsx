import { stocksAnalysis, StocksAnalysis } from "../../types/stocks.td";
import { useEffect, useState } from "react";
import ActionChip from "../action-chips";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import StocksChart from "../chart";

const StocksAnalysisSection = () => {
  const [analysis, setAnalysis] = useState<StocksAnalysis>(stocksAnalysis);

  useEffect(() => {
    setAnalysis(stocksAnalysis);
  }, []);

  return (
    <div className="flex flex-row h-full gap-4">
      <div className="flex flex-col w-[70%] gap-4 ">
        <div className="flex flex-row rounded-md justify-between bg-primary-dark px-12 py-4 h-fit">
          <div className="flex gap-3 font-semibold text-2xl items-center ">
            <img src={analysis.logo} alt="logo" className="w-6 h-6" />
            {analysis.name}
          </div>
          <ActionChip action={analysis.action} />
        </div>
        <div className="flex flex-row rounded-md justify-between bg-primary-dark h-[90%]">
          <pre className="text-wrap overflow-y-auto px-10 py-6">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <div className="text-4xl">{children}</div>,
                h2: ({ children }) => <div className="text-3xl">{children}</div>,
                h3: ({ children }) => <div className="text-2xl">{children}</div>,
                h4: ({ children }) => <div className="text-xl">{children}</div>,
                h5: ({ children }) => <div className="text-lg">{children}</div>,
                h6: ({ children }) => <div className="text-md">{children}</div>,
                p: ({ children }) => <div className="text-lg">{children}</div>,
              }}
              children={analysis.content}
              remarkPlugins={[remarkGfm]}
              className="font-sans my-0"
            />
          </pre>
        </div>
      </div>
      <div className="flex flex-col w-[30%]">
        <div className="flex flex-row rounded-md justify-between bg-primary-dark px-12 py-4 h-fit">
          {/* <StocksChart/> */}
        </div>
      </div>
    </div>
  );
};

export default StocksAnalysisSection;
