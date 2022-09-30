import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
let container = document.getElementById('root')
const root = createRoot(container)
root.render(<div><App /></div>)