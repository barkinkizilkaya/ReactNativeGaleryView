import React from 'react'
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'

const Body = props => {
    return (
        <ScrollView style={styles.container}>

        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../components/img/img1.jpeg')}
               />
          </View>
          
        </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bigview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      smallview: {
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width / 2) - 4,
      },
      myimage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
      }
})

export default Body