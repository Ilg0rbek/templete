import { useParams, useHistory } from 'react-router-dom'
import Individual from './Individual'
import Legal from './legal'

const RegisterApplication = () => {
    const params = useParams()
    const history = useHistory()

    return (
        <>
            {
                params?.who === 'individual' ? (
                    <Individual/>
                ) : params?.who === 'legal' ? (
                    <Legal/>
                ) : history.push('/error')
            }
        </>
    )
}

export default RegisterApplication
