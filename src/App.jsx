import styled from 'styled-components';
import { useEffect, useState } from 'react';


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
  background: #ffffff;
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
  background:rgb(255, 255, 255);
  justify-self: center;
  align-self: center;
  border-radius: 0;
  position: sticky;
  top: 0; 
  left: calc(50vw - 650px);

  z-index: 10;

`;


const RowOne = styled.div`
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

const Video = styled.div`
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
  width: auto;
  height: 80vh;
  min-width: 100vw;
  object-fit: contain; /* Keeps aspect ratio, scales to fit */
  pointer-events: none;
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
    <Lander>
    <BackgroundVideo 
        src="/zachery.mp4"
        autoPlay
        loop
        muted
        playsInline
        />

    </Lander>
    <Header></Header>
    <RowOne></RowOne>
    <RowTwo></RowTwo>
    <RowThree></RowThree>
    <Footer></Footer>
    </Background>
  );
}

export default App;