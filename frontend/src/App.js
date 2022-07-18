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
import { history } from './history'
const App = () => {
  const notification = useSelector(state=>state.notification)
  
  return (
    <Router history={history}>
      <Switch>
        <main>
          <Header/>
          
            <div className="container">
            <Sidebar/>
            <Route exact path='/' component={Main}/>
            <Route exact path='/:id' component={Bill}/>
            <Route exact path='/bills/allBills' component={PastOrders} />
            <RigthSiderbar/>
            </div>
         
           {/* <Login/> */}
          
         
          <Msg msg={notification?.msg} show={notification?.err}/>
        </main>
    </Switch>
    </Router>
  )
}

export default App