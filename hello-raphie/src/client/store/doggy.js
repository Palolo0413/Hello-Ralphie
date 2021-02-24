import axios from 'axios'

const GET_DOGGY = 'GET_DOGGY'

const getDoggy = (doggy) => ({
    type: GET_DOGGY,
    doggy,
  })

  export const fetchDoggy = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get('/api/doggy')
        dispatch(getDoggy(data))
      } catch (error) {
        console.log('Error with fetching doggos')
        console.error(error)
      }
    }
  }

  export const createDoggy = (doggy) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.post('/api/doggy', doggy)
        dispatch(getDoggy(data))
      } catch (error) {
        console.log('Error with creating new doggos')
        console.error(error)
      }
    }
  }

  const initialState = {
    doggy: {}
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_DOGGY:
        return {
          ...state,
          doggy: action.doggy,
        }
      
      default:
        return state
    }
  }