import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Revenue Chart",
    },
  },
};
//const labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//demo data
// const data={
//     labels,
//     datasets:[
//         {
//             label:'Product 1',
//             data:[1000,2006,3545,4454,0],
//             borderColor:'rgb(255,6,99)',
//             backgroundColor:'rgba(255,6,99,0.5',
//         },
//         {
//             label:'Product 12',
//             data:[4564,5553,7223,1543,2432],
//             borderColor:'rgb(255,99,234)',
//             backgroundColor:'rgba(255,l99,234,0.5',
//         },
//     ]
//   }
const Chartline = () => {
  const [chart, setChart] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Product 1",
        data: [1000, 2006, 3545, 4454, 0],
        borderColor: "red",
        backgroundColor: "rgba(255,6,99,0.5)",
      },
      {
        label: "Product 12",
        data: [4564, 5553, 7223, 1543, 2432],
        borderColor: "blue",
        backgroundColor: "rgba(255,l99,234,0.5)",
      },
    ],
  });

  useEffect(() => {
    const dataset1 = [];
    const dataset2 = [];
    const fetchRevenue = async () => {
      var baseUrl = `http://fetest.pangeatech.net/data`;
      await fetch(baseUrl)
        .then((res) => {
          const dt = res.json();
          return dt;
        })
        .then((json) => {
          // console.log("res",json)
          for (const val of json) {
            dataset1.push(val.S_no);
            dataset2.push(val.acv);
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    //console.log("arrayData",dataset1,dataset2);
    fetchRevenue();
  }, []);
  return (
    <div>
      <div style={{ border: "1px", width: "80%" }}>
        <Line data={chart} options={options} />
      </div>
      <select id="ddProduct" className="sel">
        <option value="All">Product</option>
        <option value="1">Product 1</option>
        <option value="2">Product 2</option>
        <option value="3">Product 3</option>
      </select>
    </div>
  );
};
export default Chartline;
