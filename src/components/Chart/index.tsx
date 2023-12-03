import { Doughnut } from "react-chartjs-2";
import { TChart } from "../../utils/types/chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto'
import * as S from './styles'


export const Chart = (
    { title, label1, label2, label3, data1, data2, data3 }: TChart
) => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        tittle: title,
        labels: [label1, label2, label3],
        datasets: [
            {
                data: [data1, data2, data3],
                backgroundColor: ['#ADFF4D', 'rgb(52, 199, 89)', '#1C79BF'],
                hoverBackgroundColor: ['#ADFF4D', 'rgb(52,199,89)', '#1C79BF'],
            },
        ],
        
    }
    return (
        <>  
            <S.title>{title}</S.title>
            <Doughnut data={data} />
        </>
    )
}