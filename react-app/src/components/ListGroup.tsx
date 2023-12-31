import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event); // warning from typescript compiler, because ts doesn't know the type of the parameter
  // doesn't know whether it's an int/string etc./

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        {/* The below is javascript code that needed to be wrapped in an curly braces 
        because JSX can only use HTML elements or other react components,
         so that's why it needs to be wrapped in braces*/}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
