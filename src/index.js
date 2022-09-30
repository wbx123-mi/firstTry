import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"

import App from './App'
let container = document.getElementById('root')
const root = createRoot(container)
root.render(<div><BrowserRouter><App /></BrowserRouter></div>)