import React, { Fragment, useEffect, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from './Spinner';
// import { Link } from "react-router-dom";


const User = ({ match }) => {
    const githubContext = useContext(GithubContext);


    const { user: { hireable, bio, location, name, html_url, avatar_url, followers, following, public_repos }, repos, loading } = githubContext;

    useEffect(() => {
        githubContext.getUser(match.params.login);
        githubContext.getUserRepos(match.params.login);
    }, [])


    if (loading) {
        return (
            <Spinner />
        )
    }
    return (

        <Fragment>
            <div style={{ marginTop: '100px', padding: "30px" }}>
                {/* <Link to="/" className="btn btn-light " >Back to Home</Link> */}
                Hireable  : {'  '}

                {hireable ? (<i className="fas fa-check text-success" style={{ marginLeft: "10px" }} />) :
                    (<i className="fas fa-times-circle text-danger" style={{ marginLeft: "10px" }} />)}


                <div className="card-group text-center grid-2" style={{ boxShadow: "10px 10px 5px #aaaaaa", padding: "15px", backgroundColor: "#6699cc" }}>

                    <div className="all-center " style={{ backgroundColor: "#6699cc", padding: "10px" }} >

                        <img

                            src={avatar_url}
                            className="rounded-circle z-depth-1 img-fluid"
                            alt=""
                            style={{ width: "300px" }}
                        />


                    </div>
                    <div style={{ padding: "15px", backgroundColor: "#6699cc" }}>
                        {bio && <Fragment>
                            <h3 style={{}}>Bio</h3>
                            <p style={{}}>{bio}</p>
                        </Fragment>}

                        <h2 style={{ marginTop: "30px" }}>{name}</h2>
                        <h4 style={{}}>{location}</h4>

                        <button style={{ backgroundColor: "#222222" }}>
                            <a href={html_url}>visit github profile</a></button>
                    </div>

                </div>
                <div className="card-group-center  text-center mt-4" style={{ padding: "10px", margin: "5px", boxShadow: "10px 10px 5px #aaaaaa", backgroundColor: "#5A86AD" }} >
                    <div className="badge badge-primary" style={{ padding: "10px", margin: "5px" }}>Followers:{followers}</div>
                    <div className="badge badge-success" style={{ padding: "10px", margin: "5px" }}>Following:{following}</div>
                    <div className="badge badge-danger" style={{ padding: "10px", margin: "5px" }}>Public Repos:{public_repos}</div>


                </div>
                <div className="card   mt-4" >
                    {repos.map(repo => (

                        <div className="card" style={{ padding: "10px", boxShadow: "10px 10px 5px #aaaaaa", backgroundColor: "#ECF0F4" }} key={repo.id}><h3 style={{ color: "#86788y7" }}><a href={repo.html_url}>{repo.name}</a></h3></div>
                    ))}


                </div>
            </div>
        </Fragment>

    )

}
export default User;
