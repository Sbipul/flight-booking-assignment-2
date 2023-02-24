import { ADD_FLIGHT, REMOVE_FLIGHT } from "../actions/action"

const initialState = {
    flights:[]
}

const flightReducer =(state=initialState,action) =>{
    switch(action.type) {
        case ADD_FLIGHT:
            return {
                ...state,
                flights:[...state.flights,action.payload]
            }
        case REMOVE_FLIGHT:
            const remainFlights = state.flights.filter(flight=>flight.id !==action.payload)
            return{
                ...state,
                flights:remainFlights
            }
        default: return state
    }
}
export default flightReducer