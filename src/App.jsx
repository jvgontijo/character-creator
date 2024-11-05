import { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';

function App() {
  const [characters] = useState([
    { id: 1, name: 'Aragorn', classType: 'Ranger', level: 10 },
    { id: 2, name: 'Gandalf', classType: 'Wizard', level: 20 }
  ]);

  const handleEdit = (character) => {
    console.log('Editing character:', character);
  };

  return (
    <div className="App">
      <h1>RPG Character Manager</h1>
      <CharacterList characters={characters} onEdit={handleEdit} />
      <CharacterForm />
    </div>
  );
}

export default App;
