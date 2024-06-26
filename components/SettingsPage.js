import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native";
import { useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../theme/themeContext";
import theme from "../theme/theme";


export default function Settings() {
    const {theme, setTheme} = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(theme === 'dark')

    return (
        <View style={[styles.Container1]}>
            <View style={styles.container}>
                <Text style={styles.text}>Language</Text>
                <Ionicons color={'grey'} name="chevron-forward-outline" size={28} />
            </View>

            <View style={styles.line}>
                <View style={styles.horizontalLine} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>My Profile</Text>
                <Ionicons color={'grey'} name="chevron-forward-outline" size={28} />
            </View>

            <View style={styles.line}>
                <View style={styles.horizontalLine} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Contact Us</Text>
                <Ionicons color={'grey'} name="chevron-forward-outline" size={28} />
            </View>

            <View style={styles.line}>
                <View style={styles.horizontalLine} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Change Password</Text>
                <Ionicons color={'grey'} name="chevron-forward-outline" size={28} />
            </View>

            <View style={styles.line}>
                <View style={styles.horizontalLine} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Privacy Policy</Text>
                <Ionicons color={'grey'} name="chevron-forward-outline" size={28} />
            </View>

            <View style={styles.line}>
                <View style={styles.horizontalLine} />
            </View>

            <View style={styles.toggleCont}>
                <Text style={styles.toggleText}>Theme</Text>
                <View style={styles.switchCont}>
                    <Switch value={darkMode} onChange={(value) => { 
                        setDarkMode(value); 
                        setTheme(value ? 'dark' : 'light')
                     }}
                     />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    Container1: {
        marginTop: 60,
        backgroundColor: theme.backgroundColor,
        color: theme.color
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    horizontalLine: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 20,
        flex: 2,
        width: 370,
        marginBottom: 40
    },
    text: {
        fontSize: 26
    },
    line: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggleCont: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 35
    },
    switchCont: {
        transform: [{ scale: 1.5 }]
    },
    toggleText: {
        fontSize: 26
    }
})