import { useAppSelector } from '../../../store/hooks'
import { Chart } from '../../Chart'
import * as S from './styles'

export const ChartContainer: React.FC = () => {

    const rede_publica = useAppSelector(state => state.apiData.IN_ENERGIA_REDE_PUBLICA)
    const gerador = useAppSelector(state => state.apiData.IN_ENERGIA_GERADOR)
    const inexistente = useAppSelector(state => state.apiData.IN_ENERGIA_INEXISTENTE)

    const patio = useAppSelector(state => state.apiData.IN_PATIO_COBERTO)
    const quadra = useAppSelector(state => state.apiData.IN_QUADRA_ESPORTES)
    const laboratio = useAppSelector(state => state.apiData.IN_LABORATORIO_CIENCIAS)

    const potavel = useAppSelector(state => state.apiData.IN_AGUA_POTAVEL)
    const publica = useAppSelector(state => state.apiData.IN_AGUA_REDE_PUBLICA)
    const artesiano = useAppSelector(state => state.apiData.IN_AGUA_POCO_ARTESIANO)

    const septica = useAppSelector(state => state.apiData.IN_ESGOTO_FOSSA_SEPTICA)
    const redePublica = useAppSelector(state => state.apiData.IN_ESGOTO_REDE_PUBLICA)
    const esgotoInexistente = useAppSelector(state => state.apiData.IN_ESGOTO_INEXISTENTE)

    const lixoColeta = useAppSelector(state => state.apiData.IN_LIXO_SERVICO_COLETA)
    const lixoQueima = useAppSelector(state => state.apiData.IN_LIXO_QUEIMA)
    const lixoEnterra = useAppSelector(state => state.apiData.IN_LIXO_ENTERRA)
    return (
        <S.Container>
            <S.WrapperChart>
                <S.SubWrapperChart>
                    <S.chartContainer>
                        <Chart
                            title='Energia'
                            label1='Rede Pública'
                            label2='Gerador'
                            label3='Energia Inexistente'
                            data1={rede_publica}
                            data2={gerador}
                            data3={inexistente}
                        />
                    </S.chartContainer>
                    <S.chartContainer>
                        <Chart title='Infraestrutura' 
                        label1='Patio Coberto'
                        label2='Quadra de Esportes'
                        label3='Laboratõrio de Ciências'
                        data1={patio}
                        data2={quadra}
                        data3={laboratio}/>
                    </S.chartContainer>
                    <S.chartContainer>
                        <Chart title='Agua' 
                        label1='Água Potável'
                        label2='Rede Pública'
                        label3='Poço Artesiano'
                        data1={potavel}
                        data2={publica}
                        data3={artesiano}/>
                    </S.chartContainer>
                </S.SubWrapperChart>
                <S.SubWrapperChart>
                    <S.chartContainer>
                        <Chart title='Esgoto' 
                        label1='Fossa Septica'
                        label2='Rede Pública'
                        label3='Esgoto Inexistente'
                        data1={septica}
                        data2={redePublica}
                        data3={esgotoInexistente}/>
                    </S.chartContainer>
                    <S.chartContainer>
                        <Chart title='Lixo' 
                        label1='Serviço de Coleta'
                        label2='Queima o lixo'
                        label3='Enterra o lixo'
                        data1={lixoColeta}
                        data2={lixoQueima}
                        data3={lixoEnterra}/>
                    </S.chartContainer>
                </S.SubWrapperChart>
            </S.WrapperChart>
        </S.Container>
    )
}