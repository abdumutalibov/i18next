import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import './App.css'
import { fetchCustomers } from './asyncActions/customers';
function App() {

    const dispatch = useDispatch()
    const cash = useSelector( state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
}

const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
}

const addCustomer = (name) => {
    const customer ={
        name,
        id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
    // dispatch({type: 'ADD_CUSTOMER', payload: customer})
}
 
const removeCustomer = (customer) => {
// dispatch({type: 'REMOVE_CUSTOMERS', payload:customer.id})
dispatch(removeCustomerAction(customer.id))
}

    return (
        <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{fontSize:'3rem'}}>{cash}</div>
                <button onClick={() => addCash(Number(prompt()))}>add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>get cash</button>
                <button onClick={() => addCustomer(prompt()) }>add customers</button>
                <button onClick={() => dispatch(fetchCustomers()) }>get customers</button>
            </div>
            {customers.length > 0 ? 
            <div >
{customers.map(customer => 
   <div className='main'> <div className='text' onClick={() => removeCustomer(customer)} style={{fontSize:'2rem', border:'1px solid black'}}>
        {customer.name}</div></div>
)}
            </div>
            :
            <div style={{fontSize:'2rem' }}>
                Client not egzist
            </div>
}
        </div>
    )
}

export default App
