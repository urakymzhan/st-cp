import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Icon({ children }) {
  return <IconWrapper>{children}</IconWrapper>;
}

export default Icon;
