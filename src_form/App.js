
// import Ref from './components/ref';
// import Login from "./components/login"
import { hot } from 'react-hot-loader/root';
import React from 'react'
// import NewContext from './components/NewContext';
import Test from "./components/Form/Test"
import WithLog from './components/HOC/WithLog';
// import Comp from './components/HOC/Comp';
const Hoc = WithLog(Test)
console.log(WithLog)
const App = () => <div>
    {/* <Ref></Ref> */}
    {/* <Test></Test> */}
    <Hoc></Hoc>
    {/* <NewContext></NewContext> */}
    {/* <Login></Login> */}
    </div>;
export default hot(App)