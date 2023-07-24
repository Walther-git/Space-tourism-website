import { styled } from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  background-image: url(${(props) => props.mobile});
  background-size: cover;
  z-index: -1;

  @media(width >=768px) {
    background-image: url(${(props) => props.tablet});
  }

  @media (width >=1440px) {
    background-image: url(${(props) => props.desktop});
  }
`