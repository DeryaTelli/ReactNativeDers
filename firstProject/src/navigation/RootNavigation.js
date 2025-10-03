    import { NavigationContainer } from '@react-navigation/native'
    import AuthStack from './AuthStack'
    import UserStack from './UserStack'
    import { useSelector } from 'react-redux'
    import app from '../../firebaseConfig'

    const RootNavigation = () => {
        // kullanici giris yapti yapmadi islemini simdilik el ila yapiyoruz 
        const { isAuth } = useSelector((state) => state.user);
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

