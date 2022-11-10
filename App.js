import React from "react";
import DrawerNavigator from "./navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component{
  render(){
    return(
     <NavigationContainer>
        <DrawerNavigator/>
     </NavigationContainer> 
    )
  }
}