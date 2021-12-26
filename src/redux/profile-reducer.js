const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
        postsData: [
            {id: "1", message: "Hello world", likesCount: 12},
            {id: "2", message: "1000-7", likesCount: 23},
            {id: "3", message: "I Love World", likesCount: 0},
            {id: "4", message: "Hi", likesCount: 123},
            {id: "5", message: "Hi", likesCount: 32},
            {id: "6", message: "Hi", likesCount: 97}],
        newPostText: "put message here"
    }



const profileReducer = (state =  initialState, action) => {
        switch (action.type) {
            case ADD_POST:

                let newPost = {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.postsData.push(newPost);
                state.newPostText = " ";

                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
            default:
                return state
        }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;