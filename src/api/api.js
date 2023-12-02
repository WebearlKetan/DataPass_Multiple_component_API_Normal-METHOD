let userList = [];

const fetchUserData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    userList = data.users;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

const getUserList = () => {
  return userList;
};

export { fetchUserData, getUserList };
