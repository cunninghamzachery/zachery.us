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
  min-height: 100px;
  width: 1020px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  background:grey;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  padding: 30px;

`;


const Article = styled.div`
  height: 360px;
  width: 300px;
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;

  position: relative;
  border: 2px solid #000;
  box-shadow: 0 4px 0px rgb(0, 0, 0);


`;

const Button = styled.div`
  height: 40px;
  min-width: 200px;
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  border: 2px solid #000;
  box-shadow: 0 4px 0px rgb(0, 0, 0);


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

      
      <Section> {/* Lander */}
      
      </Section> 

      
      <Section> {/* Icons */}
      
      </Section> 

      
      <Section> {/* Projects */}
        
        <div>
        <Article>
  
        </Article>
        <Button></Button>
        </div>
        <div>
        <Article>

        </Article>
        <Button></Button>
        </div>

        <div>
        <Article>

        </Article>
        <Button></Button>
        </div>

        <div>
        <Article>

        </Article>
        <Button></Button>
        </div>

        <div>
        <Article>

        </Article>
        <Button></Button>
        </div>

        <div>
        <Article>

        </Article>
        <Button></Button>
        </div>

      </Section> 

      
      <Section> {/* Papers */}
      
      </Section>

      
      <Section> {/* Call to action */}
      
      </Section> 

      <Footer></Footer>
    </>
  );
}

export default App;