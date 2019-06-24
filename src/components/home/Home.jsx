import React from 'react'
import SearchPage from '../layout/SearchPage';
import Users from '../layout/Users.js';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
        };
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://api.github.com/users?since=1")
            .then(res => res.json())
            .then(data => this.setState({ users: data, loading: false }));
    }

    render() {

        return (
            <div>

                <SearchPage />
                <Users loading={this.state.loading} users={this.state.users} />
            </div>
        )

    }
}

export default Home;
