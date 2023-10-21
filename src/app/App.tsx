import { GoogleClientUrl } from '@/shared/consts/GoogleClientUrl'
import { LoginButton } from '@/widgets/GoogleLogin/ui/LoginButton'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: GoogleClientUrl,
                scope: '',
            })
        }

        gapi.load('client:auth2', start)
    }, [])

    return (
        <>
            <LoginButton />
        </>
    )
}

export default App
