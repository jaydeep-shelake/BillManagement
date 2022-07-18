import {combineReducers} from 'redux'
import { BillReducer,currentBillReducer,notificationReducer } from './bill'


export default combineReducers({
    bills:BillReducer,
    notification:notificationReducer,
    currentBill:currentBillReducer
})