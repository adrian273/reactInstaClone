import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { FakePictureData } from '../FakePictureData'

const UserPostProfile = () => {
    
    const Story = (props) => {
        return (
            <TouchableOpacity style={{ with: '100%' }}>
                <View style={{ with: '100%' }}>
                    <Image source={{ uri: props.image }} style={styles.image}></Image>
                </View>
            </TouchableOpacity>
        )
    }

  return (
      <View style={{ with: '100%' }}>
          <FlatList 
            data={FakePictureData}
            renderItem={({item}) => 
                <Story image={item.url} name={item.name}></Story>}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            >

          </FlatList>
      </View>
    
  )
}

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default UserPostProfile