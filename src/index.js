import ReactDOM from 'react-dom'
import React from 'react'
import DemoApp from './demoapp'

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(
<DemoApp/>, 
wrapper) : false