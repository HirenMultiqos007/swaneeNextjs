"use client";
import { encrypt } from "@/app/Crypto/function";
import {
  getMainCategoryActive,
} from "@/app/Redux-Toolkit/Slices/CategorySlice";
import { ProductListSuccess } from "@/app/Redux-Toolkit/Slices/ProductSlice";
import {
  MainCategoryThunk,
  SubCategoryThunk,
} from "@/app/Redux-Toolkit/Thunks/CategoryThunk";
import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const HeaderMenu = () => {
  const [active, setActive] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const { SC_ID } = useParams();
  const { mainData, subData } = useSelector((e) => e.Category);

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    if (e === active) {
      return;
    }
    setActive(e);
    dispatch(getMainCategoryActive(e));
    if (pathname !== "/") {
      router.push("/productlisting");
    }
  };

  useEffect(() => {
    dispatch(
      MainCategoryThunk({
        callback: (e) => {
          setActive(e);
          dispatch(getMainCategoryActive(e));
        },
      })
    );
  }, []);

  useEffect(() => {
    if (active) {
      dispatch(
        SubCategoryThunk({
          payload: { mainCategoryId: active },
        })
      );
      dispatch(ProductListSuccess([]));
    }
  }, [active]);
  return (
    <div className="header-menu">
      <Container>
        <div className="header-tab">
          <Tabs onSelect={handleSelect} activeKey={active}>
            {mainData?.map((mList) => {
              return (
                <Tab eventKey={mList?._id} title={mList?.mainCategoryName}>
                  <ul className="menu-list">
                    {subData &&
                      subData?.map((list) => {
                        return (
                          <li key={list?.categoryId}>
                            <Link
                              className={SC_ID === list?.categoryId && "active"}
                              href={{
                                pathname: `/productlisting/${list?.categoryId}`,
                                query: {
                                  "SB_NAME":
                                    list?.categoryName.charAt(0).toUpperCase() +
                                    list?.categoryName.slice(1).toLowerCase(),
                                },
                              }}
                            >
                              {list?.categoryName.charAt(0).toUpperCase() +
                                list?.categoryName.slice(1).toLowerCase()}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};
export default HeaderMenu;
