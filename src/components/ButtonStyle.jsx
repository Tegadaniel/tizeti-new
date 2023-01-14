import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || "#1A73E8"};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  height: ${(props) =>
    props.size === "medium"
      ? "48px"
      : props.size === "small"
      ? "40px"
      : "56px"};
  /* for the text */
  color: ${(props) => props.textColor || "#ffffff"};
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
`;
