import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';
import './ImcTableComponent.css';

const ImcTableComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const { data, imc, info, infoClass, resetCalc } = props;

    return (
        <div id='id_result_container'>
            <p id='id_imc_number'>
                Seu IMC: <span className={infoClass}>{imc}</span>
            </p>

            <p id='id_imc_info'>
                Situação atual: <span className={infoClass}>{info}</span>
            </p>

            <h3>Confira as classificações</h3>

            <div id='id_imc_table'>
                <div className='class_table_header'>
                    <h4>IMC</h4>
                    <h4>Classificações</h4>
                    <h4>Obesidade</h4>
                </div>

                {
                    // eslint-disable-next-line react/prop-types
                    data.map(
                        (item) => (
                            <div className='class_table_data' key={item.info}>
                                <p>{item.classification}</p>
                                <p>{item.info}</p>
                                <p>{item.obesity}</p>
                            </div>
                        )
                    )
                }
            </div>

            <ButtonComponent
                id='id_back_button'
                text='voltar'
                action={resetCalc}
            />
        </div>
    );
};

export default ImcTableComponent;