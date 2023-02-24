export const ADD_FLIGHT = 'addflight/flight'
export const REMOVE_FLIGHT = 'removeflight/flight'
export const generateActions = (type,payload)=>{return {type:type,payload:payload}}