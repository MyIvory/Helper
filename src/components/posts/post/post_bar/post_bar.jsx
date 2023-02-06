
import p from "./post_bar.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PostBar = (props) => {
  const data = {
    datasets: [
      {
        data: [props.collected, props.left],
        backgroundColor: [
          'rgba(248, 65, 3, 1)',
          'rgba(0, 0, 0,0.1)',
        ],
        hoverBorderWidth:[1,1],
        hoverBorderColor:[
          'rgba(248, 65, 3, 1)',
          'rgba(0, 0, 0,0.1)',
        ]
      },

    ],
    labels: ["Зібрано", "Залишилося"],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels:{
          boxWidth:20
        }
      },
      tooltip:{
        padding:15,
        displayColors:false,
        backgroundColor:'rgba(248, 65, 3, 1)',
        callbacks:{
          label:function(context){
            return context.raw
          }

          
        }
      },
    },
    cutout: 43,
    radius: 50,
    borderRadius: 10,
  }

  return (
    <div className={p.post} >
      <Doughnut data={data} width={60} height={60} options={options} />
    </div>
  )
}
export default PostBar