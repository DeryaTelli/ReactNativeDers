    import { NavigationContainer } from '@react-navigation/native'
    import AuthStack from './AuthStack'
    import UserStack from './UserStack'

    const RootNavigation = () => {
        // kullanici giris yapti yapmadi islemini simdilik el ila yapiyoruz 
        const isAuth =false
    return (
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack/>
                    : <UserStack/>      
            }
        </NavigationContainer>
    )
    }

    export default RootNavigation

