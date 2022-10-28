import apis from "../apis"
import {ADD_BILL, DELTE_BILL, EDIT_BILL, ERROR, GET_BILL, GET_BILLS,MSG} from './types'
export const notification=(msg)=>{
    return{type:MSG,payload:msg}
  }
export const getAllBils=()=>async dispatch=>{
   
    try {
     const {data}=await apis.get(`/`)
     dispatch({type:GET_BILLS,payload:data})
    

    } catch (error) {
     dispatch({type:ERROR,payload:'Opps!,something went wrong'})
        
    }
}

export const getBill=(id)=>async dispatch=>{
 const {data}= await apis.get(`/${id}`)
 dispatch({type:GET_BILL,payload:data})
}

export const AddBill=(details)=> async (dispatch,getState)=>{
    const state=getState()
    try {
        if(state.bills.filter(item=>item.paid===false).reduce((total,item)=>total+parseInt(item.amount),0)>=50000){
            dispatch(notification({msg:"Total budget exeeded",err:true}))
           setTimeout(()=>{
              dispatch(notification({msg:"",err:false}))
            },4000)
        }
        else{
            const {data}=await apis.post('/',details)
            console.log(data)
           dispatch({type:ADD_BILL,payload:data})
           dispatch(notification({msg:"Bill Added Succesfully",err:true}))
           setTimeout(()=>{
              dispatch(notification({msg:"",err:false}))
            },2000)
        }
        

    } catch (error) {
        dispatch({type:ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
        
    }
}

export const deleteBill=(id,history)=>async(dispatch)=>{
    await apis.delete(`/${id}`)
    dispatch({type:DELTE_BILL,payload:id})
    history.push("/")
}

export const editBill=(id,details)=>async(dispatch)=>{
    const {data}= await apis.put(`/${id}`,details)
    console.log(data)
    dispatch({type:EDIT_BILL,payload:data})
}

