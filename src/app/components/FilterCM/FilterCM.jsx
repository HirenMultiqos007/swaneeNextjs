
// import { FITER_OBJECT } from "../../../../Redux/SagaAction/actions";

import { checkFLMasterListing } from "@/app/Redux-Toolkit/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterCM = ({ title, data, name = "name", count }) => {
  const dispatch = useDispatch();
  const {checkedFilterCM} = useSelector((e)=>e.Product)

  return (
    <>
      <div className="filter-box">
        <div className="filter-header">
          <div className="filter-title">{title}</div>
          {/* <Search
                name={title}
                data={data}
                setSearched={setSearched}
                searched={searched}
                /> */}
        </div>
        <div className="filter-list">
          <ul
            className={
              title === "color"
                ? "size-list color-list"
                : title === "size"
                ? "size-list"
                : ""
            }
          >
            {data &&
              data?.map((cc, i) => {
                return (
                  <li
                    key={cc?._id}
                    className={
                      title === "color"
                        ? checkedFilterCM?.[title]?.some((e) => {
                            return e?.uniqId === cc?._id;
                          })
                          ? "active"
                          : ""
                        : title === "size"
                        ? checkedFilterCM?.[title]?.some((e) => {
                            return e?.uniqId === cc?._id;
                          })
                          ? "active"
                          : ""
                        : ""
                    }
                    onClick={() => {
                      if (title === "size") {
                        dispatch(
                          checkFLMasterListing({
                            mainId: {
                              uniqId: cc?._id,
                              filterName: cc?.[name],
                            },
                            name: title,
                          })
                        );
                      }
                    }}
                  >
                    {title === "size" && cc?.name}
                    {title === "size" ? (
                      ""
                    ) : title === "color" ? (
                      <div
                        className="circle"
                        style={{
                          backgroundColor: cc?.name
                            ?.toLowerCase()
                            ?.replace(/-/g, ""),
                        }}
                        onClick={() => {
                          dispatch(
                            checkFLMasterListing({
                              mainId: {
                                uniqId: cc?._id,
                                filterName: cc?.[name],
                              },
                              name: title,
                            })
                          );
                        }}
                      ></div>
                    ) : (
                      <>
                        <div className="custom-checkbox gray-bg">
                          <input
                            checked={checkedFilterCM?.[title]?.some((e) => {
                              return e?.uniqId === cc?._id;
                            })}
                            type="checkbox"
                            id={cc?._id}
                            onChange={(e) => {
                              dispatch(
                                checkFLMasterListing({
                                  mainId: {
                                    uniqId: cc?._id,
                                    filterName: cc?.[name],
                                  },
                                  name: title,
                                })
                              );
                            }}
                          />
                          <label
                            htmlFor={cc?.categoryId ? cc?.categoryId : cc?._id}
                          ></label>
                        </div>
                        <div className="filter-inner-title">{cc?.[name]}</div>
                        {title !== "shippingTime" && (
                          <span>({cc?.[count]})</span>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterCM;
