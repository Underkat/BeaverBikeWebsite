import Card from "./Card";
import "./Cards.css";
import { cardContent } from "./CardsContent";

const Cards = () => {
  return (
    <div className="cards-container">
      {cardContent.map((content, index) => (
        <Card
          key={index}
          title={content.title}
          icon={content.icon}
          description={content.description}
        />
      ))}
    </div>
  );
};

export default Cards;
