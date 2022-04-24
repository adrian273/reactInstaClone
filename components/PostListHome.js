import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { FakePostData } from '../FakePostData'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const PostListHome = () => {

    const Story = (props) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={{ uri: props.image }} style={{ width: 30, height: 30, borderRadius: 20 }}></Image>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}> {props.username} </Text>
                    </View>
                    <Feather name='more-horizontal' size={24} color='black'></Feather>
                </View>
                <View style={{ with: '100%' }}>
                    <Image source={{ uri: props.image }} style={styles.image}></Image>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="message-circle" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="send" size={24} color="black" style={{ marginLeft: 10 }} />
                    </View>
                    <View>
                        <Fontisto name="favorite" size={28} color="black" style={{ marginRight: 10 }} />
                    </View>
                </View>
                <Text style={{fontWeight: 'bold', marginLeft: 10}}>{props.likes} Likes</Text>
                <Text style={{marginLeft: 10, marginBottom: 15}}>{props.title}</Text>
            </View>
        )
    }

    return (
        <View style={{ with: '100%' }}>
            <FlatList
                data={FakePostData}
                renderItem={({ item }) =>
                    <Story image={item.image} title={item.title} likes={item.likes} username={item.user.first_name}></Story>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            >

            </FlatList>
        </View>

    )
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 400,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default PostListHome;