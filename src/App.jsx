import styled from 'styled-components';














const Header = styled.div`
  height: 100px;
  width: 100vw;
  display: grid;
  background: red;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  position: sticky;
  top: 0; 
  left: calc(50vw - 650px);

  z-index: 100;

`;



const Section = styled.div`
  height: 100px;
  width: 100vw;
  display: grid;
  background:grey;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  margin-top: 10px;
  margin-bottom: 10px;


`;





const Footer = styled.div`
  height: 100px;
  width: 100vw;
  display: grid;
  background:purple;
  justify-self: center;
  align-self: center;
  border-radius: 0;


`;




function App() {
  return (
    <>
      <Header></Header>

      <Section></Section> {/* Lander */}
      <Section></Section> {/* Icons */}
      <Section></Section> {/* Projects */}
      <Section></Section> {/* Papers */}
      <Section></Section> {/* Call to action */}

      <Footer></Footer>
    </>
  );
}

export default App;