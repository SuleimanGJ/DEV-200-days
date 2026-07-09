const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];



function ListFilter(){
    const chemists = people.filter(person => 
        person.profession === 'chemist'
    )
      const listItems = chemists.map(person =>
    <li key={person.id}>
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
      </p>
    </li>
  );
    return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );

}

export default ListFilter;
