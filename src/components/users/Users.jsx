import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../layout/HomeNav";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageDetails, setPageDetails] = useState({ per_page: 0, total: 0 });
  const getUsers = async (page) => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=" + page);
      // alert(response)

      const data = await response.json();
      //   alert(JSON.stringify(data) + "this is data");
      setUsers(data.data);
      setPage(page);
      setPageDetails({ per_page: data.per_page, total: data.total });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getUsers(page);
  }, []);
  const deleteUser = async (id) => {
    try {
      const response = await fetch("https://reqres.in/api/users/" + id, {
        method: "DELETE",
      });
      const data = await response.json();
      alert(JSON.stringify(data) + "this is data");
      getUsers(page);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <>
    <HomeNav />
      <div className="j">
        {page > 0 && (
          <button onClick={() => getUsers(page - 1)}>Previous</button>
        )}
        {page * pageDetails.per_page < pageDetails.total && (
          <button onClick={() => getUsers(page + 1)}>next</button>
        )}
      </div>
      <div className="xyz">
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div className="abc">
                <Link to={`/user/${user.id}`}>
                  <div>
                    <h1>{user.first_name}</h1>
                    <h5>{user.email}</h5>
                    <img className="h" src={user.avatar} alt="my-avartar" />
                  </div>
                </Link>
                <div className="btn_g">
                  <button className="g" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                  <li className="g">
                    <Link to="/my_account">Update User</Link>
                  </li>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Users;
