import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Request from "../Hooks/Request";
import Loading from "./Loading";
import Error from "./Error";

export default function User() {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const content = null;

  const users = Request(url);

  if (users.loading) {
    return <Loading />
  }

  if (users.error) {
    return <Error />
  }

  if (users.data) {
    const renderUser = () => {
      return (
        <div className="card text-center">
          <div className="card-body text-left">
            <p className="card-title" />
            Name: {users.data.name}
            <p className="card-text" />
            Username: {users.data.username}
            <p className="card-text" />
            Email: {users.data.email}
            <p className="card-text" />
            Phone: {users.data.phone}
            <p className="card-text" />
            Company: {users.data.company.name}
            <p className="card-text" href="" />
            Website: <a href={users.data.website}>{users.data.website}</a>
            <p className="card-text" /> Address
            <ul className="card-text">
              <li className="ml-3">Street: {users.data.address.street}</li>
              <li className=" ml-3">Suite: {users.data.address.suite}</li>
              <li className=" ml-3">City: {users.data.address.city}</li>
              <li className=" ml-3">Zipcode: {users.data.address.zipcode}</li>
            </ul>
          </div>
        </div>
      );
    };
    return (
      <div className="container">
        <h1 style={{ fontStyle: "bold" }} className="text-center mt-5">
          USER DETAIL
        </h1>
        <div className="row">{renderUser()}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}
