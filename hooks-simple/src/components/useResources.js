import  { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  // first arg is a function that gets called when component is rerendered
  // second arg is an array. If the elements in the array has not changed then it won't call the function. If it's different then it will call.
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
