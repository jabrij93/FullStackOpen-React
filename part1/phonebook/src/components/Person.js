import React from "react";

const Person = ({person, deleteButton, text}) => {
  return (
    <div>
        <li> 
          {person.name} {person.number}
          <button onClick={deleteButton}> {text} </button> 
        </li>
    </div>
  );
}

export default Person