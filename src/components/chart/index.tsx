// import React, { useEffect, useRef, useState } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const StocksChart: React.FC = () => {
//   const chartRef = useRef<typeof CanvasJSChart | null>(null); // Explicit type definition
//   const [startTime, setStartTime] = useState<number>(0);
//   const [endTime, setEndTime] = useState<number>(0);

//   useEffect(() => {
//     setEndTime(new Date().getTime());
//     const timeToRender = `Time to Render: ${endTime - startTime}ms`;
//     const timeToRenderElement = document.getElementById("timeToRender");
//     if (timeToRenderElement) {
//       timeToRenderElement.innerHTML = timeToRender;
//     }
//   }, [endTime, startTime]);

//   const generateDataPoints = () => {
//     const limit = 50000;
//     let y = 100;
//     const dataPoints = [];

//     for (let i = 0; i < limit; i += 1) {
//       y += Math.round(Math.random() * 10 - 5);
//       dataPoints.push({
//         x: i,
//         y: y
//       });
//     }

//     return dataPoints;
//   };

//   const dataSeries = [{ type: "line", dataPoints: generateDataPoints() }];

//   const options = {
//     zoomEnabled: true,
//     animationEnabled: true,
//     title: {
//       text: "Try Zooming - Panning"
//     },
//     data: dataSeries
//   };

//   const handleChartRender = () => {
//     setStartTime(new Date().getTime());
//   };

//   return (
//     <div>
//       <CanvasJSChart options={options}
//         onRender={handleChartRender}
//         containerProps={{ style: { position: 'relative' } }}
//         chartRef={(ref: typeof CanvasJSChart) => (chartRef.current = ref)} // Assigning the chart reference
//       />
//       <span id="timeToRender" style={{
//         position: 'absolute',
//         top: '10px',
//         fontSize: '20px',
//         fontWeight: 'bold',
//         backgroundColor: '#d85757',
//         padding: '0px 4px',
//         color: '#ffffff'
//       }}></span>
//     </div>
//   );
// };

// export default StocksChart;