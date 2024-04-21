import { useState } from 'react';
import { data } from './database/dataDB.js';
import ImcCalcComponent from './components/ImcCalcComponent/ImcCalcComponent.jsx';
import ImcTableComponent from './components/ImcTableComponent/ImcTableComponent.jsx';
import './App.css';

function App() {
  const calcImc = (event, height, weight) => {
    event.preventDefault();

    if (!height || !weight) {
      alert('Por favor , informe ALTURA e PESO para realizar o cálculo!');
      return;
    }

    const heightFloat = Number(height.replace(',', '.'));
    const weightFloat = Number(weight.replace(',', '.'));
    const imcResult = (weightFloat / (Math.pow(heightFloat, 2))).toFixed(1);

    setImc(imcResult);

    data.forEach(
      (item) => {
        if ((imcResult >= item.min) && (imcResult <= item.max)) {
          setInfo(item.info);
          setInfoClass(item.infoClass);
        }
      }
    );
  };

  const resetCalc = (event) => {
    event.preventDefault();
    setImc('');
    setInfo('');
    setInfoClass('');
  };

  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');

  return (
    <div className='class_container'>
      {
        !imc
          ? (
            <ImcCalcComponent calcImc={calcImc} />
          )
          : (
            <ImcTableComponent
              data={data}
              imc={imc}
              info={info}
              infoClass={infoClass}
              resetCalc={resetCalc}
            />
          )
      }
    </div>
  );
}

export default App;