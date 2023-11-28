import styled from "styled-components";

export const Container = styled.section`
`;

export const TitleWrapper = styled.div`
 margin-top: 128px;
  display: flex;
  width: 99vw;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h1`
color: #1c79bf;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 41.667% */
`;

export const ItemWrapper = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f4;
  box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
`;

export const ItemTitle = styled.p`
 color: #3788c6;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 117.647% */
`;
