import React from "react";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";

const UserListe = () => {
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.get().then((response) => {
      setPosts(response.data);
    });
  }, []);
  console.log(posts);
  return (
    <div>
      <section>
        {/*for demo wrap*/}
        <h1>Liste of users</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                <th>Adresse</th>
                <th>Phone</th>
                <th>Website</th>
                <th>company</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.username}</td>
                    <td>{post.email}</td>
                    <td>
                      {post.address.street}
                      {post.address.suite}
                      {post.address.zipcode}
                      {post.address.geo.lat}
                      {post.address.geo.lng}
                    </td>
                    <td>{post.phone}</td>
                    <td> {post.website}</td>
                    <td> {post.company.name}
                      {post.company.catchPhrase}
                      {post.company.bs}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UserListe;
