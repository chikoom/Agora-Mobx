import React from 'react'
import { observer } from 'mobx-react'
import Market from './components/Market'
import DevTools from 'mobx-react-devtools'

import './App.css'

const App = observer(props => {
  return (
    <div>
      <h1>AGORA SHOP</h1>
      <Market />
    </div>
  )
})

export default App
