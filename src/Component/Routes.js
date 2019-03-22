import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Body from './Body';
import Menu from './Menu';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "body" component = {Body} title = "LIP U" initial = {true} />
         <Scene key = "Menu" component = {Menu} title = "Menu" />
      </Scene>
   </Router>
)
export default Routes;