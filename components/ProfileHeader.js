import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux';

const ProfileHeader = () => {

    const user = useSelector(state => state.user);

    return (
        <View style={styles.container}>
            <Text style={styles.titles}> { user.username } </Text>
            <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="add-box" size={30}></MaterialIcons>
                <Ionicons name='menu' size={30} color="black" style={{ marginLeft: 12 }}></Ionicons>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titles: {
        fontSize: 22
    }
});

export default ProfileHeader