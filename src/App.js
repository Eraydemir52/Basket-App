import { useState } from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import Card from "./components/Card";
import { IconCircleCheck } from "@tabler/icons-react";
import "./App.css";

const storeItems = [
  {
    name: "Fotoğraf Makinesi",
    src: "camera",
    price: "20",
  },
  {
    name: "Kulaklık",
    src: "headphone",
    price: "25",
  },
  {
    name: "Oyun Konsolu",
    src: "joistick",
    price: "50",
  },
  {
    name: "Retro Fotoğraf Makinesi",
    src: "ret-camera",
    price: "50",
  },
  {
    name: "Oyucak Araba",
    src: "car",
    price: "50",
  },
  {
    name: "Kol Saati",
    src: "watch",
    price: "50",
  },
];

function App() {
  let [basketıtems, setBasketItems] = useState([]);
  let [searchvalue, setSearchValue] = useState("");
  let filterItems = basketıtems.filter(
    (item) => item.name.toLowerCase().indexOf(searchvalue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => setBasketItems([...basketıtems, { name }])}
            />
          );
        })}
      </SimpleGrid>
      {searchvalue}
      <Input.Wrapper label="Arama">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <List
        className="List"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        {filterItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
