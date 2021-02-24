import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { BLOCK_SIZE, GAME } from "@/constants/size";
import { T } from "@/components/Blocks/T";
import { I } from "@/components/Blocks/I";
import { L } from "@/components/Blocks/L";
import { J } from "@/components/Blocks/J";
import { S } from "@/components/Blocks/S";
import { Z } from "@/components/Blocks/Z";
import { O } from "@/components/Blocks/O";

interface Position {
  x: number;
  y: number;
}

const App = () => {
  const [position, _setPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const setPosition = useCallback(
    (newPostion: Position) => {
      if (newPostion.x < 0) return;
      if (newPostion.x > GAME.WIDTH + 1) return;
      if (newPostion.y > GAME.HEIGHT - 1) return;
      _setPosition(newPostion);
    },
    [position]
  );

  const handlePosition = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "w") setPosition({ x: position.x, y: position.y - 1 });
      if (key === "s") setPosition({ x: position.x, y: position.y + 1 });
      if (key === "a") setPosition({ x: position.x - 1, y: position.y });
      if (key === "d") setPosition({ x: position.x + 1, y: position.y });

      if (key === "j") setRotation(rotation + 1);
      if (key === "k") setRotation(rotation - 1);
    },
    [position, rotation]
  );

  useEffect(() => {
    window.addEventListener("keydown", handlePosition);
    return () => window.removeEventListener("keydown", handlePosition);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setPosition({ x: position.x, y: position.y + 1 });
    }, 1000 * GAME.TICK);
    return () => clearInterval(timerId);
  }, [position]);

  return (
    <Wrapper>
      {
        // [
        <T position={position} rotation={rotation} />
        //   <I position={position} rotation={rotation} />,
        //   <L position={position} rotation={rotation} />,
        //   <J position={position} rotation={rotation} />,
        //   <S position={position} rotation={rotation} />,
        //   <Z position={position} rotation={rotation} />,
        //   <O position={position} rotation={rotation} />
        // ][Math.round((Math.random() * 10) % 7)]
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${GAME.WIDTH * BLOCK_SIZE}px;
  height: ${GAME.HEIGHT * BLOCK_SIZE}px;
  background-image: linear-gradient(#aaa 1px, transparent 0),
    linear-gradient(90deg, #aaa 1px, transparent 0);
  background-size: ${BLOCK_SIZE}px ${BLOCK_SIZE}px;
  outline: 1px solid #000;
  outline-offset: -1px;
`;

// const Body = styled.div`
//   display: flex;
//   flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
//   justify-content: center; /* 子要素をflexboxにより中央に配置する */
//   align-items: center; /* 子要素をflexboxにより中央に配置する */
//   width: 100vw;
//   height: 100vh;
// `;

export default App;
