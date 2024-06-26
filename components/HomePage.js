import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TransactionButtons from "./TransactionButtons";
import TransactionCard from "./TransactionCard";
import theme from "../theme/theme";
import { useContext } from "react";
import themeContext from "../theme/themeContext";

export default function HomePage() {
    const theme = useContext(themeContext)
    const Transaction = [
        { id: '1', field: 'Entertainment', organisation: 'Apple', amount: '- $5,99', color: 'black' },
        { id: '2', field: 'Music', organisation: 'Spotify', amount: '- $12,99' , color: 'black'},
        { id: '3', field: 'Transaction', organisation: 'Money Transfer', amount: '$300', color: 'skyblue' },
        { id: '4', field: 'Food', organisation: 'Grocery', amount: '- $88', color: 'black' }
    ];
    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Image style={styles.profileImage} source={require('../assets/profile.png')} />
                    <View style={styles.greeting}>
                        <Text style={styles.name}>Welcome Back</Text>
                        <Text style={styles.email}>Eric Atsu</Text>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Ionicons style={styles.search} name="search-outline" size={30} />
                </View>
            </View>
            <View style={styles.ccCardcont}>
                <Image resizeMode="contain" style={styles.ccCard} source={require('../assets/Card.png')} />
            </View>
            <View style={styles.button}>
                <TransactionButtons />
            </View>
            <View style={styles.banner}>
                <Text style={styles.sectionTitle}>Featured Jobs</Text>
                <Text style={styles.sectionTitle1}>Sell All</Text>
            </View>
            <FlatList
                data={Transaction}
                renderItem={({ item }) => <TransactionCard style={styles.list} transact={item} />}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        backgroundColor: theme.backgroundColor,
        color: theme.color
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header1: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    email: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        color: '#6c757d',
    },
    greeting: {
        justifyContent: 'space-around'
    },
    profileImage: {
        width: 62,
        height: 62,
        borderRadius: 31,
        marginRight: 10,
        backgroundColor: '#f5f5f5'
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#f5f5f5'
    },
    ccCardcont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ccCard: {
        width: '100%',
        height: 250,
        borderRadius: 40
    },
    list: {
        flexDirection: 'row'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingBottom: 10,
    },
    sectionTitle1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingBottom: 10,
        color: 'skyblue'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})