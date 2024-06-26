import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "./components/HomePage";
import MyCardsPage from "./components/MyCardsPage";
import StatisticsPage from "./components/StatisticsPage";
import SettingsPage from "./components/SettingsPage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EventRegister } from "react-native-event-listeners";
import React, { useState, useEffect } from 'react';
import themeContext from "./theme/themeContext";


const Tab = createBottomTabNavigator()

export default function App() {
const [theme , setTheme] = useState('light')

const themeColors = {
  light: {
    tabBackgroundColor: '#FFFFFF'
  },
  dark: {
    tabBackgroundColor: '#28243c'
  }
}
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])
  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} options={{
            tabBarIcon: () => <Ionicons name="home-outline" size={20} />
          }} />
          <Tab.Screen name="MyCards" component={MyCardsPage} options={{
            tabBarIcon: () => <Ionicons name="card-outline" size={20} />
          }} />
          <Tab.Screen name="Statistics" component={StatisticsPage} options={{
            tabBarIcon: () => <Ionicons name="pie-chart-outline" size={20} />
          }} />
          <Tab.Screen name="Settings" component={SettingsPage} options={{
            tabBarIcon: () => <Ionicons name="settings-outline" size={20} />
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>

  )
}