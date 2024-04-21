import { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';
import './ImcCalcComponent.css'

const ImcCalcComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const { calcImc } = props;
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const clearForm = (event) => {
        event.preventDefault();
        setHeight('');
        setWeight('');
    };

    const validDigit = (text) => {
        return text.replace(/[^0-9,]/g, '');
    };

    const handleHeightChange = (event) => {
        const eventTarget = event.target;
        const value = eventTarget.value;
        const updatedValue = validDigit(value);
        setHeight(updatedValue);
    };

    const handleWeightChange = (event) => {
        const eventTarget = event.target;
        const value = eventTarget.value;
        const updatedValue = validDigit(value);
        setWeight(updatedValue);
    };

    return (
        <div id='id_calc_container'>
            <h2>Calculadora IMC</h2>

            <form id='id_imc_form'>
                <div className='class_form_inputs'>
                    <div className='class_form_control'>
                        <label htmlFor='id_height'>Altura</label>
                        <input
                            type='text'
                            name='id_height'
                            id='id_height'
                            placeholder='Exemplo 1,75'
                            onChange={(event) => handleHeightChange(event)}
                            value={height}
                        />
                    </div>

                    <div className='class_form_control'>
                        <label htmlFor='id_weight'>Peso</label>
                        <input
                            type='text'
                            name='id_weight'
                            id='id_weight'
                            placeholder='Exemplo 70,5'
                            onChange={(event) => handleWeightChange(event)}
                            value={weight}
                        />
                    </div>
                </div>

                <div className='class_action_control'>
                    <ButtonComponent
                        id='id_calc_button'
                        text='Calcular'
                        action={(event) => calcImc(event, height, weight)}
                    />

                    <ButtonComponent
                        id='id_clear_button'
                        text='Limpar'
                        action={(event) => clearForm(event)}
                    />
                </div>
            </form>
        </div>
    );
};

export default ImcCalcComponent;