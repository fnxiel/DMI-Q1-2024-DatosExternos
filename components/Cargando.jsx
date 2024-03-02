import {View, Text, ActivityIndicator, StyleSheet} from 'react-native' 

export function Cargando ({texto}) {
    return <View style={styles.container}>
            <ActivityIndicator size="large"/>
            <Text>{texto}</Text>
           </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})