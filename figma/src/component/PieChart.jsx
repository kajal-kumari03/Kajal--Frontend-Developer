import React from "react";
import Donut from '../assets/Donut.png'; 
import './TokenDetails.css';
const Info = () => {
  return (
   <div className="token">
            <h2 className="tt">Tokenomics</h2>
    <div className='pie'>
      <img className="piechart" src={Donut} alt="Donut Chart" />
    </div>

    <div className="token-details-container">
     
      <div className="token-info">
        <div>
          <p>Name</p>
          <p>Token Name</p>
          <p>Token Standard</p>
          <p>Blockchain</p>
          <p>Total Supply</p>
          <p>Tax</p>
        </div>
        <div>
          <p>: EthAi</p>
          <p>: $EthAi</p>
          <p>: ERC20</p>
          <p>: Ethereum</p>
          <p>: 100 Million</p>
          <p>: 5%/5%</p>
        </div>
      </div>
      <div className="token-distribution">
        <div>
          <p>Team</p>
          <p>Marketing</p>
          <p>Liquidity Pool</p>
        </div>
        <div>
          <p>: 35%</p>
          <p>: 5%</p>
          <p>: 90%</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Info;
























// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//   const data = {
//     labels: ["Liquidity Pool (90%)", "Team (35%)", "Marketing (5%)"],
//     datasets: [
//       {
//         label: "% of Tokens",
//         data: [90, 35, 5],
//         backgroundColor: ["#30c9c9", "#1f839e", "#00d7d9"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false, 
//       },
//     },
//   };

//   return (
//     <div style={{ width: "300px" }}>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default PieChart;
