import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';

export function Film({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Rating range={data.rating} />
      <p>{data.description}</p>
      {data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  );
}