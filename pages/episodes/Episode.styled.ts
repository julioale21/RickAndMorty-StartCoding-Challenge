import styled from "styled-components";

export const EpisodesContainer = styled.div`
  background-image: url("/rick-and-morty-03.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  min-height: 100vh;
`;

export const InfoContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin: 0.1em;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
