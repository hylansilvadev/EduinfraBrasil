import * as S from './styles'

export const ListContainer: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Quais são problemas mais recorrentes?</S.Title>
      </S.TitleWrapper>
      <div
        style={{ width: "99.2vw", display: "flex", justifyContent: "center" }}
      >
        <ul style={{ display: "flex", marginTop: "128px" }}>
          <li style={{ padding: " 0 30px" }}>
            <S.ItemWrapper>
              <img src="./src/assets/icons/basic/bulb.png" alt="" />
              <S.ItemTitle>Energia</S.ItemTitle>
            </S.ItemWrapper>
          </li>
          <li style={{ padding: " 0 30px" }}>
            <S.ItemWrapper>
              <img src="./src/assets/icons/basic/home.png" alt="" />
              <S.ItemTitle>Infraestrutura</S.ItemTitle>
            </S.ItemWrapper>
          </li>
          <li style={{ padding: " 0 30px" }}>
            <S.ItemWrapper>
              <img src="./src/assets/icons/basic/droplet.png" alt="" />
              <S.ItemTitle>Água</S.ItemTitle>
            </S.ItemWrapper>
          </li>
          <li style={{ padding: " 0 30px" }}>
            <S.ItemWrapper>
              <img src="src/assets/icons/basic/wheel.png" alt="" />
              <S.ItemTitle>Esgoto</S.ItemTitle>
            </S.ItemWrapper>
          </li>
          <li style={{ padding: " 0 30px" }}>
            <S.ItemWrapper>
              <img src="./src/assets/icons/basic/drink.png" alt="" />
              <S.ItemTitle>Lixo</S.ItemTitle>
            </S.ItemWrapper>
          </li>
        </ul>
      </div>
    </S.Container>
  );
};
