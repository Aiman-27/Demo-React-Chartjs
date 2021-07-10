import logo from './logo.svg';
import './App.css';
import {Bar} from 'react-chartjs-2';

const data = {
  labels:['January','February','March','April','May','June'],
  datasets: [
    {
      label:'My First dataset',
      backgroundColor: 'rgba(255,99,132,.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,0.4)',
      data: [65,90,80,81,56,55,40]
    }
  ]
}

function App() {
  return (
    <div >
      <Bar
        data={data}
        width={50}
        height={200}
        options={{
          maintainAspectRatio:false
        }}
      ></Bar>
    </div>
  );
}

export default App;
