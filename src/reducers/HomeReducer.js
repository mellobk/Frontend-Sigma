import {
    CARGANDO, ERROR, DEPARTAMENTOS,SUCCESS,ORIGINAL_LIST,CITIES,MODAL_UP
} from '../types/HomeTypes'

const INITIAL_STATE = {
    departament_list: [],
    cyties_list: [],
    original_list: [],
    showModal:false,
    cargando: false,
    error: '',
    success:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case DEPARTAMENTOS:
            return {
                ...state,
                departament_list: action.payload,

            }

             
            case MODAL_UP:
                return {
                    ...state,
                    showModal: action.payload,
    
                }
        case CITIES:
            return {
                ...state,
                cyties_list: action.payload,

            }
            
            case ORIGINAL_LIST:
                return {
                    ...state,
                    original_list: action.payload,
    
                }

        case CARGANDO:
            return { ...state, cargando: true }

        case ERROR:
            return { ...state, error: action.payload, cargando: false }

            case SUCCESS:
                return { ...state, success: action.payload, cargando: false, error: '' }


       
        default: return state
    }

}