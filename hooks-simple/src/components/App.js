import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  // array destructuring, same as
  // resource = useState("posts")[0]
  // setResource = useState("posts")[1]
  // The first one is the current state value
  // The second one is the setter function
  const [resource, setResource] = useState("posts");
  console.log(resource);

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
