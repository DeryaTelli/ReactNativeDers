import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

export const login=createAsyncThunk(
    'user/login',async({email,password})=>{
        try{
            const auth=getAuth();
            const userCredential=await signInWithEmailAndPassword(auth,email,password);
            const user= userCredential.user;
            const token =user.stsTokenManager.accessToken;
            const userData={
                token,
                user: user,
            }
            return userData;
        }catch(error){
            console.log("userSlice 21 line:",error);
            throw error;
        }
    }
)












const initialState={
    // email:null,
    // password:null,
    isLoading:false, 
    isAuth:false,
    // users:{
    //     userEmail:'test@test.com',
    //     userPassword:'12345'
    // }
    token:null,
    user:null,
    error:null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // state initialstate temsil ediyor action dedigimiz yapisi ise payilacak sey payload da aksiyon da gelen value demek 
        setEmail:(state, action)=>{
            const lowerCaseEmail=action.payload.toLowerCase(); //kucuk harfe ceviriyoruz
            state.email=lowerCaseEmail
            //state.email=action.payload
        },
        setPassword:(state, action)=>{
            state.password=action.payload
        },
        setIsLoading:(state, action)=>{
            state.isLoading=action.payload
        },
        // setLogin:(state)=>{
        //     if(state.email==state.users.userEmail && state.password==state.users.userPassword){
        //         state.isAuth=true
        //         console.log("Giris Basarili");
        //     }else{
        //         state.isAuth=false
        //         console.log("Giris Basarisiz");
        //     }
        // }
    },
    extraReducers:(builder)=>{
        builder
            //yukleniyor oldugu durum pending
            .addCase(login.pending, (state)=>{
                state.isLoading=true;
                state.isAuth=false;
            })
            //basarili oldugu durum fulfilled
            .addCase(login.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.isAuth=true;
                state.user=action.payload.user;
                state.token=action.payload.token;
            })
            //basarisiz oldugu durum rejected
            .addCase(login.rejected, (state, action)=>{
                state.isLoading=false;
                state.isAuth=false;
                state.error=action.error.message;
            })
    }
});

export const { setEmail, setPassword, setIsLoading,  } = userSlice.actions; // parantez icinden setLogini sildik 

export default userSlice.reducer;
