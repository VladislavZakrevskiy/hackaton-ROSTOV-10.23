import { GoogleClientUrl } from '@/shared/consts/GoogleClientUrl'
import { useCallback } from 'react'
import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline, 
} from 'react-google-login'

const isOnline = (res: any): res is GoogleLoginResponse => {
    return res.googleId
}

export const LoginButton = () => {
    const onSuccess = useCallback(
        (
            res:
                | GoogleLoginResponse
                | GoogleLoginResponseOffline
        ) => {
            if (isOnline(res)) {
                console.log('success: ', res.profileObj)
            }
        },
        []
    )

    const onFailure = useCallback(
        (res: GoogleLoginResponse) => {
            console.log('failure: ', res.profileObj)
        },
        []
    )

    return (
        <GoogleLogin
            clientId={GoogleClientUrl}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            accessType="same-origin-allow-popupssame-origin"
        />
    )
}
