import styled from "styled-components";

const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-bottom: 2px solid #ffffff;
  img {
    width: 50%;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .cabecalho__navegacao {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
  .cabecalho__navegacao__link {
    color: var(--marrom);
    text-decoration: none;
  }
  .cabecalho__navegacao__link:hover {
    color: var(--marrom-claro);
    transition: 0.4s;
  }
  /* Resolução para Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;

    img {
      width: 35%;
      margin-bottom: 0;
      display: flex;
    }
    .cabecalho__titulo {
      font-size: 28px;
    }
  }
  /* Resolução para PCs */
  @media (min-width: 992px) {
    img {
      width: 40%;
    }
    .cabecalho__navegacao__link {
      font-size: 20px;
    }
  }
`;

export default Header;