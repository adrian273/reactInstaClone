import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../components/UserInfo'
import ButtonComponent from '../components/ButtonComponent'

import StoryComponent from '../components/StoryComponent';
import UserPictureAndFollows from '../components/UserPictureAndFollows';
import UserPostProfile from '../components/UserPostProfile';


const ProfileScreen = () => {
  const user = useSelector(state => state.user);
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
      <UserPictureAndFollows user={user}></UserPictureAndFollows>
      <UserInfo user={user}></UserInfo>
      <ButtonComponent buttonName={'Edit Profile'}></ButtonComponent>
      <StoryComponent></StoryComponent>
      <UserPostProfile ></UserPostProfile>
    </View>
    </ScrollView>
  )
}

export default ProfileScreen