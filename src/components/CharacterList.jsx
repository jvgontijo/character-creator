import React from 'react';
import CharacterCard from './CharacterCard';
import '../../src/styles.css'

const CharacterList = ({ characters = [], onEdit }) => {
  return (
    <div className="character-list">
      <h2>Character List</h2>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default CharacterList;
