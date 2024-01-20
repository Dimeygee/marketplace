
import { Header } from "./components/views/header";
import { Filter } from "./components/section/filter/filter";
import { Items } from "./components/section/items/items";
import { AdvertSBox } from "./components/section/advertsbox";


export default function Index() {
  
  

  return (
    <>
      <Header name="Shop" />
      <Filter />
      <Items />
      <AdvertSBox />
    </>
  );
}
