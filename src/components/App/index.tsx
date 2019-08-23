import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { T } from "../Blocks/T";

interface Position {
  x: number;
  y: number;
}

const App = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handlePosition = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "w") setPosition({ x: position.x, y: position.y - 1 });
      if (key === "s") setPosition({ x: position.x, y: position.y + 1 });
      if (key === "a") setPosition({ x: position.x - 1, y: position.y });
      if (key === "d") setPosition({ x: position.x + 1, y: position.y });
    },
    [position]
  );

  useEffect(() => {
    window.addEventListener("keydown", handlePosition);
    return () => window.removeEventListener("keydown", handlePosition);
  }, [position]);

  return (
    <Wrapper>
      <T position={position} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#000 1px, transparent 0),
    linear-gradient(90deg, #000 1px, transparent 0);
  background-size: 32px 32px;
`;

export default App;
