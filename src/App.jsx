import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/Roboto-Italic-VariableFont_wdth,wght.ttf') format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/Roboto-VariableFont_wdth,wght.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Alexandria';
    src: url('/Alexandria-VariableFont_wght.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('public/Inter-VariableFont_opsz,wght.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('public/Inter-Italic-VariableFont_opsz,wght.ttf') format('truetype');
    font-style: italic;
  }
`;





const Background = styled.div`

  `;



const Card = styled.div`
  height: 800px;
  width: 1220px;
  display: grid;
  background:rgb(247, 247, 247);
  justify-self: center;
  align-self: center;
  backdrop-filter: blur(10px); 
  border-radius: 2em;
  display: grid;
  position: relative;

`;



const Lander = styled.div`
  height: calc(100vh - 200px);
  width: 100vw;
  display: grid;
  background: #000000;
  justify-self: center;
  align-self: center;
  padding-top: 100px;
  border-radius: 0;
  display: grid;
  position: relative;

`;

const Avatar = styled.div`
  height: 300px;
  width: 300px;
  display: grid;
  background:rgb(0, 0, 0);
  background-image: url('/blinking2.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: center;
  align-self: center;
  border-radius: 100%;
  display: grid;
  position: relative;

`;

const Name = styled.div`
  height: 40px;
  width: 300px;
  display: grid;
  background:rgb(255, 227, 227);
  justify-self: center;
  align-self: center;
  border-radius: 0;
  display: grid;
  position: relative;

`;

const Email = styled.div`
  height: 40px;
  width: 300px;
  display: grid;
  background:rgb(255, 228, 228);
  justify-self: center;
  align-self: center;
  border-radius: 0;
  display: grid;
  position: relative;

`;


const Header = styled.div`
  height: 100px;
  width: 100vw;
  display: grid;
  background:#000000;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  position: sticky;
  top: 0; 
  left: calc(50vw - 650px);

  z-index: 100;

`;


const RowOne = styled.div`
  height: 400px;
  width: 100vw;
  display: grid;
  background:#000000;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  display: grid;
  position: relative;

`;

const RowTwo = styled.div`
  height: 400px;
  width: 100vw;
  display: grid;
  background: #ffffff;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  display: grid;
  position: relative;

`;


const RowThree = styled.div`
  height: 400px;
  width: 100vw;
  display: grid;
  background:rgb(240, 240, 240);
  justify-self: center;
  align-self: center;
  border-radius: 0;
  display: grid;
  position: relative;

`;


const Footer = styled.div`
  height: 200px;
  width: 100vw;
  display: grid;
  background:rgb(255, 255, 255);
  justify-self: center;
  align-self: center;
  border-radius: 0;


`;



const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100vw;
  height: calc(100vh - 200px);
  min-width: 100vw;
  object-fit: cover;
  pointer-events: none;
`;

const MyName = styled.div`
  height: calc(100vh - 400px);
  width: 900px;
  display: grid;
  background: none;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  border-radius: 0;
  display: grid;
  position: absolute;
  z-index: 120;
  top: 200px;
  right: 100px;
  font-size: 50px;
  color:rgb(182, 182, 182);
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  text-align: center;
  font-style: normal;

  

`;

const Noise = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  opacity: 0;
  background-image: url('/nnnoise.svg');
  background-repeat: repeat;
  background-size: 220px 220px;
  z-index: 10;
`;


function App() {
  return (
    <Background>
    <GlobalStyle />
    <Header></Header>
    <Lander>
    <BackgroundVideo 
        src="/zacheryus.mp4"
        autoPlay
        loop
        muted
        playsInline
        />

    </Lander>
        <MyName>
          ZACHERY CUNNINGHAM

        </MyName>

    <RowOne></RowOne>
    <RowTwo></RowTwo>
    <RowThree></RowThree>
    <Footer></Footer>
    </Background>
  );
}

export default App;