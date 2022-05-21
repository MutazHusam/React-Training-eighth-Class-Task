import "./style.css";
import Button from "../Button";
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';

function InputBox(props) {
  return (
    <div className={"flex input-box"}>
      <input
        onChange={(e)=>props.handleChange(e)}
        value={props.value}
        type="text"
        placeholder={"Enter task"}
        max={150}
      />
      <Button
        disabled={!props.value}
        isWhite={true}
        onClick={props.handleAdd}
        id={"add"}
      >
        <AddBoxIcon/>
      </Button>
    </div>
  );
}

export default InputBox;
