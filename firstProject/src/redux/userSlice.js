import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:null,
    password:null,
    isLoading:false, 
    isAuth:false,
    users:{
        userEmail:'test@test.com',
        userPassword:'12345'
    }
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
        setLogin:(state)=>{
            if(state.email==state.users.userEmail && state.password==state.users.userPassword){
                state.isAuth=true
                console.log("Giris Basarili");
            }else{
                state.isAuth=false
                console.log("Giris Basarisiz");
            }
        }
    }
});

export const { setEmail, setPassword, setIsLoading, setLogin } = userSlice.actions;

export default userSlice.reducer;
