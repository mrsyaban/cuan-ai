import { adaroAnalysis, StocksAnalysis } from "../../types/stocks.td";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import StocksChart from "../chart";
import { BarChart, Card, DonutChart, LineChart } from "@tremor/react";
import { HiOutlineBookmark, HiOutlineShoppingBag } from "react-icons/hi";
import { Action } from "../../enums/action";


const AdroAnalysisSection = () => {
  const [analysis, setAnalysis] = useState<StocksAnalysis>(adaroAnalysis);

  useEffect(() => {
    setAnalysis(adaroAnalysis);
  }, []);

  const data = [
    {
      date: '2018',
      'This Year': 40581
    },
    {
      date: '2019',
      'This Year': 70320
    },
    {
      date: '2020',
      'This Year': 49921
    },
    {
      date: '2021',
      'This Year': 30958
    },
    {
      date: '2022',
      'This Year': 80005
    },
    {
      date: '2023',
      'This Year': 105400
    },
  ];

  const dataDonut = [
    {
      name: 'Debt',
      amount: 40,
      share: '40%',
      color: 'bg-red-500',
    },
    {
      name: 'Equity',
      amount: 60,
      share: '60%',
      color: 'bg-blue-500',
    }
  ]
  
  function valueFormatter(number: number) {
    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
      style: "currency",
      currency: "IDR"
    });
  
    return formatter.format(number);
  }

  const dataLine = [
    {
      date: 'Jan 23',
      Organic: 232,
    },
    {
      date: 'Feb 23',
      Organic: 241,
    },
    {
      date: 'Mar 23',
      Organic: 291,
    },
    {
      date: 'Apr 23',
      Organic: 360,
    },
    {
      date: 'May 23',
      Organic: 435,
    },
    {
      date: 'Jun 23',
      Organic: 436,
    },
    {
      date: 'Jul 23',
      Organic: 432,
    }
  ]  
  

  return (
    <div className="flex flex-row h-full gap-4">
      <div className="flex flex-col w-[70%] gap-4 ">
        <div className="flex flex-row rounded-md justify-between bg-primary-dark px-12 py-4 h-fit">
          <div className="flex gap-3 font-semibold text-2xl items-center ">
            <img src={analysis.logo} alt="logo" className="w-6 h-6" />
            {analysis.name}
          </div>
          <div className="flex items-center">
            {
              adaroAnalysis.action == Action.buy ? 
                <span className="text-lime-500 font-bold">RECOMMENDED</span>
                : adaroAnalysis.action == Action.hold ? 
                  <span className="text-yellow-500 font-bold">HOLD</span>
                  :
                  <span className="text-red-500 font-bold">SELL</span>
                  
            }
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
        <div className="flex flex-col rounded-md justify-between bg-primary-dark px-12 py-4 h-fit">
          <Card className="w-[460px] mb-4">
            <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Revenue (IDR Mil)
            </h3>
            <BarChart
              data={data}
              index="date"
              categories={
                ['This Year']
              }
              showLegend={false}
              colors={['blue']}
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
              colors={['red', 'blue']}
            />
          </Card>
          <Card className="w-[460px] h-[300px]">
            <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Coal Price Raycast
            </h3>
            <LineChart
                data={dataLine}
                index="date"
                categories={['Organic']}
                colors={['blue', 'violet', 'fuchsia']}
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

export default AdroAnalysisSection;
