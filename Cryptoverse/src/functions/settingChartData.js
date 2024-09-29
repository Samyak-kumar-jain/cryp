import { gettingDate } from '../functions/getDate';

export const settingChartData = (setchartData , prices)=>{
    setchartData({
        labels: prices.map((item)=> gettingDate(item[0])),
        datasets: [
          {
            data: prices.map((item)=> item[1]),
            borderColor: "#ffd700",
            backgroundColor: "rgba(255, 217, 0, 0.029)",
            borderWidth:1,
            fill:true,
            tension:0.4,
            pointRadius:0,

           
          }],})

}