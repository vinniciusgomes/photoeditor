import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #151515;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: normal;
  color: #949495;
`;

export const User = styled.a`
  font-size: 1.1rem;
  font-weight: normal;
  color: #ffffff;
  text-decoration: underline;
  &:hover {
    color: #ffffff;
  }
`;
