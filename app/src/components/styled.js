import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid;
  height: auto;
  width: 300px;
  text-align: center;
  padding: 20px;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Stats = styled.h1`
  color: darkgreen;
  margin-bottom: 0;
`;
export const Comment = styled.p`
  color: gray;
  margin-top: 5px;
`;
export const ProgressBar = styled.progress`
  width: 100%;
  opacity: ${(props) => props.progresbar === false && 0};
`;
