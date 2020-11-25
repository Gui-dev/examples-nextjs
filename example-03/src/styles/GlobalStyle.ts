import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: Roboto, sans-serif;
  }
` 

export const theme = {
  colors: {
    primary: '#0078F3'
  }
}