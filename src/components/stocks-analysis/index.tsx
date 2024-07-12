import { stocksAnalysis, StocksAnalysis } from "../../types/stocks.td";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import StocksChart from "../chart";
import { BarChart, Card, DonutChart, LineChart } from "@tremor/react";
import { HiOutlineBookmark, HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";

const StocksAnalysisSection = () => {
  const [analysis, setAnalysis] = useState<StocksAnalysis>(stocksAnalysis);
  const [analysisNews, setAnalysisNews] = useState<string>("");
  const [analysisNewsScore, setAnalysisNewsScore] = useState<string>("");
  const [analysisNewsInput, setAnalysisNewsInput] = useState<string>("");

  const handleAnalysisNews = async () => {
    if (!analysisNewsInput) return;
    if (analysisNewsInput.includes("https://")) {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || ""}/analyze/sentiment`,
        {
          code: "BBCA",
          url: analysisNewsInput,
        }
      );
      setAnalysisNews(res.data.realtime_analysis.reasoning);
      setAnalysisNewsScore(res.data.realtime_analysis.sentiment);
    } else {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || ""}/analyze/sentiment`,
        {
          code: "BBCA",
          news: analysisNewsInput,
        }
      );
      setAnalysisNews(res.data.realtime_analysis.reasoning);
      setAnalysisNewsScore(res.data.realtime_analysis.sentiment);
    }
  };

  useEffect(() => {
    setAnalysis(stocksAnalysis);
  }, []);

  const data = [
    {
      date: "2018",
      "This Year": 68560,
    },
    {
      date: "2019",
      "This Year": 70320,
    },
    {
      date: "2020",
      "This Year": 80233,
    },
    {
      date: "2021",
      "This Year": 55123,
    },
    {
      date: "2022",
      "This Year": 56000,
    },
    {
      date: "2023",
      "This Year": 100000,
    },
  ];

  const dataDonut = [
    {
      name: "Debt",
      amount: 60,
      share: "60%",
      color: "bg-red-500",
    },
    {
      name: "Equity",
      amount: 40,
      share: "40%",
      color: "bg-blue-500",
    },
  ];

  function valueFormatter(number: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
      notation: "compact",
      compactDisplay: "short",
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(number);
  }

  const dataLine = [
    {
      date: "Jan 23",
      Organic: 232,
    },
    {
      date: "Feb 23",
      Organic: 241,
    },
    {
      date: "Mar 23",
      Organic: 291,
    },
    {
      date: "Apr 23",
      Organic: 101,
    },
    {
      date: "May 23",
      Organic: 318,
    },
    {
      date: "Jun 23",
      Organic: 205,
    },
    {
      date: "Jul 23",
      Organic: 372,
    },
  ];

  return (
    <div className="flex flex-row h-full gap-4">
      <div className="flex flex-col w-[65%] gap-4 ">
        <div className="flex flex-row rounded-md justify-between bg-primary-dark px-12 py-4 h-fit">
          <div className="flex gap-3 font-semibold text-2xl items-center ">
            <img src={analysis.logo} alt="logo" className="w-6 h-6" />
            {analysis.name}
          </div>
          <div className="flex items-center">
            <span className="text-lime-500 font-bold">RECOMMENDED</span>
            <span className="block w-3"></span>
            <button>
              <HiOutlineBookmark />
            </button>
            <span className="block w-3"></span>
            <button>
              <HiOutlineShoppingBag />
            </button>
          </div>
          {/* <ActionChip action={analysis.action} /> */}
        </div>
        <div className="flex flex-row rounded-md justify-between bg-primary-dark h-[90%]">
          <pre className="text-wrap overflow-y-auto px-10 py-6">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <div className="text-4xl">{children}</div>
                ),
                h2: ({ children }) => (
                  <div className="text-3xl">{children}</div>
                ),
                h3: ({ children }) => (
                  <div className="text-2xl">{children}</div>
                ),
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
        <div className="bg-[#333] w-full p-5">
          <p className="text-[25px] font-semibold">Analyze News</p>
        </div>
        <div className="bg-[#333] w-full p-5 h-fit gap-5 flex flex-col">
          <p className="text-[18px] ">
            Put related news or webpage link, and get deep analyze 📈
          </p>
          <textarea
            className="text-black h-10 w-full min-h-[100px]"
            value={analysisNewsInput}
            onChange={(e) => {
              setAnalysisNewsInput(e.target.value);
            }}
          />
          <div
            className="w-[200px] h-[50px] bg-slate-500 flex justify-center items-center cursor-pointer rounded-md"
            onClick={handleAnalysisNews}
          >
            <p className="text-[20px] font-semibold">Analyze!</p>
          </div>
          <div className="w-full h-fit bg-slate-800 flex flex-col justify-center items-center p-8">
            <p className="text-[18px] font-semibold">Recommended Sentiment Rating : {analysisNewsScore}</p>
            <p className="text-[18px]">{analysisNews}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[30%]">
        <div className="flex flex-col rounded-md justify-between bg-primary-dark px-1 py-4 h-fit mx-auto">
          <Card className="w-[460px] mb-4">
            <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Revenue (IDR Mil)
            </h3>
            <BarChart
              data={data}
              index="date"
              categories={["This Year"]}
              showLegend={false}
              colors={["blue"]}
              valueFormatter={valueFormatter}
              yAxisWidth={50}
              showAnimation={true}
              className="mt-6 h-60 block"
            />
          </Card>
          <Card className="w-[460px] h-[300px] mb-4">
            <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Debt Equity Ratio
            </h3>
            <DonutChart
              className="mt-8"
              data={dataDonut}
              category="amount"
              index="name"
              showTooltip={true}
              showLabel={true}
              showAnimation={true}
              colors={["red", "blue"]}
            />
          </Card>
          <Card className="w-[460px] h-[300px]">
            <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Inflation Raycast
            </h3>
            <LineChart
              data={dataLine}
              index="date"
              categories={["Organic"]}
              colors={["blue", "violet", "fuchsia"]}
              // valueFormatter={valueFormatter}
              showLegend={false}
              showYAxis={false}
              startEndOnly={true}
              className="mt-6 h-32"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StocksAnalysisSection;
