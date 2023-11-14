import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './contact'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App