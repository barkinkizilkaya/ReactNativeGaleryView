import React from 'react'
import { View, StyleSheet,Text, ImageBackground, Image } from 'react-native'

const Header = props => {
    return (
        <ImageBackground
        style={styles.headerbg}
        source={require('../components/img/img1.jpeg')}
        >
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image
              style={styles.mypic}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <Text style={styles.name}>Hitesh Choudhary</Text>
          <Text style={styles.liner}>A part time photographer</Text>
        </View>

      </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    headerbg: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
      },
      headercontainer: {
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      profilepiccontainer: {
        width: 180,
        height: 180,
    
      },
      mypic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#fff',
      },
      name: {
        marginTop: 18,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },
      liner: {
        color: '#fff',
        marginTop: 5,
        fontSize: 15,
        fontStyle: 'italic',
      }
})

export default Header