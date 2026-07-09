import React from "react";
function Item({ todo, isDone }) {
  return (
    <li className="item">
      {todo} {isDone ? '✅' : '❌'}
    </li>
  );
}
// function Item({ todo, isDone }) {
// //   return (
// //     <li className="item">
// //       {todo} {isDone && '✅'} 
// //       {/* both must be true other wise false */}
// //     </li>
// // );
// // if(isDone){
// //  return <li>{todo} ✅</li>
// // } else {
// //     return <li>{todo} ❌</li>
// // }
// }
function CondRendering() {
    return (
        <div>
        <ul>
        <Item
          isDone={true}
          todo="Space suit"
        />
        <Item
          isDone={true}
          todo="Helmet with a golden leaf"
        />
        <Item
          isDone={false}
          todo="Photo of Tam"
        />
      </ul>
        </div>
    )
}

export default CondRendering;