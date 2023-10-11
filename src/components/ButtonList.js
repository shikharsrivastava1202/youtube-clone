import React from "react";
import Button from "./Button";

const list = [
  "All",
  "News",
  "Computer programming",
  "Gadgets",
  "Tourist destinations",
  "Inventions",
  "Space exploration",
  "Aviation",
  "Tech",
  "Songs",
  "Live",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, id) => {
        return <Button name={name} key={id} />;
      })}
    </div>
  );
};

export default ButtonList;
