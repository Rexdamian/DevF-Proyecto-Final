import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { detailsContainerStyle, characterImageStyle, pageContainerStyle } from "../assets/Styles/styles";

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        setError("No se pudo obtener el personaje: " + error.message);
      }
    };
    fetchCharacter();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!character) return <h2>Cargando...</h2>;

  return (
    <>
    <div style={pageContainerStyle}>
      <div style={detailsContainerStyle}>
        <img src={character.image} alt={character.name} style={characterImageStyle} />
        <h2>{character.name}</h2>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
        <p><strong>Ubicación:</strong> {character.location.name}</p>
      </div>
    </div>
    </>
  );
};

export default Details;