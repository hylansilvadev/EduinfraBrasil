import * as S from './style'

export const HomeContainer: React.FC = () => {
  return (
    <S.Container>
      <S.LogoWrapper className="logo-wrapper">
        <img height="326px" src="src/assets/logo.png" alt="logo" />
      </S.LogoWrapper>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div style={{ paddingLeft: "78px", paddingBottom: "32px" }}>
            <S.Title className="title">
              Desafios <br />
              Educacionais
              <br />
              no Brasil:
            </S.Title>
          </div>
          <div style={{ paddingLeft: "78px" }}>
            <S.Subtitle className="subtitle">
              Em um país vasto como o Brasil, a educação é um pilar fundamental
              para o desenvolvimento social e econômico. Contudo, ao observarmos
              de perto as escolas, encontramos um cenário preocupante: a
              precariedade da infraestrutura escolar. Essa realidade impacta
              diretamente no processo de aprendizagem e no futuro de milhões de
              crianças e jovens.
            </S.Subtitle>
          </div>
        </div>
        <div>
          <img  src="./src/assets/criancas.png" alt="criancas" />
        </div>
      </div>
      <S.FooterSection className="footer-setion"/>
    </S.Container>
  );
};
