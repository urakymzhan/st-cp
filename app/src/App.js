import {
  BsBadgeVrFill,
  BsBadge4KFill,
  BsCollectionPlayFill,
  BsBadgeHdFill,
} from "react-icons/bs";
import Card from "./components/Card";
import { AppDiv } from "./styled";

const cards = [
  {
    id: 1,
    icon: <BsBadge4KFill />,
    stats: 278,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 80,
  },
  {
    id: 2,
    icon: <BsBadgeVrFill />,
    stats: 156,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 50,
  },
  {
    id: 3,
    icon: <BsCollectionPlayFill />,
    stats: "64.89%",
    comment: "Bounce Rate",
    left: true,
    progresbar: true,
    value: 10,
  },
  {
    id: 4,
    icon: <BsBadgeHdFill />,
    stats: 423,
    comment: "Total Visits",
    left: true,
    progresbar: false,
    value: 90,
  },
];

function App() {
  return (
    <AppDiv>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </AppDiv>
  );
}

export default App;
