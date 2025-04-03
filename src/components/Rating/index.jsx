import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Container } from "./styles";

export function Rating({ range }) {
  return (
    <Container>
      {range >= 1 ? <AiFillStar /> : <AiOutlineStar />}
      {range >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {range >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {range >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {range >= 5 ? <AiFillStar /> : <AiOutlineStar />}
    </Container>
  );
}