import React from "react";
import CrossIcon from "public/assets/icons/black-cross-icon.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { deleteCheckFLMasterListing } from "@/app/Redux-Toolkit/Slices/ProductSlice";
const SelectedFilterDataCM = () => {
  const { checkedFilterCM } = useSelector((e) => e.Product);
  const dispatch = useDispatch();
  return (
    <div className="filter-select-items">
      <ul>
        {checkedFilterCM &&
          Object.entries(checkedFilterCM).map((e) => {
            return e[1].map((list, index) => {
              return (
                <li>
                  <span> {list?.filterName} </span>
                  <Image
                    src={CrossIcon.src}
                    alt="CrossIcon"
                    onClick={() =>
                      dispatch(
                        deleteCheckFLMasterListing({
                          uniqId: list?.uniqId,
                          name: e[0],
                        })
                      )
                    }
                    width={18}
                    height={18}
                  />
                </li>
              );
            });
          })}
      </ul>
    </div>
  );
};

export default SelectedFilterDataCM;
