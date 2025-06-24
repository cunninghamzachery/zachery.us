import styled from 'styled-components';






const StyledHeader = styled.header`
  height: 100px;
  width: 100vw;
  background: red;
  position: sticky;
  top: 0; 
  left: 0;
  z-index: 100;
`;


const StyledSection = styled.section`
  width: calc(100vw - 80px);
  max-width: 1090px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background:orange;

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
  background: white;
  padding: 30px;



`;




const Title = styled.div`
  min-height: 180px;
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
  box-shadow: 0 4px 0px rgb(0, 0, 0);


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
  background:purple;
  justify-self: center;
  align-self: center;
  border-radius: 0;


`;



function App() {
  return (
    <>
      <StyledHeader></StyledHeader>


      <StyledSection></StyledSection>


      <StyledSection>

        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />

      </StyledSection>

      <StyledSection>

        <Title></Title>

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

        <Title></Title>
        
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
        <div>
          <Title style={{ height: '400px' }}></Title>
          <Button style={{ width: '500px' }}/>
        </div>
      </StyledSection>

      <Footer></Footer>
    </>
  );
}

export default App;