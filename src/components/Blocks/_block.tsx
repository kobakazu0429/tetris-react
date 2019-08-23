import React from "react";
import styled from "styled-components";

const BLOCK_SIZE = 32;

interface Props {
  color: "Purple" | "Cyan" | "Yellow" | "Green" | "Red" | "Blue" | "Orange";
}

export const Block = ({ color }: Props) => <StyledBlock color={color} />;

const toColorCode = (color: Props["color"]) => {
  switch (color) {
    case "Cyan": // I
      return "#4CC7E0";
    case "Yellow": // O
      return "#FAFD12";
    case "Purple": // T
      return "#9500D5";
    case "Green": // S
      return "#45E122";
    case "Red": // Z
      return "#F10026";
    case "Blue": // J
      return "#3E2DFD";
    case "Orange": // L
      return "#FD730C";
    default:
      throw new Error(`${color} is undefined`);
  }
};

const StyledBlock = styled.div<Props>`
  margin: 0;
  padding: 0;
  width: ${BLOCK_SIZE}px;
  height: ${BLOCK_SIZE}px;
  background-color: ${(props: Props) => toColorCode(props.color)};
`;
