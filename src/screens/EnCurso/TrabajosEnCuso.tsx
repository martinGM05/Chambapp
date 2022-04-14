import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardTrades from '../../components/Principal/CardTrades';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;
const TrabajosEnCuso = ({navigation}:Props) => {

  let trabajador = [
    {
      trade: 'Carpinteria',
      user: 'Juan Perez',
      rating: 3,
      photoBanner: "https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
      photoUser: "https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg"
    },
    {
      trade: 'Prostituacion',
      user: 'Ivan Cordova',
      rating: 5,
      photoBanner: "https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
      photoUser: "https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7"
    },
  ]

  return (
    <View style={styles.containerGlobal}>
      <LinearGradient
        colors={['#00C9FF', '#92FE9D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.1, 0.9]}
        style={styles.containerTitle}
      >
        <View style={styles.containerText}>
          <Icon name="business-time" size={35} color="#000" />
          <Text style={styles.title}>Trabajos en cuso</Text>
          <Icon name="handshake" size={35} color="#000" />
        </View>
      </LinearGradient>
      <View style={styles.containerScroll}>
        <ScrollView>
          {
            trabajador.map((item, index) => (
              <CardTrades
                key={index}
                trade={item.trade}
                user={item.user}
                rating={item.rating}
                photoBanner={item.photoBanner}
                photoUser={item.photoUser}
                navigation={navigation}
                from={2}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default TrabajosEnCuso

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    // backgroundColor: 'orange',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
  },
  containerTitle: {
    // backgroundColor: 'red',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('window').height * 0.2,
    // borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 9,

  },
  containerText:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  containerScroll: {
    // backgroundColor: 'yellow',
    // marginTop: 20,
    // marginLeft: 10,
    // marginRight: 10,
    height: '70%',
    padding: 10,
  }
})