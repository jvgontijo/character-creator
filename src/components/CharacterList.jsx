import CharacterCard from './CharacterCard';

const CharacterList = ({ characters = [], onEdit }) => {
  return (
    <div>
      <h2>Character List</h2>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default CharacterList;
