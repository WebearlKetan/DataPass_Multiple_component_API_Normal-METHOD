import React, { useEffect, useState } from "react";
import { fetchUserData, getUserList } from './api/api.js';

import FirstComponent from "./components/FirstComponent.js";
import SecondComponent from "./components/SecondComponent.js";

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserData().then(() => {
      setUserList(getUserList());
    });
  }, []);

  return (
    <div>
      <h1>Second Component</h1>
      <FirstComponent userList={userList} />
      <SecondComponent userList={userList} />
    </div>
  );
};

export default App;

