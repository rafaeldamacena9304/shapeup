import styled from "styled-components";

export const Container = styled.div<{spacement?: string}>`
  padding: ${props => props.spacement ? props.spacement : '18px 0'};
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const Text = styled.span<{ textSize?: string }>`
  display: inline-block;
  background-image: var(--redGradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 12px;
  font-weight: bold;
  font-size: ${(props) => (props.textSize ? props.textSize : "16")}px;
`;
export const Trash = styled.img<{ imageSize?: string }>`
  height: ${(props) => (props.imageSize ? props.imageSize : "24")}px;
`;
