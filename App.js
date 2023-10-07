// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./Screens/Login";
import CreateBill from "./Screens/CreateBill";
import ShowBill from "./Screens/ShowBill"
import Home from "./Screens/Home";


import {StyleSheet,View} from 'react-native';
import Otp from "./Screens/Login";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import {
//   User2Icon,
//   Settings,
//   FileText,
//   FilePlus,
// } from "lucide-react-native";

import {firebaseConfig} from "./config";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // if (user) {
  //   <NavigationContainer>

  //   </NavigationContainer>
  // }


  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser(null);
      }
      console.log(user.uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  
if (user!==null) {
    return (
        <NavigationContainer>
        <View style={{"width":"100%","height":"100%","display":"flex", "flex-direction":"column"}}>
          <View style={{"height":"100%"}}>
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: {
                  fontSize: 15,
                  justifyContent: "center",
                  alignItems: "center",
                },
                tabBarStyle: {
                  height: "10%",
                  paddingBottom: 3,
                  // position: "fixed",
                  // bottom: 2,
                  // border: "2px solid black ",
                },
              }}
              initialRouteName="Dashboard"
            >
              <Tab.Screen
                name="Create Invoice"
                component={CreateBill}
                options={{
                  tabBarLabel: "New Inv",
                  // tabBarIcon: ({ focused }) => {
                  //   return (
                  //     <FilePlus color={focused ? "red" : "gray"} size={28} />
                  //   );
                  // },
                }}
              />
              <Tab.Screen
                name="Show Invoices"
                component={ShowBill}
                options={{
                  tabBarLabel: "Show Inv",
                  // tabBarIcon: ({ focused }) => {
                  //   return (
                  //     <FileText color={focused ? "red" : "gray"} size={28} />
                  //   );
                  // },
                }}
              />
            </Tab.Navigator>
          </View>
        </View>
      </NavigationContainer>
    )
}

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Otp} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="CreateBill" component={CreateBill}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );



}
 