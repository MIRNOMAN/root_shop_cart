import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk('userSlice/createUser',
  async ({ email, password,name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser,{
      displayName: name
    })
    console.log(data)
    return{
      email: data.user.email,
      name: data.user.displayName
    }
  })

  export const loginUser = createAsyncThunk(
    'userSlice/loginUser',
    async ({ email, password }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user);
        return {
          email: user.email,
          name: user.displayName // Assuming you're using a displayName
        };
      } catch (error) {
        console.error('Login error:', error);
        throw error; // Re-throw error to be caught by the component
      }
    }
  );

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state,{payload})=>{
      state.email = payload.email,
      state.name = payload.name
    },
    toggoleLoding: (state, {payload})=>{
      state.isLoading = payload
    },
    logout: (state)=>{
      state.name = "";
      state.email = "";
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(createUser.pending,(state)=>{
      state.isLoading= true;
      state.isError= false;
      state.name='';
      state.email='';
      state.error='';
    })
    .addCase(createUser.fulfilled,(state,{payload})=>{
      state.isLoading= false;
      state.isError= false;
      state.name=payload.name;
      state.email=payload.email;
      state.error='';
    })
    .addCase(createUser.rejected,(state,action)=>{
      state.isLoading= false;
      state.isError= true;
      state.name='';
      state.email='';
      state.error=action.error.message;
    })
  }
});
export const {setUser,toggoleLoding,logout} = userSlice.actions;
export default userSlice.reducer;