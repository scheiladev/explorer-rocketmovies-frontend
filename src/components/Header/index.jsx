import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container, Profile } from './styles';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';

export function Header({ onChange }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <div>
        <Link to='/'>RocketMovies</Link>

        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={onChange}
        />
        
        <Profile>
          <div>
            <Link to="/profile">
              {user.name}
            </Link>
            <button onClick={signOut}>sair</button>
          </div>

          <Link to="/profile">
            <img 
              src={avatarUrl}  
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}