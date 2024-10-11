import styled from "styled-components";
import homeImage from '../assets/Home.png';

const Home = styled.section`
  background: url(${homeImage});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  div {
    background: var(--branco-opacity);
    padding: 32px;
    border-radius: 32px;
    border: 2px solid var(--branco);
  }
  button {
    background: var(--branco);
    border: 2px solid var(--rosa);
    border-radius: 20px;
    padding: 4px 16px;
    color: var(--marrom);
    cursor: pointer;
  }
  a {
    color: var(--marrom);
    text-decoration: none;
  }
  button p {
    font-size: 1.2rem;
  }
  button p:hover {
    color: var(--marrom-claro);
    transition: .4s;
  }
  @media (min-width: 1024px) {
    div {
      margin: 48px;
    }
  }
  @media (min-width: 1440px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
    }
    button p {
      font-size: 1.4rem;
    }
  }
`;

export default Home;