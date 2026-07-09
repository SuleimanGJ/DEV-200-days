const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function ListRendering(){
//     const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;

//   return (
//   <ul>
//     {people.map(person => <li>{person}</li>)}
//   </ul>
// )
  return (
  <ul>
    {people.map(person => <Person person={person} />)}
  </ul>
)
}

function Person({person}){
    return <li>{person}</li>
}

export default ListRendering;