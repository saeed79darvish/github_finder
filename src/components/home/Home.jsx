import React, { Fragment } from 'react'
import SearchPage from '../layout/SearchPage';
import Users from '../layout/Users.js';
import Alert from '../layout/Alert.js';

const Home = () => {

    return (
        <Fragment>

            <SearchPage />
            <Alert />
            <Users />

        </Fragment>
    )
}

export default Home;
