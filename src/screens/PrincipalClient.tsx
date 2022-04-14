import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import CardCategories from '../components/Principal/CardCategory';
import CardTrades from '../components/Principal/CardTrades';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import { Contexto } from '../utils/PeticionesProvider';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;


const PrincipalClient = ({ navigation }: Props) => {
    const contexto=useContext(Contexto);

    let tradesCards = [
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner:"https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser:"https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg" 
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner:"https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser:"https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7" 
        },
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner:"https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser:"https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg" 
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner:"https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser:"https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7" 
        },
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner:"https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser:"https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg" 
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner:"https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser:"https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7" 
        },
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner:"https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser:"https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg" 
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner:"https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser:"https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7" 
        },
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner:"https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser:"https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg" 
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner:"https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser:"https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7" 
        },
    ]

  


    return (
        <View style={styles.container}>
           
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerUser}>
                    <Icon name="user-circle" size={50} color="#000" />
                </View>
                <View style={styles.containerGreetings}>
                    <Text style={styles.textName}>Hola Martin!</Text>
                    <Text style={styles.textWelcome}>Mira lo que tenemos para ti.</Text>
                </View>
                <View style={styles.searchWork}>
                    <View style={styles.containerSearch}>
                        <Icon name="search" size={23} color="#000" />
                        <TextInput style={styles.inputSearch} placeholder="¿En qué te podemos ayudar?" placeholderTextColor="#999" />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerCategories}>
                        
                        <CardCategories name="Comprar" icon="shopping-cart" />
                        <CardCategories name="Vender" icon="shopping-basket" />
                        <CardCategories name="Arrendar" icon="home" />
                        <CardCategories name="Mecanico" icon="car" />
                        <CardCategories name="Cuidar" icon="paw" />
                        <CardCategories name="Musico" icon="music" />
                        <CardCategories name="Otros" icon="question" />
                    </View>
                </ScrollView>
                <View style={styles.containerTrades}>
                    {
                        contexto.Trabajador.map((trade, index) => (
                            <CardTrades 
                                key={index}
                                idTrabajador={trade.Id} 
                                trade={trade.Oficios.toString()} 
                                user={trade.nombre} 
                                rating={trade.valoracion} 
                               
                                photoUser={trade.fotoUser} 
                                navigation={navigation}
                            />
                        ))
                    }
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default PrincipalClient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        marginLeft: 10,
        marginRight: 10,
    },
    containerUser: {
        marginTop: 50,
    },
    containerGreetings: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
    },
    textName: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
    },
    textWelcome: {
        fontSize: 18,
        color: '#000',
    },
    searchWork: {
        marginTop: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: '#3f3f3f',
        width: '100%',
        height: 60,
        borderRadius: 10,
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    inputSearch: {
        width: '100%',
        padding: 5,
        fontSize: 20,
        marginLeft: 10,
    },    
    containerCategories: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 100,
        width: 500,
        height: 100,
    },
    containerTrades: {
        marginTop: 10,
        marginBottom: 100,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
        height: 'auto',
    },
})