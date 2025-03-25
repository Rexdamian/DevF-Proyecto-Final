import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { containerStyle, inputStyle, selectStyle, errorStyle, charactersContainerStyle, characterCardStyle, formContainerStyle } from "../assets/Styles/styles.js";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [speciesFilter, setSpeciesFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let currentPageUrl = 'https://rickandmortyapi.com/api/character';

        while (currentPageUrl) {
          const response = await axios.get(currentPageUrl);
          allCharacters = [...allCharacters, ...response.data.results];
          currentPageUrl = response.data.info.next;
        }

        setCharacters(allCharacters);
        setLoading(false);
      } catch (error) {
        setError("Hubo un error al cargar los datos: " + error.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSpeciesFilterChange = (e) => {
    setSpeciesFilter(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const filteredCharacters = characters.filter((character) => {
    const searchLower = search.toLowerCase();
    const isNameMatch = character.name.toLowerCase().includes(searchLower);

    let isSpeciesMatch = true;
    if (speciesFilter) {
      isSpeciesMatch = character.species.toLowerCase() === speciesFilter.toLowerCase();
    }

    let isStatusMatch = true;
    if (statusFilter) {
      isStatusMatch = character.status.toLowerCase() === statusFilter.toLowerCase();
    }

    let isGenderMatch = true;
    if (genderFilter) {
      isGenderMatch = character.gender.toLowerCase() === genderFilter.toLowerCase();
    }

    if (!search && !speciesFilter && !statusFilter && !genderFilter) return true;

    return isNameMatch && isSpeciesMatch && isStatusMatch && isGenderMatch;
  });

  return (
    <div style={containerStyle}>
      <h1>Rick & Morty</h1>

      {error && <p style={errorStyle}>{error}</p>}

      {loading && <h2>Loading...</h2>}

    <div style={formContainerStyle}>
        <input
            type="text"
            placeholder="Buscar por nombre"
            value={search}
            onChange={handleSearch}
            style={inputStyle}
        />

        <select onChange={handleSpeciesFilterChange} style={selectStyle} value={speciesFilter}>
            <option value="">Seleccionar Especie</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>

        <select onChange={handleStatusFilterChange} style={selectStyle} value={statusFilter}>
            <option value="">Seleccionar Estado</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
        </select>

        <select onChange={handleGenderFilterChange} style={selectStyle} value={genderFilter}>
            <option value="">Seleccionar Género</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>

      <div style={charactersContainerStyle}>
        {filteredCharacters.map((character) => (
          <Link key={character.id} to={`/details/${character.id}`}>
            <div style={characterCardStyle}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;