import styled from 'styled-components';


import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #4CAF50;
  }
`;



const StyledHeader = styled.header`
  height: 100px;
  width: 100vw;
  background: white;
  position: sticky;
  top: 0; 
  left: 0;
  z-index: 100;
  border-bottom: 4px solid #000;

`;


const StyledLander = styled.div`
  height: calc(100vh - 200px);
  width: 100vw;
  background: white;

`;


const StyledSection = styled.section`
  width: calc(100vw - 80px);
  max-width: 1090px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;

  align-items: center;
  justify-content: center;

  justify-self: center;
  align-self: center;
  
  margin-bottom: 120px;
  position: relative;

  row-gap: 0px;
  column-gap: 0px;
`;




const Container = styled.div`
  height: 440px;
  width: 300px;
  padding: 30px;



`;




const CallToAction = styled.div`
  min-height: 400px;
  width: 740px;
  max-width: calc(100vw - 200px);
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;

  position: relative;
  border: 2px solid #000;
  box-shadow: 0 4px 0px rgb(0, 0, 0);
  margin-bottom: 30px;

`;


const Article = styled.div`
  height: 360px;
  width: 300px;
  display: column;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
  border: 2px solid #000;
  box-shadow: 0 4px 0px rgb(0, 0, 0);


`;



const Button = styled.div`
  min-height: 40px;
  width: 200px;
  max-width: calc(100vw - 300px);
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  
  position: relative;
  border: 2px solid #000;
  box-shadow: 0px 4px 0px rgb(0, 0, 0);


`;


const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  position: relative;
  border: 2px solid #000;
  box-shadow: 0 4px 0px rgb(0, 0, 0);

  margin: 15px;

`;


const Footer = styled.div`
  height: 100px;
  width: 100vw;
  display: grid;
  background:white;
  justify-self: center;
  align-self: center;
  border-radius: 0;
  border-top: 4px solid #000;

`;






function App() {
  return (
    <>
      <GlobalStyle />

      <StyledLander></StyledLander>

      <StyledHeader></StyledHeader>


      <StyledSection></StyledSection>


      <StyledSection>

        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />

      </StyledSection>

      <StyledSection>
        <h2>PROJECTS</h2>
        

        <Container>
          <Article>




          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>
    
        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

      </StyledSection>

      <StyledSection>

        <h2>PAPERS</h2>
        
        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>

        <Container>
          <Article>
          </Article>
          <Button />
        </Container>
        
      </StyledSection>

      <StyledSection>

          <CallToAction></CallToAction>
          <Button style={{ width: '500px' }}/>

      </StyledSection>

      <Footer></Footer>
    </>
  );
}

export default App;