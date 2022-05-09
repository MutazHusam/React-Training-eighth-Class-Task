import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import {useState} from "react";

const initialItems = [
  {
    title: "Mutaz",
    id: Math.random() * 1000,
  },
  {
    title: "Yazn",
    id: Math.random() * 1000,
  },
  {
    title: "Moath",
    id: Math.random() * 1000,
  },
  {
    title: "Husam",
    id: Math.random() * 1000,
  },
];
function Home() {
  const [value, setValue] = useState("");

  const [items, setItems] = useState(initialItems);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setItems([
        ...items,
        {
            title: value,
            id: Math.random() * 1000,
        }
    ]);

    setValue('')
  };

  const handleDelete = (id) => {
    setItems(
      items.filter((item) => item.id !== id),
    );
  };


  return (
      <div className={"inner-container"}>
        <h1>To Do List App</h1>
        <InputBox
            value={value}
            handleChange={handleChange}
            handleAdd={handleAdd}
        />
        <List items={items} handleDelete={handleDelete} />

      </div>

  );
}
export default Home;