import React,{useEffect,useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import RigthSiderbar from './components/RigthSiderbar'
import Sidebar from './components/Sidebar'
import PastOrders from './components/PastOrders'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom'
import './styles/main.css'
import { Msg } from './components/Msg'
import Bill from './pages/Bill'
import GraphPage from './pages/GraphPage'
import { useDispatch } from 'react-redux'
import { getAllBils } from './actions'
const App = () => {
  const notification = useSelector(state=>state.notification)
  const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getAllBils())
   },[])
  return (
    <Router >
      <Switch>
        <main>
          <Header/>
          
            <div className="container">
            <Sidebar/>
            <Route exact path='/' component={Main}/>
            <Route exact path='/allBills' component={PastOrders} />
            <Route exact path='/allBills/:id' component={Bill}/>
            <Route exact path="/analytics" component={GraphPage}/>
            <RigthSiderbar/>
            </div>
         
           {/* <Login/> */}
          
         
          <Msg msg={notification?.msg?notification.msg:"Vet added sucessfully"} show={notification?.err}/>
        </main>
    </Switch>
    </Router>
  )
}

export default App