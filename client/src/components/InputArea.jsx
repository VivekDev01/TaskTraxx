// Update InputArea component
import add from "../images/add-circle-fill.png"

function InputArea(props) {
    
    return (
        <div className="form">
            <input placeholder="Write your task here" onChange={props.changeTrig} type="text" value={props.value} />
            <input placeholder="Add description" onChange={props.handleDescriptionChangeTrig} type="text" value={props.valueDescription} /> 
            <button onClick={() => props.addItemTrig()}>
                <img src={add} alt="" />
            </button>
        </div>
    );
}

export default InputArea;
