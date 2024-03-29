import { Router } from 'preact-router'
import Div100vh from 'react-div-100vh'
import { Provider } from 'unistore/preact'
import Create from '../routes/create/create'
// Code-splitting is automated for `routes` directory
import List from '../routes/list/list'
import Profile from '../routes/profile/profile'
import Register from '../routes/register/register'
import Settings from '../routes/settings/settings'
import { store } from '../store/store'
// Basic Layout components
import Footer from './footer/footer'
import Title from './title/title'

const App = () => (
    <Provider store={store}>
        <Div100vh id="app">
            <Title />
            <main>
                <div class="scanline" />
                <Router>
                    <List path="/" />
                    <Register path="/register" />
                    <Profile path="/profile" user="me" />
                    <Settings path="/settings" />
                    <Create path="/create" />
                </Router>
            </main>
            <Footer />
        </Div100vh>
    </Provider>
)

export default App
