import { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

// import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './StackedColumn.module.scss'
 const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];


export const StackedColumn= () => {
     const container = useRef(null);
  const chart = useRef(null);

      useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container:any) {
  const chart = new Chart({
    container,
    });

 
  chart
    .interval() // Create an Interval tag
    .data(data) // Bind data
    .encode('x', 'genre') // Encode x channel
    .encode('y', 'sold') // Encode y channel
    .encode('key', 'genre') // Specify key
    .animate('update', { duration: 300 }); // Specify the time to update the animation

  chart.render();

  return chart;
  }
//@ts-ignore
  function updateBarChart(chart) {
  const interval = chart.getNodesByType('interval')[0];

      //@ts-ignore
  const newData = interval.data().map((d) => ({
    ...d,
    sold: Math.random() * 400 + 100,
  }));

  interval.data(newData);

  chart.render();
  }

    return <div> <div ref={container}></div>
      <button onClick={() => updateBarChart(chart.current)}>Update Data</button></div>
}
