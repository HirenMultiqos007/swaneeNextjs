import { notification } from "@/app/components/Data/data";
import Image from "next/image";
import React from "react";

const MyNotification = () => {
  return (
    <div className="table-content">
      <div className="title-wraper">
        <div className="table-title">Notification</div>
      </div>
      <div className="content-wrapper">
        <ul className="notification-wrapper">
          {notification?.map((nd, key) => {
            return (
              <li key={key}>
                <div className="left-content">
                  <div className="icon-wrapper">
                    <Image src={nd.image} alt="notification-image" />
                    {nd.status === "unread" && <div className="not-read"></div>}
                  </div>
                  <div className="notification-detail">
                    <div className="inner-title">{nd.title}</div>
                    <p>{nd.detail}</p>
                  </div>
                </div>

                <div className="date-time">
                  <span>{nd.datetime}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyNotification;
