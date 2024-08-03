import { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.bg};
    padding-bottom: 80px;

  }

  h1{
    color: white;
    margin-top: 40px;
    align-self: center;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }

  ::placeholder{
    color: aliceblue;
  }
`
