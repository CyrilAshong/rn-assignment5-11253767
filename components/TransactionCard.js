import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MoreJobCards = ({ transact }) => {
    const getLogo = (organisation) => {
        switch (organisation) {
            case 'Apple':
                return require('../assets/apple.png');
            case 'Spotify':
                return require('../assets/spotify.png');
            case 'Money Transfer':
                return require('../assets/moneyTransfer.png');
            case 'Grocery':
                return require('../assets/grocery.png');
            default:
            // return require('../assets/default-logo.png');
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.upper}>
                <View style={styles.logoCont}>
                    <View style={styles.button}>
                        <Image resizeMode='contain' source={getLogo(transact.organisation)} style={styles.logo} />
                    </View>
                </View>
                <View>
                    <Text style={styles.field}>{transact.organisation}</Text>
                    <Text style={styles.organisation}>{transact.field}</Text>
                </View>
            </View>
            <View style={styles.lower}>
                <Text style={{fontSize: 18, justifyContent: 'center', color: transact.color}}>{transact.amount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderColor: '#dee2e6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    logo: {
        width: 40,
        height: 40,
    },
    logoCont: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    organisation: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 8,
    },
    upper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#f5f5f5',
        marginRight: 10,
    }
});

export default MoreJobCards;
