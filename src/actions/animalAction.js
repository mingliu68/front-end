import axios from 'axios';

export const ADD_ANIMAL_START = 'ADD_ANIMAL_START';
export const ADD_ANIMAL_SUCCESS = 'ADD_ANIMAL_SUCCESS';
export const ADD_ANIMAL_ERROR = 'ADD_ANIMAL_ERROR'

export const addAnimal  = animal => dispatch => {
    dispatch ({type: ADD_ANIMAL_START});
    console.log(animal)
    return axios
        .post('http://localhost:8000/api/animals', animal)
        .then(res => {
            dispatch ({type: ADD_ANIMAL_SUCCESS, payload: res.data})
            return res.data
        })
        .catch(err => {
            dispatch({type: ADD_ANIMAL_ERROR, payload: err.response})
        })
}

export const FETCH_OPTIONS_START = 'FETCH_OPTIONS_START';
export const FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS';
export const FETCH_OPTIONS_ERROR = 'FETCH_OPTIONS_ERROR';
export const UPDATE_BREEDS = 'UPDATE_BREEDS';
export const UPDATE_SIZE = 'UPDATE_SIZE';
export const UPDATE_SUBSCRIPTIONS = 'UPDATE_SUBSCRIPTIONS';
export const UPDATE_COAT_LENGTH = 'UPDATE_COAT_LENGTH';
export const UPDATE_AGES = 'UPDATE_AGES';
export const UPDATE_APPLICATION_STATUS = 'UPDATE_APPLICATION_STATUS';
export const UPDATE_SPECIES = 'UPDATE_SPECIES';
export const UPDATE_ANIMAL_STATUS = 'UPDATE_ANIMAL_STATUS';
export const UPDATE_ROLES = 'UPDATE_ROLES';
export const UPDATE_LOCATIONS = 'UPDATE_LOCATIONS';
export const UPDATE_STATES = 'UPDATE_STATES'


export const fetchOptions  = (shelterId) => dispatch => {
    dispatch ({type: FETCH_OPTIONS_START});
    // const headers = {Authorization: localStorage.getItem('token')}
    return axios
    .get(`http://localhost:8000/api/internal/paws/options/${shelterId}`)
    .then(res => {
        console.log(res)
        dispatch ({type: UPDATE_BREEDS, payload: res.data.breeds})
        dispatch ({type: UPDATE_SIZE, payload: res.data.size})
        dispatch ({type: UPDATE_SUBSCRIPTIONS, payload: res.data.subscriptions})
        dispatch ({type: UPDATE_COAT_LENGTH, payload: res.data.coat_length})
        dispatch ({type: UPDATE_AGES, payload: res.data.ages})
        dispatch ({type: UPDATE_APPLICATION_STATUS, payload: res.data.application_status})
        dispatch ({type: UPDATE_SPECIES, payload: res.data.species})
        dispatch ({type: UPDATE_ANIMAL_STATUS, payload: res.data.animal_status})
        dispatch ({type: UPDATE_ROLES, payload: res.data.roles})
        dispatch ({type: UPDATE_LOCATIONS, payload: res.data.locations})
        dispatch ({type: UPDATE_STATES, payload: res.data.states})
        dispatch ({type: FETCH_OPTIONS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_OPTIONS_ERROR, payload: err.response})
    })
} 

