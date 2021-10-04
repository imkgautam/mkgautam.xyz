import React from "react";

export default function ProjectList({ data }) {
  return (
    <div className="grid gap-4 my-2">
      {data.map((x, i) => (
        <div key={i}>
          <strong className="uppercase">{x.title}</strong>: {x.desc}
        </div>
      ))}
    </div>
  );
}
