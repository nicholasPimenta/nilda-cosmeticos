import styled from "styled-components";

const About = styled.section`
  margin: 36px 6px;
  padding: 12px 16px;
  border-radius: 16px;
  background: var(--rosa-escuro);
  border: 1px solid var(--marrom);
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin: 36px 16px;
    min-height: 60vh;
    div {
      padding: 24px;
    }
  }
  @media (min-width: 1440px) {
    .Sobre-texto {
      margin: 48px;
    }
    h3 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export default About