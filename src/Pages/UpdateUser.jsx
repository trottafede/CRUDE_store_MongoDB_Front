/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function UpdateUser() {
  const navigate = useNavigate();
  const [id, setID] = useState(useParams().id);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(
    "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg"
  );
  const [dateOfBirth, setDateOfBirth] = useState("");

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/" + id);
      const user = response.data;
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      setAvatar(user.avatar);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/users/${id}`,
        {
          name,
          username,
          email,
          password,
          avatar,
          dateOfBirth,
        }
      );
      console.log(response);
      navigate("/");

      // setUsersFunction(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form id="updateUser" onSubmit={handleUpdateUser}>
            <h2>Update User</h2>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                value={id}
                onChange={(e) => setID(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="avatar" className="form-label">
                Avatar
              </label>
              <input
                type="text"
                className="form-control"
                id="avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateOfBirth" className="form-label">
                Date of Birth
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update user
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
