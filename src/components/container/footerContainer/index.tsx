import * as S from "./styles";

export const FooterContainer: React.FC = () => {
  return (
    <S.Container style={{ width: "99.2vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        <div>
          <img src="../../../../public/logo.png" alt="" sizes="" />
        </div>
        <div>
          <div style={{ width: "618px" }}>
            <S.FooterText className="footer-text">
              O DashBoard, uma inovadora plataforma de gestão de projetos, foi
              concebido por um grupo de estudantes da Universidade Católica de
              Pernambuco (UNICAP) com o propósito exclusivo de aprimorar suas
              habilidades e conhecimentos acadêmicos. Desenvolvido como parte de
              um projeto de estudos, o DashBoard reflete a dedicação e a busca
              por soluções práticas e eficientes por parte desses alunos
              universitários. Este projeto exemplifica não apenas o talento dos
              estudantes da UNICAP, mas também a capacidade de inovação que
              surge quando a paixão pelo aprendizado se encontra com desafios do
              mundo real.
            </S.FooterText>
          </div>
          <div>
            <ul style={{ display: "flex" }}>
              <S.PX8 className="px-8">
                <a href="#">
                  <img src="../../../../public/icons/social/Facebook.png" alt="" />
                </a>
              </S.PX8>
              <S.PX8 className="px-8">
                <a href="#">
                  <img src="../../../../public/icons/social/Twitter.png" alt="" />
                </a>
              </S.PX8>
              <S.PX8 className="px-8">
                <a href="#">
                  <img src="../../../../public/icons/social/Instagram.png" alt="" />
                </a>
              </S.PX8>
              <S.PX8 className="px-8">
                <a href="#">
                  <img src="../../../../public/icons/social/LinkedIn.png" alt="" />
                </a>
              </S.PX8>
              <S.PX8 className="px-8">
                <a href="#">
                  <img src="../../../../public/icons/social/YouTube.png" alt="" />
                </a>
              </S.PX8>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <S.FooterText className="p-final-footer">Copyright © 2023 </S.FooterText>
        </div>
        <div>
          <S.FooterText className="p-final-footer">
            Todos os direitos reservados | Termos e Condições | política de
            Privacidade
          </S.FooterText>
        </div>
      </div>
    </S.Container>
  );
};
