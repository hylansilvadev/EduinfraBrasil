import * as S from "./styles";

export const AboutContainer: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderSection className="header-section"></S.HeaderSection>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ marginLeft: "48px", marginTop: "48px" }}>
          <img src="./src/assets/colagem.svg" alt="escolas" />
        </div>
        <div style={{ paddingTop: "8rem" }}>
          <S.SectionTitle className="section-2-title">
            As Inúmeras Complexidades da Infraestrutura Escolar
          </S.SectionTitle>
          <S.SectionText className="section-2-text" style={{ paddingTop: "16px" }}>
            No cerne da educação brasileira, enfrentamos desafios significativos
            que clamam por nossa atenção e ação imediata. A precariedade da
            infraestrutura escolar é uma realidade que muitos estudantes e
            educadores enfrentam diariamente. Salas de aula deterioradas,
            sistemas elétricos obsoletos, falta de acesso a saneamento básico e
            escassez de recursos didáticos são apenas algumas das muitas pedras
            no caminho do aprendizado de qualidade
          </S.SectionText>
        </div>
      </div>
    </S.Container>
  );
};
