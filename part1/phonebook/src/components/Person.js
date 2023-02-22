import React from "react";

const Person = (props) => {
  // props
  const person = props.person;

  return (
    <div key={person.id} id="person">
      <aside>
        <section id="name_and_button">
          {/* name */} {/*phone number*/}
          <h1>{person.personName + " (" + person.number + ")"}</h1>
        </section>
      </aside>
    </div>
  );
}

export default Person