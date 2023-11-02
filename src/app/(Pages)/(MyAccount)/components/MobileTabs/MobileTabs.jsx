"use client";
import DeleteModal from "@/app/components/Model/AuthModel/DeleteModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileTabs = ({tabs}) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log(first,"first")
  return (
    <div className="tabs sidebar">
      {tabs?.map((tab, key) => {
        return (
          <>
            <div className={!toggle === true ? "is-active" : null} key={key}>
              <div
                className="custom-li"
                onClick={() => {
                  router.push(tab?.path);
                  setFirst(tab?.id);
                  if (tab?.id === 6) {
                    setShow(true);
                  }
                }}
              >
                <input type="radio" name="tabs" id={tab?.id} />
                {tab?.icon}
                <label htmlFor={tab?.id}>{tab?.title}</label>
              </div>
              {tab?.id === first && <div className="tab">{tab?.content}</div>}
            </div>
            {show && (
              <DeleteModal
                logout
                showDeleteModal={show}
                setshowDeleteModal={setShow}
                // deleteId={deleteId}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default MobileTabs;
