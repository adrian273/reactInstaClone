import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const UserInfo = (props) => {

    const { user } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.textBold}> {user.username} </Text>
            <Text> {user.about} </Text>
            <Text style={{ paddingTop: 5, marginBottom: 10 }}> followed By: 
                <Text style={styles.textBold}> {user.followedBy[0]}  </Text> And
                <Text style={styles.textBold}> {user.followedBy[1]}  </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 5
    },
    container: {
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    followsContainer: {
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    textBold: {
        fontWeight: 'bold',
        textAlign: 'left',
    }
})

export default UserInfo