import styled from "styled-components";

interface AppButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const AppButton = styled.button<AppButtonProps>`
  background-color: ${(props) => props.theme.button.background};
  border: 1px solid ${(props) => props.theme.button.borderColor};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.button.color};
  padding: 1rem;

  &:hover {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
  }

  &:disabled {
    background-color: #aaa;
    border: 1px solid #aaa;
    color: #fff;
  }
`;
