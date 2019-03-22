import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Body from './Body';
import Menu from './Menu';
import Predict from './PredictPage';
const Routes = () => (
   <Router >
      <Scene key = "root">
         <Scene key = "body" component = {Body} title = "LIP U" initial = {true} hideNavBar={true}/>
         <Scene key = "Menu" component = {Menu} title = "Menu" />
         <Scene key = "Predict" component = {Predict} title = "Let Get Start to Predict" />

      </Scene>
   </Router>
)
export default Routes;