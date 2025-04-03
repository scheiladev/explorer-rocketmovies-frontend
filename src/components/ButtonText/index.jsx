import { Container } from './styles';

export function ButtonText({ link, icon:Icon, title, ...rest }) {
  return (
    <Container to={link} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}