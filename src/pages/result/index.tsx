
import BackIcon from '@/assets/icons/back-icon.svg'
import StocksAnalysisSection from '../../components/stocks-analysis'


const AnalysisResultPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col w-screen gap-10 p-8 items-start justify-start h-screen">
      <div id="header" className="flex gap-6 items-center text-3xl font-semibold h-[10%]">
        <img src={BackIcon} alt="back" className="w-8 h-8 fill-white cursor-pointer" onClick={goBack} />
        Stocks Analysis
      </div>
      <div className='h-[90%]'>
        <StocksAnalysisSection />
      </div>
    </div>
  )
}

export default AnalysisResultPage