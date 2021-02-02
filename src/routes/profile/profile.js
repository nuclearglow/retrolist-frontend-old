import { useEffect, useState } from 'preact/hooks'
import PropTypes from 'prop-types'
import style from './profile.scss'

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
    const [time, setTime] = useState(Date.now())
    const [count, setCount] = useState(10)

    useEffect(() => {
        let timer = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={style.profile}>
            <h1>Profile: {user}</h1>
            <p>This is the user profile for a user named {user}.</p>

            <div>Current time: {new Date(time).toLocaleString()}</div>

            <p>
                <button onClick={() => setCount((count) => count + 1)}>Click Me</button> Clicked {count} times.
            </p>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.string
}

export default Profile