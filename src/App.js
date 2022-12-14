// import logo from './logo.svg';
import React from 'react';
import './index.css'
//import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";
// import './styles/Apps.css'



function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)


    const addCash = (cash) => {
        dispatch({ type:"ADD_CASH", payload:cash })
    }


    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload:cash})
    }

    return (
        <div className={'app'}>
            <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display:"flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            </div>

        </div>
    )

}

export default App;
