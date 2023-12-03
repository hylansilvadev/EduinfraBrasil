import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../utils/interfaces/data";

const initialState: IData = {
    NO_UF: '',
    SG_UF: '',
    IN_AGUA_POTAVEL: 0,
    IN_AGUA_REDE_PUBLICA: 0,
    IN_AGUA_POCO_ARTESIANO: 0,
    IN_ENERGIA_REDE_PUBLICA: 0,
    IN_ENERGIA_GERADOR: 0,
    IN_ENERGIA_INEXISTENTE: 0,
    IN_ESGOTO_REDE_PUBLICA: 0,
    IN_ESGOTO_FOSSA_SEPTICA: 0,
    IN_ESGOTO_INEXISTENTE: 0,
    IN_LIXO_SERVICO_COLETA: 0,
    IN_LIXO_QUEIMA: 0,
    IN_LIXO_ENTERRA: 0,
    IN_PATIO_COBERTO: 0,
    IN_QUADRA_ESPORTES: 0,
    IN_LABORATORIO_CIENCIAS: 0
}


export const dataSlice = createSlice({
    name: "apiData",
    initialState,
    reducers: {
        set_NO_UF: (state, action: PayloadAction<string>) => {
            state.NO_UF = action.payload
        },
        set_SG_UF: (state, action: PayloadAction<string>) => {
            state.SG_UF = action.payload
        },
        set_IN_AGUA_POTAVEL: (state, action: PayloadAction<number>) => {
            state.IN_AGUA_POTAVEL = action.payload
        },
        set_IN_AGUA_REDE_PUBLICA: (state, action: PayloadAction<number>) => {
            state.IN_AGUA_REDE_PUBLICA = action.payload
        },
        set_IN_AGUA_POCO_ARTESIANO: (state, action: PayloadAction<number>) => {
            state.IN_AGUA_POCO_ARTESIANO = action.payload
        },
        set_IN_ENERGIA_REDE_PUBLICA: (state, action: PayloadAction<number>) => {
            state.IN_ENERGIA_REDE_PUBLICA = action.payload
        },
        set_IN_ENERGIA_GERADOR: (state, action: PayloadAction<number>) => {
            state.IN_ENERGIA_GERADOR = action.payload
        },
        set_IN_ENERGIA_INEXISTENTE: (state, action: PayloadAction<number>) => {
            state.IN_ENERGIA_INEXISTENTE = action.payload
        },
        set_IN_ESGOTO_REDE_PUBLICA: (state, action: PayloadAction<number>) => {
            state.IN_ESGOTO_REDE_PUBLICA = action.payload
        },
        set_IN_ESGOTO_FOSSA_SEPTICA: (state, action: PayloadAction<number>) => {
            state.IN_ESGOTO_FOSSA_SEPTICA = action.payload
        },
        set_IN_ESGOTO_INEXISTENTE: (state, action: PayloadAction<number>) => {
            state.IN_ESGOTO_INEXISTENTE = action.payload
        },
        set_IN_LIXO_SERVICO_COLETA: (state, action: PayloadAction<number>) => {
            state.IN_LIXO_SERVICO_COLETA = action.payload
        },
        set_IN_LIXO_QUEIMA: (state, action: PayloadAction<number>) => {
            state.IN_LIXO_QUEIMA = action.payload
        },
        set_IN_LIXO_ENTERRA: (state, action: PayloadAction<number>) => {
            state.IN_LIXO_ENTERRA = action.payload
        },
        set_IN_PATIO_COBERTO: (state, action: PayloadAction<number>) => {
            state.IN_PATIO_COBERTO = action.payload
        },
        set_IN_QUADRA_ESPORTES: (state, action: PayloadAction<number>) => {
            state.IN_QUADRA_ESPORTES = action.payload
        },
        set_IN_LABORATORIO_CIENCIAS: (state, action: PayloadAction<number>) => {
            state.IN_LABORATORIO_CIENCIAS = action.payload
        }

    }
})

export const {
    set_NO_UF,
    set_SG_UF,
    set_IN_AGUA_POTAVEL,
    set_IN_AGUA_POCO_ARTESIANO,
    set_IN_AGUA_REDE_PUBLICA,
    set_IN_ENERGIA_GERADOR,
    set_IN_ENERGIA_INEXISTENTE,
    set_IN_ENERGIA_REDE_PUBLICA,
    set_IN_ESGOTO_REDE_PUBLICA,
    set_IN_ESGOTO_FOSSA_SEPTICA,
    set_IN_ESGOTO_INEXISTENTE,
    set_IN_LIXO_SERVICO_COLETA,
    set_IN_LIXO_QUEIMA,
    set_IN_LIXO_ENTERRA,
    set_IN_PATIO_COBERTO,
    set_IN_QUADRA_ESPORTES,
    set_IN_LABORATORIO_CIENCIAS
} = dataSlice.actions

export default dataSlice.reducer