import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "./components/HomePage";
import MyCardsPage from "./components/MyCardsPage";
import StatisticsPage from "./components/StatisticsPage";
import SettingsPage from "./components/SettingsPage";


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage}/>
        <Tab.Screen name="MyCards" component={MyCardsPage}/>
        <Tab.Screen name="Statistics" component={StatisticsPage}/>
        <Tab.Screen name="Settings" component={SettingsPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}