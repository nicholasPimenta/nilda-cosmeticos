import styled from "styled-components";
import Footer from "./styles/Footer";
import Header from "./styles/Header";
import Main from "./styles/Main";
import Home from "./styles/Home";
import About from "./styles/About";
import Produtos from "./styles/Produtos";
import Final from "./styles/Final";
import Logo from "../public/Logo.png";
import SobreImg from "./assets/Sobre.png";
import Perfume from "./assets/Perfume.png";

export const Container = styled.section`
  background: var(--rosa);
  color: var(--marrom);
`;

export const FotoSobre = styled.img`
  max-width: 250px;
  border-radius: 16px;
  border: 2px solid var(--marrom);
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const FotoProdutos = styled.img`
  max-width: 250px;
  margin-top: 16px;
  border: 2px solid var(--marrom);
  border-radius: 16px;
`;

function App() {
  return (
    <Container>
      <Header>
        <a href="#Home">
          <img src={Logo} />
        </a>
        <nav className="cabecalho__navegacao">
          <a href="#Home" className="cabecalho__navegacao__link">
            Home
          </a>
          <a href="#Sobre" className="cabecalho__navegacao__link">
            Sobre
          </a>
          <a href="#Produtos" className="cabecalho__navegacao__link">
            Produtos
          </a>
          <a href="#Contato" className="cabecalho__navegacao__link">
            Contato
          </a>
        </nav>
      </Header>
      <Main>
        <Home id="Home">
          <div>
            <h3>Seja a versão mais incrível de você mesma.</h3>
            <p>
              Mergulhe em um universo de sensações e descubra uma nova forma de
              cuidar de si. Nossa seleção de cosméticos vai além de produtos, é
              uma experiência completa de beleza e bem-estar. Com texturas
              envolventes, fragrâncias deliciosas e resultados visíveis, nossos
              produtos vão te conquistar.
            </p>
            <button>
              <a href="#" target="_blank">
                <p>Compre agora</p>
              </a>
            </button>
          </div>
        </Home>
        <About id="Sobre">
          <div className="Sobre-texto">
            <h3>Sobre nós</h3>
            <h4>Quer uma rotina de beleza completa e personalizada?</h4>
            <p>
              Conte conosco para te ajudar a encontrar os produtos ideais para o
              seu tipo de pele e cabelo. Nossa loja oferece uma ampla variedade
              de marcas e produtos, desde os clássicos até as últimas novidades
              do mercado. Descubra as melhores opções para cuidar da sua beleza
              e renovar o seu visual. Aproveite nossas promoções exclusivas e
              monte o seu kit de beleza completo.
            </p>
          </div>
          <div>
            <FotoSobre src={SobreImg} />
          </div>
        </About>
        <Produtos id="Produtos">
          <h3>Nossos Produtos</h3>
          <p>Uma nova experiência para a sua beleza.</p>
          <div>
            <FotoProdutos src={Perfume} />
            <FotoProdutos src={Perfume} />
            <FotoProdutos src={Perfume} />
            <FotoProdutos src={Perfume} />
            <FotoProdutos src={Perfume} />
            <FotoProdutos src={Perfume} />
          </div>
        </Produtos>
        <Final id="Contato">
          <img src={Logo} />
          <p>Cuidando da sua beleza a mais de 30 anos</p>
          <button>
            <a href="#" target="_blank">
              <p>Entre em contato</p>
            </a>
          </button>
        </Final>
      </Main>
      <Footer className="rodape">
        <p>&copy; Nicholas Pimenta 2024</p>
      </Footer>
    </Container>
  );
}

export default App;
