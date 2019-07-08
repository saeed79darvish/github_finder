import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const SearchPage = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');






    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alertContext.setAlert("Please Enter Something", "danger");
        } else {

            githubContext.searchUsers(text);
            setText("");
        }

    }



    return (
        <div style={{ marginTop: "80px", padding: "40px" }}>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} style={{ width: "100%", marginRight: "10px" }} />

                <input type="submit" value="Search" className="btn btn-dark btn-block" style={{ marginTop: "5px" }} />

            </form>

            {githubContext.users.length > 0 && (
                <button className="btn btn-primary btn-block"
                    style={{ marginTop: "10px" }}
                    onClick={githubContext.clearUsers} >Clear</button>
            )}
        </div>

    )

}

export default SearchPage;