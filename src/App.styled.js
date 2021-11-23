import styled, {createGlobalStyle, } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 2100px;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding: 0;
    font-family: cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Comic Sans MS', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #120907;;
  };
  a, button {
    cursor: pointer;
  };
  li {
    list-style-type: none;
  }
`
export const AppWrapper = styled.div`
text-align: center;
font-size: calc(10px + 2vmin);
max-width: 100vw;
`

/* .color1 {color: #120907;}
.color2 {color: #3e220b;}
.color3 {color: #785627;}
.color4 {color: #b68f4a;}
.color5 {color: #f0d46c;}
.color6 {color: #58add4;} */