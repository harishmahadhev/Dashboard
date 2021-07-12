import "./user.css";
import React from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Button className="userAddButton"> Create</Button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar src="https://i.pinimg.com/564x/38/3b/f0/383bf0ea0baa4beb7e42a74ceadd8ebd.jpg" />
            <div className="userShowTopTitle">
              <div className="userShowUsername">Vinesh Kumar</div>
              <div className="userShowUserTitle">Software Engineer</div>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <ul className="userInfo">
              <li className="userInfoItem">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">vineshmahadhev</span>
              </li>
              <li className="userInfoItem">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">26.07.2001</span>
              </li>
              <div className="userShowTitle">Contact Details</div>
              <li className="userInfoItem">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+91 8608480658</span>
              </li>
              <li className="userInfoItem">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  vineshmahadhev@gmail.com
                </span>
              </li>
              <li className="userInfoItem">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="userUpdate">
          <h2 className="userUpdateTitle"> Edit</h2>
        </div>
      </div>
    </div>
  );
}
