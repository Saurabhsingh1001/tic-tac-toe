import { useState} from 'react'

export default function Player({initialName, symbol, isActive}) {
  
  const[playerName, setPlayerName] = useState(initialName);
  const[isEditting, setIsEditting] = useState(false);

  function handleEditClick (){
    setIsEditting((editting) => !editting);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  //let btnCaption = 'Edit';

  if(isEditting) {
    editablePlayerName = <input type="text" required value={playerName} onChange ={handleChange}/>;
    //btnCaption ='Save';
  }
  
  

  return (
    
      <li className ={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditting ? 'Save' : 'Edit'}</button>
       </li>
    
  )
}
