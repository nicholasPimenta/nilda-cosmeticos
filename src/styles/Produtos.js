import styled from "styled-components";

const Produtos = styled.section`
  margin: 36px 12px;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
  }
  @media (min-width: 1024px) {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }
  }
  @media (min-width: 1440px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export default Produtos;