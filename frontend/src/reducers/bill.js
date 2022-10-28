import { ADD_BILL, DELTE_BILL, EDIT_BILL, GET_BILL, GET_BILLS,MSG } from "../actions/types";

export const BillReducer=(state=[],action)=>{
    console.log(action.payload)
    switch (action.type) {
        case GET_BILLS:
            return [...action.payload]
        case ADD_BILL:
            return [...state,action.payload]
        case EDIT_BILL:
            const editedBill = state.find((item)=>item._id===action.payload._id)
            if(editedBill){
                return state.map(x=>x._id===editedBill._id?action.payload:x)
            }
            else{

                return[...state,action.payload]  
            }
        case DELTE_BILL:
           const newState=  state.filter(item=>item._id!==action.payload)
            return  newState  
        default:
            return state
    }
}

export const notificationReducer=(state={msg:'',err:false},action)=>{
    switch (action.type) {
        case MSG:
            return{...state,msg:action.payload.msg,err:action.payload.err}
        default:
            return state;
    }
}

export const currentBillReducer=(state={},action)=>{
    switch (action.type) {
        case GET_BILL:
            return {...action.payload}
        case EDIT_BILL:
            return{...state,...action.payload}
        default:
            return state
    }
}