const CharacterCard = ({ character, onEdit }) => {
  const { name, classType, level } = character;
  
  return (
    <div className="character-card">
      <h3>{name}</h3>
      <p>Class: {classType}</p>
      <p>Level: {level}</p>
      <button onClick={() => onEdit(character)}>Edit</button>
    </div>
  );
};

export default CharacterCard;
