import React from "react";
import styled from "styled-components";

import { Block } from "./_block";
import { DummyBlock } from "./_dummy-block";

const T_BLOCKS = [[0, 1, 0], [1, 1, 1]];

interface Position {
  x: number;
  y: number;
}

interface Props {
  position: Position;
  rotation: number;
}

export const T = ({ position, rotation }: Props) => {
  return (
    <Wrapper position={position} rotation={rotation}>
      <Line>
        {T_BLOCKS[0].map(v => (v ? <Block color="Yellow" /> : <DummyBlock />))}
      </Line>
      <Line>
        {T_BLOCKS[1].map(v => (v ? <Block color="Yellow" /> : <DummyBlock />))}
      </Line>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => 32 * props.position.y}px;
  left: ${props => 32 * props.position.x}px;
  transform: rotate(${props => 90 * props.rotation}deg);
  transform-origin: left top;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
`;
