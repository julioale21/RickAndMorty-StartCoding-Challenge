import styled from "styled-components";

export const EpisodeCharacter = styled.div`
  flex-grow: 1;
`;

export const EpisodeCharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

export const EpisodeCharacterImage = styled.img`
  max-width: 150px;
`;

export const EpisodesContainer = styled.div`
  background-image: url("/rick-and-morty-03.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export const EpisodeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 80%;
  margin: 0 auto;
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
