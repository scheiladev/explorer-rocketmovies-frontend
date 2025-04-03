import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Container, Fixed, Catalog } from "./styles";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Film } from "../../components/Film";

export function Home() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchFilms() {
      const response = await api.get(`/notes?title=${search}`);
      console.log(response.data);
      setFilms(response.data);
    }

    fetchFilms();
  }, [search]);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <Fixed>
        <h2>Meus filmes</h2>

        <ButtonText to="/create" icon={FiPlus} title="Adicionar filme" />
      </Fixed>

      <Catalog>
        {films &&
          films.map((film, index) => (
            <Film
              key={String(index)}
              data={film}
              onClick={() => {handleDetails(film.id)}}
            />
            ))}
      </Catalog>
    </Container>
  );
}
