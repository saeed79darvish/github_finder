import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
  USERS
} from "../types";

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //users

  const mainUsers = async () => {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: USERS,
      payload: res.data
    });
  };

  //search users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //get user

  const getUser = async userName => {
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=
    ${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };

  //get Repos

  const getUserRepos = async userName => {
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=50&sort=created:asc&client_id=
    ${githubClientId}&client_secret=${githubClientSecret}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  //set loading

  // clear user
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  // setAlert
  const setAlert = async (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading,

        searchUsers,
        mainUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setAlert
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
