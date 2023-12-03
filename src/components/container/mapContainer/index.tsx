import { useEffect, useState } from "react";
import MapBrazil from "../../Map";
import * as S from "./styles";
import { useGetStateByCodeQuery } from "../../../service/api";
import { useAppDispatch } from "../../../store/hooks";
import {
  set_IN_AGUA_POCO_ARTESIANO,
  set_IN_AGUA_POTAVEL,
  set_IN_AGUA_REDE_PUBLICA,
  set_IN_ENERGIA_GERADOR,
  set_IN_ENERGIA_INEXISTENTE,
  set_IN_ENERGIA_REDE_PUBLICA,
  set_IN_ESGOTO_FOSSA_SEPTICA,
  set_IN_ESGOTO_INEXISTENTE,
  set_IN_ESGOTO_REDE_PUBLICA,
  set_IN_LABORATORIO_CIENCIAS,
  set_IN_LIXO_ENTERRA,
  set_IN_LIXO_QUEIMA,
  set_IN_LIXO_SERVICO_COLETA,
  set_IN_PATIO_COBERTO,
  set_IN_QUADRA_ESPORTES,
  set_NO_UF,
  set_SG_UF
} from "../../../store/reducers/dataReducer";

export const MapContainer: React.FC = () => {

  const dispatch = useAppDispatch()
  const [estado, setEstado] = useState<string>('')
  const [uf, setUf] = useState<string>('')
  const { data, error } = useGetStateByCodeQuery(uf)

  useEffect(() => {
    if (data && !error) {
      dispatch(set_NO_UF(estado));
      data.SG_UF && dispatch(set_SG_UF(data.SG_UF));
      data.IN_AGUA_POCO_ARTESIANO && dispatch(set_IN_AGUA_POCO_ARTESIANO(data.IN_AGUA_POCO_ARTESIANO));
      data.IN_AGUA_POTAVEL && dispatch(set_IN_AGUA_POTAVEL(data.IN_AGUA_POTAVEL));
      data.IN_AGUA_REDE_PUBLICA && dispatch(set_IN_AGUA_REDE_PUBLICA(data.IN_AGUA_REDE_PUBLICA));
      data.IN_ENERGIA_REDE_PUBLICA && dispatch(set_IN_ENERGIA_REDE_PUBLICA(data.IN_ENERGIA_REDE_PUBLICA));
      data.IN_ENERGIA_GERADOR && dispatch(set_IN_ENERGIA_GERADOR(data.IN_ENERGIA_GERADOR));
      data.IN_ENERGIA_INEXISTENTE && dispatch(set_IN_ENERGIA_INEXISTENTE(data.IN_ENERGIA_INEXISTENTE));
      data.IN_ESGOTO_REDE_PUBLICA && dispatch(set_IN_ESGOTO_REDE_PUBLICA(data.IN_ESGOTO_REDE_PUBLICA));
      data.IN_ESGOTO_FOSSA_SEPTICA && dispatch(set_IN_ESGOTO_FOSSA_SEPTICA(data.IN_ESGOTO_FOSSA_SEPTICA));
      data.IN_ESGOTO_INEXISTENTE && dispatch(set_IN_ESGOTO_INEXISTENTE(data.IN_ESGOTO_INEXISTENTE));
      data.IN_LIXO_SERVICO_COLETA && dispatch(set_IN_LIXO_SERVICO_COLETA(data.IN_LIXO_SERVICO_COLETA));
      data.IN_LIXO_QUEIMA && dispatch(set_IN_LIXO_QUEIMA(data.IN_LIXO_QUEIMA));
      data.IN_LIXO_ENTERRA && dispatch(set_IN_LIXO_ENTERRA(data.IN_LIXO_ENTERRA));
      data.IN_PATIO_COBERTO && dispatch(set_IN_PATIO_COBERTO(data.IN_PATIO_COBERTO));
      data.IN_QUADRA_ESPORTES && dispatch(set_IN_QUADRA_ESPORTES(data.IN_QUADRA_ESPORTES));
      data.IN_LABORATORIO_CIENCIAS && dispatch(set_IN_LABORATORIO_CIENCIAS(data.IN_LABORATORIO_CIENCIAS));

    }
  }, [data, error])

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Selecione a região:</S.Title>
      </S.TitleWrapper>
      <S.MapWrapper>
        <MapBrazil onNameDistrict={setEstado} onChange={setUf} />
      </S.MapWrapper>
    </S.Container>
  );
}
