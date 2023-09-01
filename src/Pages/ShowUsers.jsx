import axios from "axios";
import { useState, useEffect } from "react";
// import CreateUser from "../components/CreateUser";
// import { UpdateUser } from "../components/UpdateUser";
import { Link } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);

  // function setUsersFunction(user) {
  //   setUsers([user, ...users]);
  // }
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/");
      setUsers(() => setUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>List of Users</h2>
            <p id="fetchUsers">
              Fetch
              <i onClick={getUsers} className="fa-solid fa-arrows-rotate"></i>
            </p>
            <ul className="list-group">
              {users &&
                users.map((user) => (
                  <li
                    key={user._id}
                    className="list-group-item list-group-item-action list-group-item-info"
                  >
                    <div>
                      <img src={user.avatar} alt={user.name} /> {user.email}
                    </div>
                    <div>
                      <i
                        onClick={() => handleDelete(user._id)}
                        className="fa-solid fa-trash"
                      ></i>
                      <Link to={"/users/update/" + user._id}>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
         
        </div>
      </div>
    </>
  );
}
