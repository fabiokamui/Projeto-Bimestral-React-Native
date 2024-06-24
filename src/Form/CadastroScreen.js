import { Button, StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>O Drizzle é um app feito para os jogadores de varios estilos de jogos 
                se comunicarem e se ajudarem com dicas e truques 
                podendo ate criar uma relação para fora do mundo virtual</Text>
            <Button 
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    }
})
