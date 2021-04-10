import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Request from "../Hooks/Request";
import Error from "./Error";
import Loading from "./Loading";

export default function Home() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const content = null;

  const users = Request(url);

  if (users.loading) {
    return <Loading />;
  }

  if (users.error) {
    return <Error />
  }

  if (users.data) {
    const renderUser = () => {
      return users.data.map((user, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index} style={{ textAlign: "center" }}>
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://randomuser.me/api/portraits/thumb/men/6.jpg"
                  alt="randomPhoto"
                ></img>
              </div>
              <div className="card-body">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text" style={{ fontStyle: "italic" }}>
                  @{user.username}
                </p>
                <a href={user.website}>{user.website}</a>
              </div>
              <div className="card-footer">
                <Link to={`/users/${user.id}`} className="btn btn-success">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <div className="container">
        <h2 style={{ fontSize: "bold" }} className="text-center mt-5">
          USER INFORMATION
        </h2>
        <div className="row">{renderUser()}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}
