import React from "react";
import styled from "styled-components";

import { Block } from "./_block";
import { DummyBlock } from "./_dummy-block";
import { BLOCK_SIZE } from "@/constants/size";

const BLOCKS_PATTERN = [[0, 1, 0], [1, 1, 1]];

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
      {BLOCKS_PATTERN.map(BLOCK_PATTERN => (
        <Line>
          {BLOCK_PATTERN.map(v =>
            v ? <Block color="Yellow" /> : <DummyBlock />
          )}
        </Line>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => BLOCK_SIZE * props.position.y}px;
  left: ${props => BLOCK_SIZE * props.position.x}px;
  transform: rotate(${props => 90 * props.rotation}deg);
  transform-origin: ${BLOCK_SIZE + BLOCK_SIZE / 2}px ${(BLOCK_SIZE * 3) / 2}px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
`;
