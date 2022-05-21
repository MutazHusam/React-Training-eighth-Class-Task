import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { useState } from "react";
import { InnerContainer } from "./styles";
import { Title } from "../../globalStyles/styles";
import axios from "axios";
import NavBar from "../../components/NavBar";

const baseApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

const CRUDRequests = {
  get: async (URL) => {
    return await baseApi.get(URL);
  },
  delete: async (URL) => {
    return await baseApi.get(URL);
  },
  post: async (URL) => {
    return await baseApi.get(URL);
  },
  put: async (URL) => {
    return await baseApi.get(URL);
  },
};

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
      {
        title: value,
        id: Math.random() * 1000,
      },
      ...items,
    ]);

    setValue("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <NavBar></NavBar>
      <InnerContainer>
        <InputBox
          value={value}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
        <List items={items} handleDelete={handleDelete} />
      </InnerContainer>
    </>
  );
}
export default Home;
