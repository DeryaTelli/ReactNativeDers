import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAuth,signOut,signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";


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

            await AsyncStorage.setItem("userToken", token )


            return userData;
        }catch(error){
            console.log("userSlice 21 line:",error);
            throw error;
        }
    }
)

//Kullanici otomatik giris islemleri 
export const autoLogin=createAsyncThunk('user/autoLogin', async()=>{
    try{
        const token = await AsyncStorage.getItem("userToken")
        if(token){
            return token
        }else{
            throw new Error("No token found")
        }
        

    }catch(error){
        throw error;
    }
})

//Kullanici cikis islemleri 
export const logout=createAsyncThunk('user/logout', async()=>{
    try{
        const auth=getAuth()
        await signOut(auth)
        await AsyncStorage.removeItem("userToken")
        return null;

    }catch(error){
        throw error;
    }
})

//Kullanici kayit islemleri 
export const register=createAsyncThunk('user/register', async({email,password})=>{
    try{
        const auth=getAuth();
        const userCredential=await createUserWithEmailAndPassword(auth,email,password);
        const user= userCredential.user;
        const token =user.stsTokenManager.accessToken;
        await sendEmailVerification(user)
        await AsyncStorage.setItem("userToken", token )
        return token;


        return userData;
    }catch(error){
        throw error;
    }
})




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

            .addCase(autoLogin.pending, (state, action)=>{
                state.isLoading=true;
                state.isAuth=false;
            })
            .addCase(autoLogin.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.isAuth=true;
                state.token=action.payload;
            })
            .addCase(autoLogin.rejected, (state, action)=>{
                state.isLoading=false;
                state.isAuth=false;
                state.token=null;
                state.error=action.error.message;
            })

            .addCase(logout.pending, (state)=>{
                state.isLoading=true;
            })
            .addCase(logout.fulfilled, (state)=>{
                state.isLoading=false;
                state.isAuth=false;
                state.token=null;
                state.error=null;
            })
            .addCase(logout.rejected, (state, action)=>{
                state.isLoading=false;
                state.error=action.payload;
            })

            .addCase(register.pending, (state)=>{
                state.isLoading=true;
                state.isAuth=false;
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.isAuth=true;
                state.token=action.payload;
            })
            .addCase(register.rejected, (state, action)=>{
                state.isLoading=false;
                state.isAuth=false;
                state.error="Invalid email or password";
            })  
    }
});

export const { setEmail, setPassword, setIsLoading,  } = userSlice.actions; // parantez icinden setLogini sildik 

export default userSlice.reducer;
