import { Text, View, Image, StyleSheet } from "react-native";


export default function TransactionButtons() {
    return (
        <View style={styles.transaction}>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Image style={styles.send} source={require('../assets/send.png')} />
                </View>
                <Text>Send</Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Image source={require('../assets/recieve.png')} />
                </View>
                <Text>Recieve</Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Image source={require('../assets/loan.png')} />
                </View>
                <Text>Loan</Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Image source={require('../assets/topUp.png')} />
                </View>
                <Text>TopUp</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30,
    },
    button: {
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        marginBottom: 15
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})