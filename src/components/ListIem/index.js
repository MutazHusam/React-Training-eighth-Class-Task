import "./style.css";
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from "../Button";

function ListIem(props) {
  return (
    <div className={"flex item"}>
      <p className={"title"}>{props.title}</p>
      <Button onClick={() => props.handleDelete(props.id)}>
        <DeleteIcon/>
      </Button>
    </div>
  );
}

export default ListIem;
