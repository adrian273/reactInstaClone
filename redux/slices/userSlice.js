import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    profilePicture: null,
    followers: 100,
    following: 220,
    posts: 340,
    about: `梅雨時「つゆどき」ずぶ濡「ぬ」れのまんま、部屋「へや」の前「まえ」で泣「な」いていた。
    `,
    followedBy: ['elon', 'nanenano', 'kimu', 'momoka'],
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                username: action.payload.username,
                profilePicture: action.payload.profilePicture,
                followers: state.followers,
                following: state.following,
                posts: state.posts,
                about: state.about,
                followingBy: state.followingBy
            }
        },
        logout: (state) => {
            return {
                ...state,
                username: null,
                profilePicture: null,
                followers: null,
                following: null,
                posts: null,
                about: null,
                followedBy: [],
            }
        }
    }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer; 