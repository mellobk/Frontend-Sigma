import axios from "axios";
import {
  CARGANDO,
  //ERROR,
  DEPARTAMENTOS,
  ORIGINAL_LIST,
  CITIES,
  SUCCESS,
  MODAL_UP
} from "../types/HomeTypes";

import URL from '../../src/General/url'

//acciones para tareas

export const consultar_departamentos = () => async (dispatch) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    const respuesta = await axios.get(
      "https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json",
      {
        headers: headers,
      }
    );
    const objectJson = respuesta.data;
    let newObjectDepartaments = [];

    let indece = 0;
    for (var key in objectJson) {
      newObjectDepartaments[indece] = { name: key };
      indece = indece + 1;
    }

    if (objectJson) {
      dispatch({
        type: DEPARTAMENTOS,
        payload: newObjectDepartaments,
      });

      dispatch({
        type: ORIGINAL_LIST,
        payload: objectJson,
      });
    }
  } catch (error) {}
};

export const consultar_ciudades = (data) => async (dispatch, getState) => {

  const { original_list } = getState().HomeReducer;
  let cities=[];
  Object.entries(original_list).forEach(([key, value]) => {
    if (data === key) {
      return (cities = value);
    }
  });

  try {
      if(cities){
        dispatch({
            type: CITIES,
            payload: cities,
          });
      }else{
        dispatch({
            type: CITIES,
            payload: [],
          });
      }

  } catch (error) {}
};



export const send_information = (data) => async (dispatch) => {
    try {
    
        dispatch({

            type: CARGANDO
            
        
        })

  
        let json = JSON.stringify(data)
        let params = 'json='+json
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        const respuesta = await axios.post(URL+'createContac', params,{
            headers: headers
        })
    


        if(respuesta.data.status==="Success"){

            dispatch({
        
                type: SUCCESS,
                payload: respuesta.data.message
                
            
            })

            dispatch({
        
                type: MODAL_UP,
                payload: true
                
            
            })

/*             dispatch({
        
                type: RESEARPRESTAMO,
                payload: false
                
            
            }) */

        }
    } catch (error) {}
  };

  export const modal_change = (data) => async (dispatch) => {
  
    
        dispatch({

        
            type: MODAL_UP,
            payload: data
        
        })

  };