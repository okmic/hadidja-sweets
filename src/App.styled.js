import styled, {createGlobalStyle, } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 2100px;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding: 0;
    font-family: "Times New Roman", Times, serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Comic Sans MS', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, cursive;
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #120907;
    scrollbar-color: #458245 #714826; 
  };
  a, button {
    cursor: pointer;
    font-style: cursive;
    text-decoration: none;
  };
  li {
    list-style-type: none;
  }
  /* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 15px; /* ширина для вертикального скролла */
    height: 5px; /* высота для горизонтального скролла */
    background-color: #143861;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #843465;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #253861;
}

/* Стрелки */

::-webkit-scrollbar-button:vertical:start:decrement {
    background: linear-gradient(120deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(240deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(0deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}

::-webkit-scrollbar-button:vertical:end:increment {
    background:
        linear-gradient(300deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(60deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(180deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}

::-webkit-scrollbar-button:horizontal:start:decrement {
    background:
        linear-gradient(30deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(150deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(270deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}

::-webkit-scrollbar-button:horizontal:end:increment {
    background:
        linear-gradient(210deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(330deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(90deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}
`
export const AppWrapper = styled.div`
text-align: center;
font-size: calc(10px + 2vmin);
max-width: 100vw;
`
