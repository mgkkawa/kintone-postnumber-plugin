import React from 'react'
import { getSingleStringFields } from '../modules'

getSingleStringFields().then(resp => console.log(resp))
const App = () => {
  return <h1>Hello kintone Plugin with React</h1>
}

export default App
