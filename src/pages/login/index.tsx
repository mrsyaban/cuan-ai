import { useState, useEffect } from "react";
import GoogleLogin from "../../components/buttons/GoogleLogin";
import { BarChart, Card, Divider, DonutChart, LineChart, Switch } from "@tremor/react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // You can add any initialization or side effects here if needed
  }, []);

  const data = [
    {
      date: '2018',
      'This Year': 68560
    },
    {
      date: '2019',
      'This Year': 70320
    },
    {
      date: '2020',
      'This Year': 80233
    },
    {
      date: '2021',
      'This Year': 55123
    },
    {
      date: '2022',
      'This Year': 56000
    },
    {
      date: '2023',
      'This Year': 100000
    },
  ];

  const dataDonut = [
    {
      name: 'Debt',
      amount: 60,
      share: '60%',
      color: 'bg-red-500',
    },
    {
      name: 'Equity',
      amount: 40,
      share: '40%',
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
      Organic: 101,
    },
    {
      date: 'May 23',
      Organic: 318,
    },
    {
      date: 'Jun 23',
      Organic: 205,
    },
    {
      date: 'Jul 23',
      Organic: 372,
    }
  ]  
  

  return (
    <div className="flex flex-row w-screen justify-center items-center h-full">
      <div className="flex flex-col w-fit items-center gap-10">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <div className="flex flex-col gap-6 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 bg-transparent border-2 border-white rounded-md p-3 px-5 text-lg"
            placeholder="Email address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 bg-transparent border-2 border-white rounded-md p-3 px-5 text-lg"
            placeholder="Password"
          />
          <div className="flex items-center w-80 justify-center bg-blue-500 rounded-md px-5 py-3 cursor-pointer">
            Continue
          </div>
          <div className="flex flex-row gap-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </div>
          <div className="flex flex-row items-center w-80">
            <hr className="flex-grow border-t border-white" />
            <span className="mx-2 text-white">or</span>
            <hr className="flex-grow border-t border-white" />
          </div>
          <GoogleLogin isLogin={true} />
        </div>
      </div>
      <Card className="w-[500px]">
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
      <Card className="w-[400px] h-[300px]">
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
      <Card className="w-[400px] h-[300px]">
        <h3 className="ml-0 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Price Raycast
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
  );
};

export default LoginPage;
