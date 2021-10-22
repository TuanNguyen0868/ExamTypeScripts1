import React from "react";
import useAxios from "../hooks/useAxios";

export default function TestData() {
  const [response, query, setQuery] = useAxios();
  const handleQueryChange = (event: any) => {
    setQuery(event.target.value || "");
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />

      <ul>
        <li>{response}</li>
      </ul>
    </div>
  );
}
