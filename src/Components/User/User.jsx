import React from "react";
import "./User.css";

import logo from "../Assets/logo.png";
import facebook from "../Assets/logo-facebook.png";
import insta from "../Assets/Instagram_icon.png";
import twitter from "../Assets/Logo-Twitter.png";
import youtube from "../Assets/logo-youtube.png";

const User = () => {
  return (
    <div className="">
      <div className="container">
        <div className="user-logo ">
          <img src={logo} alt="" />
          <h1>Cheaming</h1>
          <p>Le your content live longer than the feed</p>
        </div>
      </div>
      <div className="content">
        <table class="table table-borderless ">
          <tbody>
            <tr>
              <td>
                <img className="logo-facebook" src={facebook} alt="" />
              </td>
              <td>
                <div className="content-facebook">
                  <h3>채미닝의 페이스북</h3>
                  <p>https://www.facebook.com/test</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img className="logo-twitter" src={twitter} alt="" />
              </td>
              <td>
                <div className="content-twitter">
                  <h3>닝의 인스타그램</h3>
                  <p>https://www.twitter.com/test</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img className="logo-youtube" src={youtube} alt="" />
              </td>
              <td>
                <div className="content-youtube">
                  <h3>닝의 인스타그램</h3>
                  <p>https://www.youtube.com/test</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img className="logo-insta" src={insta} alt="" />
              </td>
              <td>
                <div className="content-insta">
                  <h3>닝의 인스타그램</h3>
                  <p>https://www.instagram.com/test</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
