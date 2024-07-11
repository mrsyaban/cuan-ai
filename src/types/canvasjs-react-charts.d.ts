// Example of typings declaration
declare module '@canvasjs/react-charts' {
    import { ChartOptions } from 'canvasjs'; // Adjust import based on actual module structure

    const CanvasJSChart: React.ComponentType<{ options: ChartOptions }>;
    export { CanvasJSChart };
}