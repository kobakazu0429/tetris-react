import React from "react";
import styled from "styled-components";
import { BLOCK_SIZE } from "@/constants/size";

export const DummyBlock = () => <StyledBlock />;

const StyledBlock = styled.div`
  margin: 0;
  padding: 0;
  width: ${BLOCK_SIZE}px;
  height: ${BLOCK_SIZE}px;
  background-color: transparent;
`;
