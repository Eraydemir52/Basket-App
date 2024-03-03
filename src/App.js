import { useState } from "react";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  Input,
  Button,
  Group,
  Drawer,
  Indicator,
} from "@mantine/core";
import Card from "./components/Card";
import { IconCircleCheck, IconBasket } from "@tabler/icons-react";
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
  let [opened, setOpened] = useState(false);
  let [basketıtems, setBasketItems] = useState([]);
  let [searchvalue, setSearchValue] = useState("");
  let filterItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchvalue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
          <Input
            value={searchvalue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
        <Indicator color="red" label={basketıtems.length} size={22}>
          <Button onClick={() => setOpened(true)}>
            <IconBasket size={22} />
          </Button>
        </Indicator>
      </Group>

      <SimpleGrid cols={3} className="Store">
        {filterItems.map(({ name, src }) => {
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
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sepetim"
        padding="md"
        size="md"
      >
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
          {basketıtems.map(({ name }, index) => (
            <List.Item key={index}>{name}</List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
