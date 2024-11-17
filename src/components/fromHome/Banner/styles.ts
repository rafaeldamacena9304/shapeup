import styled from "styled-components";

interface BannerProps {
  fade: boolean;
  zoom: boolean;
}

export const Banner = styled.img<BannerProps>`
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
  width: ${(props) => (props.zoom ? "105%" : "95%")};
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.fade ? "1" : "0")};

  @media (max-width:768px){
    object-fit: cover;
  }
`;
