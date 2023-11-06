"use client";
import DeleteModal from "@/app/components/Model/AuthModel/DeleteModal";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileTabs = ({ tabs, children }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(0);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <div className="tabs sidebar">
      {tabs?.map((tab, key) => {
        return (
            <div
              className={(pathname === tab.pathName) ? "is-active" : ""}
              key={key}
            >
              <div
                className="custom-li"
                onClick={() => {
                  alert();
                  router.push(tab?.pathName);
                  // setFirst(tab?.id);
                  if (tab?.id === 6) {
                    setShow(true);
                  }
                }}
              >
                <input type="radio" name="tabs" id={tab?.id} />
                {tab?.icon}
                <label htmlFor={tab?.id}>{tab?.title}</label>
              </div>
              {tab?.id === key && <div className="tab">{children}</div>}
            </div>
        );
      })}
      {show && (
        <DeleteModal
          logout
          showDeleteModal={show}
          setshowDeleteModal={setShow}
          // deleteId={deleteId}
        />
      )}
    </div>
  );
};

export default MobileTabs;
