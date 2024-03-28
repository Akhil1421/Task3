import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./charts.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughNutChart() {

  //This component contains the Charts to be displayed
  //Chart.js has been used to display the charts


  //these are categories of each of the 4 card components over which data has been calculated (hardcoded in this case)
  const categories = [["Upcoming", "Ongoing", "Completed"], ["Upcoming", "Ongoing", "Completed"], ["Upcoming", "Ongoing", "Completed"], ["Frieght Charge", "Driver Charge", "Other Charges"]]
  const legends = ['Order', 'Trips', 'Revenues', 'Expenses']
  
  //This is data of donut chart
  const data = {
    datasets: [
      {
        data: [50, 100, 50],
        backgroundColor: [
          "#4FD2B5", "#FFCB49", "#7464FF"
        ],
        borderColor: [
          "#4FD2B5", "#FFCB49", "#7464FF"
        ],
        weight: 0.1,
      },
    ],
  };
  
  //This is done to put text at the center of the doughnut chart
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart
      ctx.save()
      ctx.font = '0.75rem roboto'
      ctx.fillStyle = '#676666'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      /*this is the total which will be displayed in center of doughnut since we know that there are 3 categories
        and data is known earlierly so we don't use any hook for state management
        Total is calculated as sum of each of the categories value stored in data.datasets[0].data
      */
      const total = data.datasets[0].data[0] + data.datasets[0].data[1] + data.datasets[0].data[2]
      ctx.fillText(`Total ${total}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }
  /*Since data of each of the card component is same so we directly feed the data stored in data.datasets to the
    each card's donut component.
    We store title of each of the card in legends array and while iterating through categories array we access that card's 
    title using index arg from .map method
  */
  return (
    <div className='chart-row'>
      {categories.map((category, index) => {
        return (
          <div className='chart-card' key={`cat${index}`}>
            <div className='legend'>{legends[index]}</div>
            <div className='doughnut-holder'>
              <Doughnut data={data} plugins={[textCenter]} options={{maintainAspectRatio: false}} />
            </div>
            <div className='category-names'>
              <div className='cat cat-1' style={{background: "linear-gradient(90deg, #FFFFFF 0%, #FFCB49 100%)"}}>
                <span>{category[0]}</span>
                <span>{data.datasets[0].data[0]}</span>
              </div>
              <div className='cat cat-2' style={{background: "linear-gradient(90deg, #FFFFFF 0%, #7464FF 100%)"}}>
                <span>{category[1]}</span>
                <span>{data.datasets[0].data[1]}</span>
              </div>
              <div className='cat cat-3' style={{background: "linear-gradient(90deg, #FFFFFF 0%, #4FD2B5 100%)"}}>
                <span>{category[2]}</span>
                <span>{data.datasets[0].data[2]}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
