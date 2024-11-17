import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

// export const Counter
export default function Counter({ color }) {
  const [count, setCount] = useState(0);
  const handleClick = (eventType) => {
    if (eventType === "ADD") {
      console.log("Added Clicked");
      setCount(count + 1);
      return;
    }
    setCount(count - 1);
    console.log("Subtracted Clicked");
  };

  return (
    <>
      <Button
        label="-"
        onClick={() => handleClick()}
        size="large"
        backgroundColor="#0f0"
      />
      <span style={{ color }}>Counter: {count}</span>
      <Button
        label="+"
        onClick={() => handleClick("ADD")}
        size="large"
        backgroundColor="#0f0"
      />
    </>
  );
}

Counter.propTypes = {
  color: PropTypes.string,
};
