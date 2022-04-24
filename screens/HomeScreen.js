import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import StoryComponent from '../components/StoryComponent'
import PostListHome from '../components/PostListHome'

import axios from 'axios'

const HomeScreen = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        getUser();
    }, [])
    

    const getUser = async () => {
        const user = await axios.get('https://randomuser.me/api/');
        
        const newUser = {
            username: user.data.results[0].login.username,
            profilePicture: user.data.results[0].picture.large
        }
        console.log("🚀 ~ file: HomeScreen.js ~ line 20 ~ getUser ~ newUser", newUser);
        dispatch(setUser(newUser));
    }

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <StoryComponent></StoryComponent>
      <PostListHome></PostListHome>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})


export default HomeScreen
