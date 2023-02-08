import { useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import {
  Container,
  Loader,
  LoaderContainer,
  StyledButton,
  StyledImg,
  StyledLi,
  StyledText,
  StyledTextContainer,
  StyledUl,
} from "./styles/styledComponents";

function App() {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=random&per_page=20&client_id=${ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <StyledButton onClick={() => setPage((prev) => prev + 1)}>
          Cargar nuevas fotos
        </StyledButton>
        {isLoading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <StyledUl>
            {images.map((photo) => {
              return (
                <StyledLi key={photo.id}>
                  <StyledImg
                    src={photo.urls.regular}
                    alt={photo.alt_description}
                  />
                  <StyledTextContainer>
                    <StyledText>{photo.description}</StyledText>
                  </StyledTextContainer>
                </StyledLi>
              );
            })}
          </StyledUl>
        )}
      </Container>
    </>
  );
}

export default App;
