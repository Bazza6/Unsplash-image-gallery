import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export const StyledUl = styled.ul`
  padding: 13px;
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 93vh;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  overflow: hidden;
`;

export const StyledLi = styled.li`
  position: relative;
  margin: 12px;
  flex-grow: 1;
  justify-self: flex-start;
  width: 236px;
  box-shadow: 5px 5px 5px transparent;
  transition: all 0.3s;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    z-index: 999;
    filter: blur(0px);
    opacity: 1;
    box-shadow: 0 10px 16px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.02);
    transition: all 0.3s;
  }
`;

export const StyledImg = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  width: 757px;
  height: 54px;
  border-radius: 6px;
  margin-left: 24px;
  margin-top: 22px;
  background-color: white;
  font-size: 20px;
  &:active {
  transform: translateY(4px);
}
  &:hover {
      color: white;
      background-color: black;
  }
`;

export const StyledTextContainer = styled.div`
  max-height: 40px;
  max-width: 180px;
  position: absolute;
  color: white;
  bottom: 1rem;
  left: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledText = styled.span`
  text-shadow: 1px 1px #292929;
  opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1.5s;
  @keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

export const LoaderContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.span`
  width: 148px;
  height: 148px;
  border: 10px dotted black;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  opacity: 20%;
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`