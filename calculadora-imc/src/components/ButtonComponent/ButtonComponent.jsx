import './ButtonComponent.css';

const ButtonComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, text, action } = props;

    const handleAction = (event) => {
        action(event);
    };

    return (
        <button id={id} onClick={handleAction}>
            {text}
        </button>
    );
};

export default ButtonComponent;