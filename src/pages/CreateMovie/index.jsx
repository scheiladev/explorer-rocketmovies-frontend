import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Fixed, Form } from "./styles";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  async function handleNewMovie() {
    if (newTag) {
      return alert(
        "Existe uma tag preenchida, mas que não foi adicionada. Clique no botão para adicionar ou deixe o campo vazio."
      );
    }

    try {
      await api.post("/notes", {
        title,
        description,
        rating,
        tags,
      });

      alert("Filme cadastrado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  function handleAddTag() {
    if (!newTag) {
      return alert("Digite o nome da tag para adicionar!");
    }

    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <Fixed>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />

        <h2>Novo Filme</h2>
      </Fixed>

      <Form>
        <div>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <Textarea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        />

        <h3>Marcadores</h3>

        <div className="tags">
          {tags.map((tag, index) => (
            <TagItem
              key={String(index)}
              value={tag}
              onClick={() => {
                handleRemoveTag(tag);
              }}
            />
          ))}
          <TagItem
            isNew
            placeholder="Novo marcador"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </div>

        <div>
          <Button title="Excluir filme" className="bt-delete" />
          <Button title="Salvar alterações" onClick={handleNewMovie} />
        </div>
      </Form>
    </Container>
  );
}
