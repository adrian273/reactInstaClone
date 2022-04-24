import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { FakePictureData } from '../FakePictureData'

const StoryComponent = () => {
    
    const Story = (props) => {
        return (
            <TouchableOpacity style={{ width: 60, height: 76, marginLeft:15, marginVertical: 15 }}>
                <View style={{ height:60, width: 60, borderWidth: 1, borderColor: 'black', borderRadius: 50}}>
                    <Image source={{ uri: props.image }} style={styles.image}></Image>
                </View>
                <Text style={styles.text}> { props.name } </Text>
            </TouchableOpacity>
        )
    }

  return (
      <View>
          <FlatList 
            data={FakePictureData}
            renderItem={({item}) => 
                <Story image={item.url} name={item.name}></Story>}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >

          </FlatList>
      </View>
    
  )
}

const styles = StyleSheet.create({
    image: {
        width: 52,
        height: 52,
        borderRadius: 26,
        position: 'absolute',
        top: 4,
        left: 3
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default StoryComponent