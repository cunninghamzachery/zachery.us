import styled from 'styled-components';



const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/white.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
`;

const Card = styled.div`
  height: 500px;
  width: 800px;
  display: grid;
  background: linear-gradient(45deg,rgba(195, 228, 237, 0.15), rgba(255, 255, 255, 0.15));
  justify-self: center;
  align-self: center;
  backdrop-filter: blur(10px); 
  box-shadow: 0 0 60px rgba(0,0,0,.12), inset 0 0 20px rgba(255, 255, 255, 1); 
  border-radius: 2em;
`;


const Noise = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  opacity: 0.2;
  background-image: url('/nnnoise.svg');
  background-repeat: repeat;
  background-size: 220px 220px;
  z-index: 10;
`;


function App() {
  return (
    <Background>
      <Card></Card>

    </Background>
  );
}

export default App;