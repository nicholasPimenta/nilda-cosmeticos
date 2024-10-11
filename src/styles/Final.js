import styled from "styled-components";

const Final = styled.section`
  margin: 36px 12px;
  img {
    width: 60%;
  }
  button {
    background: var(--branco);
    border: 2px solid var(--rosa-escuro);
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
  @media (min-width: 768px) {
    img {
      width: 40%;
    }
  }
  @media (min-width: 1024px) {
    img {
      min-width: 45%;
    }
  }
  @media (min-width: 1440px) {
    p {
      font-size: 1.3rem;
    }
    button p {
      font-size: 1.4rem;
    }
  }
`;

export default Final;