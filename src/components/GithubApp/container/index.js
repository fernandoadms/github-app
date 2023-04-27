import React, { useState } from 'react';
import GithubAppPresentation from "../presentation";


// TODO: Create a fetch from api github
const GithubAppContainer = () => {
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserData = (username) => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.github.com/users/${username}`
    ).then(
      (response) => {
        if (!response.ok) {
          setLoading(false);
          setError(response);
          setUserInfo(null);
          throw new Error(
            `Ocorreu um erro HTTP. O status é ${response.status}`
          );
        }
        return response.json();
    }).then(
      (actualData) => {
        setUserInfo(actualData)
        setLoading(false);
      }).catch((error) => {
      console.error(error.message);
    }).finally(
    )
  };

  const getUserRepos = async (type) => {
    const response = await fetch(
      `https://api.github.com/users/${userInfo.login}/${type}`
    ).then((response) => response.json());


      if(type === 'repos') {
        setRepos(response);
      }
      
      if(type === 'starred') {
        setStarred(response);
      }
  };

  const handleSearch = (e) => {
    const keyCode = e.wich || e.keyCode;
    
    if(keyCode === 13) {
      getUserData(e.target.value);
      setRepos([]);
      setStarred([]);
    }
  }
  
  const handleRepo = (type) => {
    getUserRepos(type);
  }
  
  return (
    <GithubAppPresentation
      error={error}
      handleRepo={handleRepo}
      handleSearch={handleSearch}
      loading={loading}
      repos={repos}
      starred={starred}
      userInfo={userInfo}
    />
  )
};

export default GithubAppContainer;