import Icon from "./Icon";
import { CardContainer, Comment, MainDiv, ProgressBar, Stats } from "./styled";

function Card({ card }) {
  return (
    <CardContainer>
      <MainDiv>
        <Icon>{card.icon}</Icon>
        <div>
          <Stats>{card.stats}</Stats>
          <Comment>{card.comment}</Comment>
        </div>
      </MainDiv>
      <ProgressBar
        progresbar={card.progresbar}
        value={card.value}
        max={"100"}
      />
    </CardContainer>
  );
}

export default Card;
