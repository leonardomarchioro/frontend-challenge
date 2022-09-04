import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Container, Flag, Span, StarContainer } from "./styles";

interface IProps {
  country: string;
  flag: string;
  classification: string;
  type: string;
  volume: string;
  rating: number;
  avaliations: number;
}

const SpanRating: React.FC<IProps> = ({
  country,
  flag,
  classification,
  type,
  volume,
  rating,
  avaliations,
}) => {
  console.log(avaliations);
  return (
    <Container>
      <Flag src={flag} alt={country} />
      <Span>{country}</Span>
      <Span>{type}</Span>
      <Span>{classification}</Span>
      <Span>{volume}</Span>
      <StarContainer>
        {new Array(5)
          .fill("")
          .map((_, i) =>
            i + 1 <= rating ? (
              <AiFillStar key={i} size={20} color="#F9B950" />
            ) : (
              <AiFillStar key={i} size={20} color="#F1F1F1" />
            )
          )}
      </StarContainer>
      <Span>({avaliations || 0})</Span>
    </Container>
  );
};

export default SpanRating;
