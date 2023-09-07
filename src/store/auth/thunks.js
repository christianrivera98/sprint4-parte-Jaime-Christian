import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login, logout, setError, setIsLogged, setUserLogged } from "./authSlice"



export const checkingAuthentication = (email, password) =>{
    return async (dispatch) => {

        dispatch ( chekingCredentials());


    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch ( chekingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch (login(result));
    }
}

export const startLoginWithCellPhoneNumber = ({code}) => {
    return async (dispatch) => {

        const confirmationResult = window.confirmationResult;
        try {
            confirmationResult.confirm(code).then((result) => {
                const user = result.user.auth.currentUser;
                const authUser = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    accessToken: user.accessToken
                }
                console.log(user);
                dispatch(setUserLogged(authUser));
                dispatch(setIsLogged(true));
            })
        } catch (error) {
            console.log(error);
            dispatch(setError({
                error: true,
                code: error.code,
                message: error.message
            }))
        }

    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName, photoURL}) => {
return async (dispatch) => {

    dispatch( chekingCredentials());

    const {ok, uid, errorMessage} = await registerUserWithEmailPassword ({email, password, displayName, photoURL});

    if ( !ok ) return dispatch( logout({errorMessage}))

    dispatch (login( {uid, displayName, email, photoURL}));
 
}

}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async (dispatch) => {

        dispatch ( chekingCredentials() );
        const result = await loginWithEmailPassword({email, password});

        if (!result.ok) return dispatch(logout(result. errorMessage));

        dispatch (login(result.errorMessage));

    }


}

export const loginWithCode = (code) => {
    return async (dispatch) => {
        const confirmationResult = window.confirmationResult;
        try {
            confirmationResult.confirm(code).then((result) => {
                const user = result.user.auth.currentUser;
                const authUser = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    accessToken: user.accessToken
                }
                console.log(user);
                dispatch(setUserLogged(authUser));
                dispatch(setIsLogged(true));
                dispatch(setError(false));
            })
        } catch (error) {
            console.log(error);
            dispatch(setError({
                error: true,
                code: error.code,
                message: error.message
            }))
        }
    }
}




export const startLogout = () => {
    return async ( dispatch ) => {
        
        await logoutFirebase();
        dispatch (logout({errorMessage: null }));
    }
}

