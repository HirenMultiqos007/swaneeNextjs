"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import MyAccountIcon from "public/assets/icons/myaccount-user.svg";
import MyOrderHistoryIcon from "public/assets/icons/myaccount-order-histroy.svg";
import MyAddressIcon from "public/assets/icons/myaccount-address.svg";
import MyWishlistIcon from "public/assets/icons/myaccount-wishlist.svg";
import MyNotificationIcon from "public/assets/icons/myaccount-notification.svg";
import MySettingsIcon from "public/assets/icons/myaccount-setting.svg";
import MyLogoutIcon from "public/assets/icons/myaccount-logout.svg";
import { useDispatch } from "react-redux";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import MobileTabs from "@/app/(Pages)/(MyAccount)/components/MobileTabs/MobileTabs";
import { PersonalDetailThunk } from "@/app/Redux-Toolkit/Thunks/MyAccountThunk";
import { tabs } from "../Data/data";

const MyAccountLayout = ({ children }) => {
  const desktopTabs = [
    {
      id: 0,
      title: "Personal Details",
      pathName: "/personal-account",
      image: (
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4777 23.9987C7.88747 23.9987 5.69797 23.7136 3.5837 22.9502C2.73231 22.6411 1.92468 22.2462 1.22377 21.6597C0.433796 20.9975 -0.030668 20.1962 0.00157573 19.1097C0.082185 16.4006 1.06715 14.0917 2.93499 12.1552C3.33957 11.7356 3.89846 11.7202 4.29844 12.0895C4.39187 12.1769 4.46677 12.2823 4.51862 12.3995C4.57047 12.5168 4.5982 12.6433 4.60014 12.7717C4.60208 12.9 4.57818 13.0273 4.52989 13.1461C4.4816 13.2649 4.40992 13.3725 4.31916 13.4627C3.42555 14.4038 2.74459 15.4717 2.32312 16.7081C2.04291 17.5372 1.92776 18.3934 1.89551 19.2581C1.88092 19.6584 2.12582 19.9396 2.41755 20.1799C2.96339 20.6343 3.59598 20.931 4.26005 21.1683C5.57437 21.6412 6.93321 21.8923 8.32276 22.0012C10.609 22.1805 12.8707 22.0662 15.0955 21.4673C15.7445 21.2996 16.3744 21.0642 16.9748 20.7649C17.2568 20.621 17.5253 20.4519 17.7771 20.2595C18.2085 19.928 18.415 19.5363 18.3744 18.9459C18.2891 17.7134 17.9951 16.5543 17.4255 15.464C17.0599 14.7632 16.5917 14.1216 16.0367 13.5608C15.7688 13.2888 15.5799 12.982 15.6643 12.5802C15.6925 12.4071 15.7697 12.2458 15.8867 12.1157C16.0037 11.9857 16.1554 11.8923 16.3238 11.8469C16.4938 11.7917 16.6759 11.7865 16.8487 11.8318C17.0215 11.8771 17.1779 11.9711 17.2996 12.1027C18.0922 12.8888 18.7484 13.8029 19.2411 14.8072C19.8974 16.1512 20.2541 17.6233 20.2859 19.1205C20.3151 20.1823 19.8691 20.9751 19.0983 21.6288C18.0934 22.4788 16.8988 22.9424 15.6551 23.2909C13.8464 23.7971 12.0001 24.0204 10.4777 23.9987Z"
            fill="#E83647"
          ></path>
          <path
            d="M10.0771 0.000901251C13.6487 -0.0546697 16.618 2.97318 16.5741 6.57603C16.5317 10.0955 13.5808 12.9914 10.081 12.9945C6.55496 12.9945 3.55632 10.0315 3.58022 6.43401C3.60412 2.98167 6.50715 -0.0600725 10.0771 0.000901251ZM10.0355 11.0726C12.5962 11.0781 14.6734 9.0883 14.6557 6.46103C14.6372 3.86231 12.6039 1.88105 10.0347 1.9073C7.39001 1.93662 5.4855 4.01899 5.50092 6.48804C5.52097 9.27277 7.72234 11.048 10.0355 11.0726V11.0726Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
    {
      id: 1,
      title: "Order History",
      pathName: "/order-history",
      image: (
        <svg
          width="19"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7831 12.899C18.7831 15.7851 18.7831 18.6713 18.7831 21.5574C18.7831 22.9603 17.7441 23.9993 16.3427 24H2.45568C1.05213 24 0.0109313 22.9617 0.0109313 21.5625C0.0109313 15.7715 0.0240281 9.98054 1.7173e-05 4.18954C-0.00507605 2.87986 1.12344 1.66767 2.47387 1.73971C2.73653 1.75353 3.00065 1.73461 3.26332 1.74407C3.44231 1.75062 3.50488 1.67713 3.49979 1.50323C3.49106 1.22165 3.49324 0.940069 3.49979 0.659214C3.50852 0.258305 3.77846 -0.00144912 4.17428 6.08285e-06C4.57009 0.00146129 4.83276 0.26267 4.84076 0.667217C4.84658 0.939341 4.85022 1.21219 4.84076 1.48359C4.83494 1.66476 4.88733 1.74844 5.08524 1.7448C5.63894 1.73534 6.19265 1.7368 6.74635 1.7448C6.92098 1.7448 6.99301 1.68659 6.98646 1.50833C6.97773 1.22675 6.98064 0.945163 6.98646 0.664308C6.99447 0.261216 7.2615 0.000734397 7.65659 0.000734397C8.05167 0.000734397 8.3187 0.261215 8.32744 0.66358C8.33326 0.945405 8.33326 1.22675 8.32744 1.5076C8.32744 1.6604 8.36454 1.74553 8.5399 1.74407C9.11082 1.73825 9.68248 1.73825 10.2549 1.74407C10.4258 1.74407 10.4731 1.67131 10.4731 1.51197C10.4666 1.23111 10.468 0.949528 10.4731 0.667945C10.4811 0.264126 10.746 0.0021896 11.1396 0.000734397C11.5333 -0.00072081 11.8054 0.259033 11.8141 0.659214C11.8207 0.950256 11.8199 1.2413 11.8141 1.53234C11.8141 1.67786 11.8687 1.74625 12.0215 1.7448C12.5934 1.74116 13.1653 1.73971 13.7372 1.7448C13.9038 1.7448 13.962 1.67786 13.9554 1.51706C13.9489 1.2362 13.9504 0.954621 13.9554 0.673039C13.9627 0.267036 14.2247 0.0043709 14.6176 0.00146049C15.025 0.00146049 15.2899 0.261214 15.2971 0.683224C15.3015 0.909509 15.2971 1.13652 15.2971 1.36353C15.2971 1.74262 15.2971 1.73534 15.6893 1.74553C16.0961 1.75571 16.5057 1.70041 16.9102 1.79282C17.4419 1.91144 17.9171 2.20793 18.2574 2.63328C18.5977 3.05862 18.7826 3.58736 18.7816 4.13207C18.7845 7.05412 18.785 9.97642 18.7831 12.899ZM9.41302 8.31506H1.70916C1.35554 8.31506 1.35481 8.31506 1.35481 8.67886C1.35481 12.899 1.35481 17.1191 1.35481 21.3392C1.35481 22.2385 1.77391 22.6598 2.67032 22.6598H16.1179C17.0172 22.6598 17.4378 22.2399 17.4385 21.3435C17.4385 17.1157 17.4407 12.8876 17.445 8.65921C17.445 8.37617 17.3577 8.31214 17.0885 8.3136C14.5303 8.31942 11.9713 8.31578 9.41302 8.31578V8.31506ZM9.37737 6.97335H13.5975C14.7864 6.97335 15.9753 6.97335 17.1627 6.97335C17.3497 6.97335 17.4443 6.93552 17.4414 6.71942C17.4319 5.90305 17.4465 5.08595 17.4348 4.26958C17.4247 3.5951 17.071 3.18618 16.4162 3.10542C16.1033 3.06758 15.7825 3.09232 15.4652 3.08868C15.3095 3.08868 15.2957 3.18982 15.2957 3.30696C15.2957 3.598 15.3015 3.88904 15.2957 4.18009C15.2977 4.26633 15.2821 4.35209 15.2498 4.43209C15.2176 4.5121 15.1693 4.58467 15.108 4.64537C15.0467 4.70606 14.9736 4.7536 14.8933 4.78507C14.813 4.81654 14.7271 4.83128 14.6408 4.82838C14.245 4.83348 13.9678 4.57299 13.9584 4.1779C13.9511 3.89705 13.9504 3.61546 13.9584 3.33388C13.9627 3.16872 13.9191 3.08213 13.7313 3.08432C13.1691 3.09208 12.6065 3.09208 12.0433 3.08432C11.8585 3.08432 11.8083 3.1629 11.8134 3.3317C11.8214 3.6031 11.8185 3.87595 11.8134 4.14807C11.8061 4.56935 11.5405 4.83202 11.1323 4.82838C10.7409 4.82838 10.4775 4.56135 10.4717 4.15535C10.4666 3.87377 10.4651 3.59291 10.4717 3.31133C10.476 3.14907 10.4149 3.08359 10.2534 3.08504C9.68151 3.09086 9.10961 3.09014 8.53844 3.08504C8.38419 3.08504 8.32889 3.15053 8.3318 3.29896C8.33689 3.59 8.33762 3.88104 8.3318 4.17208C8.32234 4.57154 8.05095 4.83202 7.65586 4.82693C7.26077 4.82183 7.00102 4.56208 6.99083 4.15826C6.98501 3.8774 6.98428 3.59582 6.99083 3.31424C6.99447 3.15708 6.94281 3.08213 6.77255 3.08359C6.20138 3.08941 5.62948 3.08868 5.05759 3.08359C4.9077 3.08359 4.8444 3.14107 4.84658 3.29314C4.85168 3.58418 4.8524 3.87522 4.84658 4.16626C4.83785 4.5679 4.57009 4.82911 4.17573 4.82838C3.78137 4.82765 3.51361 4.56572 3.50561 4.16481C3.49979 3.88323 3.49688 3.60164 3.50561 3.32079C3.51143 3.14107 3.43867 3.07704 3.26477 3.08504C3.05595 3.0945 2.84713 3.08504 2.63831 3.08504C1.79574 3.09086 1.36573 3.52161 1.36282 4.36417C1.36282 5.11724 1.37446 5.87104 1.35554 6.62338C1.34899 6.90059 1.4283 6.97627 1.70697 6.97481C4.25868 6.96681 6.81839 6.97335 9.37737 6.97335Z"
            fill="#E83647"
          ></path>
          <path
            d="M9.42239 11.328C11.1453 11.328 12.8673 11.328 14.5884 11.328C15.0409 11.328 15.3072 11.6045 15.292 12.0389C15.2898 12.2037 15.224 12.3613 15.1083 12.4787C14.9926 12.5961 14.8361 12.6643 14.6713 12.669C14.6255 12.669 14.5804 12.669 14.5353 12.669H4.25422C3.7871 12.669 3.51134 12.4369 3.49678 12.0382C3.48078 11.6147 3.74417 11.3302 4.172 11.3273C4.83339 11.3215 5.49551 11.3273 6.15763 11.3273L9.42239 11.328Z"
            fill="#E83647"
          ></path>
          <path
            d="M9.4283 14.8139C11.1513 14.8139 12.8733 14.8139 14.5943 14.8139C15.14 14.8139 15.4674 15.3233 15.2309 15.7904C15.1796 15.9026 15.0961 15.9971 14.9911 16.0618C14.8861 16.1266 14.7642 16.1587 14.6408 16.1542H13.0656C10.1178 16.1542 7.17054 16.1542 4.22375 16.1542C3.77118 16.1542 3.50051 15.9032 3.49615 15.4921C3.49178 15.081 3.7559 14.8139 4.17646 14.8125C5.26786 14.8081 6.35272 14.8125 7.44121 14.8125L9.4283 14.8139Z"
            fill="#E83647"
          ></path>
          <path
            d="M9.39262 18.2992C11.1248 18.2992 12.857 18.2992 14.5892 18.2992C15.0519 18.2992 15.3226 18.5902 15.2949 19.0348C15.2866 19.1901 15.222 19.3371 15.1133 19.4483C15.0046 19.5596 14.8592 19.6275 14.7041 19.6395C14.659 19.6395 14.6139 19.6395 14.5688 19.6395C11.1224 19.6395 7.6762 19.6395 4.23027 19.6395C3.78643 19.6395 3.51213 19.4008 3.49685 19.0115C3.48011 18.5881 3.74278 18.3014 4.16915 18.2978C4.88584 18.2919 5.60181 18.2978 6.3185 18.2978L9.39262 18.2992Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "My Address",
      pathName: "/my-address",
      image: (
        <svg
          width="21"
          height="26"
          viewBox="0 0 21 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53831 16.1056C6.92888 15.3978 6.38174 14.743 5.8084 14.1081C4.61964 12.8098 3.84229 11.1884 3.57453 9.44854C3.04933 6.17984 4.85427 2.92106 7.90637 1.61018C12.1915 -0.230147 17.0556 2.26066 18.0282 6.82254C18.4904 8.99625 17.963 11.0057 16.8135 12.8687C16.2685 13.7521 15.5282 14.4833 14.8579 15.2682C13.8266 16.4765 12.7811 17.6748 11.7435 18.8781C11.7045 18.9234 11.6762 18.9772 11.626 19.0515C11.8815 19.1067 12.1172 19.0727 12.3493 19.0791C12.4993 19.0705 12.6493 19.0947 12.7889 19.1499C12.9048 19.2071 12.9996 19.2996 13.0598 19.414C13.1199 19.5285 13.1423 19.659 13.1237 19.7869C13.1025 19.9193 13.0357 20.0401 12.9347 20.1283C12.8337 20.2165 12.7049 20.2665 12.5709 20.2697C11.4143 20.2753 10.2582 20.2753 9.10259 20.2697C8.95555 20.2635 8.81639 20.2016 8.71352 20.0963C8.61065 19.9911 8.55183 19.8505 8.54907 19.7034C8.54595 19.5465 8.6042 19.3946 8.71141 19.2799C8.81862 19.1653 8.96634 19.0971 9.12311 19.0897C9.35103 19.0699 9.58178 19.0897 9.81111 19.0791C9.8819 19.0791 9.98878 19.1216 10.0235 19.031C10.0518 18.9602 9.96612 18.9106 9.92082 18.859C9.53436 18.4116 9.14222 17.9685 8.76 17.5141C8.71416 17.4557 8.65489 17.4093 8.58723 17.3787C8.51958 17.3481 8.44553 17.3344 8.37141 17.3386C7.18794 17.3428 6.00447 17.3457 4.82171 17.3386C4.60936 17.3386 4.50885 17.4143 4.44444 17.6153C3.81826 19.5637 3.18641 21.5107 2.54891 23.4563C2.47388 23.6835 2.52059 23.7465 2.76125 23.7465C8.14774 23.7413 13.5342 23.7413 18.9207 23.7465C19.155 23.7465 19.2109 23.6905 19.1331 23.4577C18.4941 21.5126 17.8618 19.5659 17.2361 17.6175C17.1717 17.4164 17.0747 17.3343 16.8603 17.3393C16.3648 17.3513 15.8693 17.3563 15.3738 17.3393C14.8614 17.3174 14.5839 16.9358 14.7439 16.5062C14.8359 16.2585 15.0114 16.1141 15.2825 16.1134C16.0611 16.1134 16.8362 16.1084 17.6134 16.1134C17.9489 16.1134 18.1145 16.3342 18.2094 16.6251C18.5048 17.5311 18.7997 18.4371 19.0941 19.3431C19.6061 20.9206 20.1172 22.4988 20.6273 24.0777C20.8056 24.6334 20.5345 24.9908 19.9428 24.9908C13.8763 24.9908 7.80988 24.9939 1.74341 25C1.23095 25 0.85864 24.6086 1.05187 24.0345C1.85949 21.628 2.62818 19.203 3.41174 16.7858C3.60568 16.1877 3.71397 16.1105 4.3411 16.1105H7.53902L7.53831 16.1056ZM10.7794 2.25075C10.3768 2.24165 9.97448 2.28062 9.58107 2.36684C7.06974 2.86231 5.03405 5.02823 4.77357 7.57708C4.5768 9.50588 5.11474 11.2733 6.33077 12.7703C7.73579 14.5038 9.23282 16.1601 10.6888 17.8553C10.8226 18.0117 10.8877 17.9806 11.0052 17.8411C11.483 17.2749 11.9728 16.7178 12.4569 16.1565C13.4295 15.024 14.4459 13.9297 15.3632 12.759C16.546 11.2443 17.1278 9.49243 16.8978 7.56363C16.5156 4.38978 13.7699 2.20545 10.7794 2.25075Z"
            fill="#E83647"
            stroke="#E83647"
            stroke-width="0.2"
          ></path>
          <path
            d="M10.8343 11.2769C10.4429 11.2805 10.0546 11.2064 9.69201 11.0587C9.32945 10.911 8.99984 10.6928 8.72233 10.4167C8.44482 10.1405 8.22494 9.81204 8.07546 9.45021C7.92598 9.08839 7.84989 8.70048 7.85159 8.309C7.85159 6.64634 9.17663 5.34678 10.8676 5.34961C12.5253 5.34961 13.8234 6.66828 13.8199 8.34227C13.8164 9.97662 12.4913 11.279 10.8343 11.2769ZM12.5784 8.31962C12.5777 7.97588 12.4753 7.64004 12.2841 7.35437C12.0929 7.06871 11.8215 6.84599 11.504 6.71427C11.1865 6.58254 10.8371 6.54769 10.4999 6.61411C10.1626 6.68052 9.85256 6.84523 9.60871 7.08751C9.36487 7.32978 9.19816 7.63877 9.12956 7.9756C9.06097 8.31242 9.09355 8.66201 9.22322 8.98035C9.3529 9.29869 9.57385 9.57155 9.85828 9.76457C10.1427 9.9576 10.4779 10.0622 10.8216 10.0651C11.2858 10.0658 11.7314 9.88255 12.0607 9.55537C12.39 9.22819 12.5761 8.78382 12.5784 8.31962Z"
            fill="#E83647"
            stroke="#E83647"
            stroke-width="0.2"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "My Wishlist",
      pathName: "/my-whishlist",
      image: (
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.18107C0.116134 6.49155 0.223592 5.79939 0.471878 5.14145C1.46369 2.50243 3.28779 0.742435 6.11505 0.166077C8.76744 -0.374095 11.0387 0.416095 12.8995 2.35176C13.1022 2.55971 13.2921 2.77941 13.4682 3.00971C13.6104 3.19854 13.6931 3.16367 13.8233 2.99852C14.5908 2.02411 15.5099 1.22208 16.6425 0.68322C17.9774 0.044357 19.383 -0.116839 20.8434 0.10423C22.4303 0.330629 23.8943 1.07549 25.0008 2.21952C26.2322 3.46961 26.9364 4.98288 27.1994 6.70406C27.397 7.93416 27.3301 9.19147 27.0031 10.3945C26.6387 11.7248 25.9786 12.9072 25.1483 14.0007C23.8902 15.6567 22.3718 17.0686 20.7986 18.4227C18.8124 20.1333 16.808 21.8203 14.8117 23.5178C14.0582 24.1586 13.2286 24.1606 12.4811 23.5244C10.3179 21.6821 8.1227 19.8761 5.99491 17.9944C4.5933 16.7541 3.23707 15.4659 2.1091 13.9678C1.152 12.696 0.430496 11.3123 0.12481 9.74113C0.0780897 9.50164 0.041381 9.25951 0 9.01739V7.18107ZM7.67551 1.63987C7.52534 1.65171 7.37517 1.66619 7.22433 1.67474C5.87744 1.7458 4.70008 2.23136 3.72029 3.13801C2.18518 4.56048 1.60118 6.35469 1.65658 8.39563C1.69729 9.9089 2.24659 11.2432 3.08622 12.4795C4.13744 14.027 5.47565 15.3205 6.86725 16.5587C9.02908 18.4832 11.2723 20.3176 13.4675 22.2013C13.607 22.321 13.6891 22.3144 13.8226 22.2013C16.2494 20.111 18.7503 18.1042 21.1063 15.9343C22.289 14.8441 23.4003 13.6901 24.2953 12.3499C25.5167 10.5228 25.9452 8.54104 25.4527 6.39417C24.8026 3.56501 22.3972 1.44183 19.2182 1.67474C18.0835 1.7583 17.0924 2.18531 16.2214 2.90049C15.5446 3.45579 15.02 4.13216 14.5381 4.85261C14.0789 5.54082 13.2259 5.5316 12.7494 4.85261C12.5365 4.55127 12.3389 4.23743 12.106 3.95123C10.966 2.5531 9.54767 1.66882 7.67218 1.63921L7.67551 1.63987Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Notification",
      pathName: "/my-notification",
      image: (
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5691 13.6597L19.6691 6.82374C19.1122 4.82107 17.9019 3.06202 16.2305 1.82621C14.5591 0.59039 12.5226 -0.0512763 10.4446 0.00320383C8.36666 0.0576839 6.36655 0.805184 4.76221 2.12689C3.15786 3.44859 2.04135 5.26864 1.59014 7.29774L0.119142 13.9127C-0.0433426 14.6437 -0.0395859 15.4018 0.130135 16.1311C0.299855 16.8603 0.631206 17.5422 1.09972 18.1263C1.56824 18.7104 2.16196 19.1818 2.83705 19.5057C3.51214 19.8296 4.25137 19.9978 5.00014 19.9977H6.11414C6.34366 21.128 6.95687 22.1442 7.84988 22.8741C8.7429 23.604 9.86079 24.0028 11.0141 24.0028C12.1675 24.0028 13.2854 23.604 14.1784 22.8741C15.0714 22.1442 15.6846 21.128 15.9141 19.9977H16.7521C17.523 19.9978 18.2833 19.8196 18.9739 19.4772C19.6645 19.1347 20.2665 18.6372 20.733 18.0236C21.1994 17.41 21.5177 16.6968 21.6629 15.9398C21.8082 15.1828 21.7764 14.4024 21.5701 13.6597H21.5691ZM11.0141 21.9977C10.3959 21.9952 9.79351 21.8017 9.28944 21.4436C8.78537 21.0856 8.40423 20.5806 8.19814 19.9977H13.8301C13.6241 20.5806 13.2429 21.0856 12.7388 21.4436C12.2348 21.8017 11.6324 21.9952 11.0141 21.9977ZM19.1401 16.8127C18.8615 17.1824 18.5005 17.482 18.0857 17.6877C17.671 17.8934 17.2141 17.9996 16.7511 17.9977H5.00014C4.55093 17.9977 4.10746 17.8967 3.70248 17.7023C3.2975 17.5079 2.94135 17.2251 2.6603 16.8746C2.37926 16.5242 2.1805 16.1151 2.0787 15.6776C1.9769 15.2401 1.97466 14.7852 2.07214 14.3467L3.54214 7.73074C3.89649 6.13694 4.77345 4.70734 6.0336 3.66919C7.29375 2.63103 8.86477 2.04391 10.4969 2.00115C12.1291 1.95839 13.7287 2.46245 15.0414 3.43321C16.3542 4.40396 17.3048 5.78568 17.7421 7.35874L19.6421 14.1947C19.7677 14.6401 19.7877 15.1086 19.7005 15.5631C19.6134 16.0175 19.4215 16.4454 19.1401 16.8127Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Settings",
      pathName: "/setting",
      image: (
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.44375 24C8.65197 23.7696 8.19999 23.2434 8.04933 22.4357C7.9625 21.9663 7.84047 21.5082 7.74378 21.0427C7.73303 20.9664 7.70208 20.8943 7.65414 20.834C7.6062 20.7737 7.543 20.7273 7.47109 20.6996C6.92107 20.456 6.39973 20.1522 5.91662 19.7937C5.86532 19.7527 5.80397 19.7261 5.73893 19.7168C5.67389 19.7074 5.60754 19.7157 5.54677 19.7407C5.05818 19.9012 4.56631 20.0533 4.0749 20.2063C3.10946 20.5071 2.33833 20.2105 1.82627 19.3366C1.29904 18.4336 0.775093 17.5287 0.254432 16.6219C-0.192386 15.8432 -0.0375015 14.9412 0.629908 14.3465C1.03167 13.9879 1.42216 13.6171 1.82204 13.2562C1.86448 13.2222 1.8975 13.1779 1.91796 13.1276C1.93841 13.0772 1.94563 13.0224 1.93891 12.9685C1.87602 12.3317 1.87602 11.6903 1.93891 11.0536C1.94668 10.9997 1.94045 10.9447 1.9208 10.8939C1.90115 10.843 1.86876 10.7982 1.82674 10.7635C1.41794 10.3979 1.02181 10.0229 0.615359 9.65773C-0.0299919 9.07668 -0.1891 8.17554 0.239882 7.42036C0.781194 6.47134 1.32876 5.52577 1.88259 4.58363C2.32096 3.83643 3.12167 3.52479 3.95616 3.77354C4.48652 3.93171 5.01454 4.09927 5.5402 4.27246C5.60462 4.29838 5.67483 4.30648 5.74345 4.29591C5.81208 4.28534 5.8766 4.25648 5.93023 4.21238C6.41343 3.85409 6.93514 3.55089 7.48564 3.30842C7.64053 3.24083 7.70858 3.13711 7.74237 2.97988C7.86065 2.43121 7.97705 1.88255 8.11363 1.33717C8.31826 0.511118 8.98332 0.000938692 9.83659 0C10.9217 0 12.0067 0 13.0915 0C13.9809 0 14.6371 0.516281 14.845 1.38833C14.9717 1.91916 15.0947 2.45092 15.2069 2.9841C15.2406 3.14556 15.3096 3.24083 15.4641 3.30842C16.0077 3.54693 16.5227 3.84607 16.9993 4.20018C17.0588 4.24956 17.1307 4.28185 17.2071 4.29358C17.2836 4.30532 17.3618 4.29607 17.4334 4.26682C17.8985 4.10912 18.3688 3.96597 18.8368 3.81625C19.8257 3.49991 20.602 3.79231 21.1248 4.68736C21.6477 5.5824 22.1677 6.4826 22.6845 7.38281C23.1257 8.15066 23.013 8.99079 22.3742 9.60704C21.9758 9.99237 21.5632 10.3627 21.1539 10.7335C21.0352 10.841 20.9925 10.9437 21.0084 11.1174C21.0629 11.7078 21.0629 12.302 21.0084 12.8925C20.9925 13.0652 21.0328 13.1694 21.1525 13.2769C21.5468 13.6317 21.9406 13.9879 22.3259 14.354C23.0299 15.027 23.1421 15.8484 22.6544 16.6876C22.1292 17.5916 21.6097 18.4993 21.0812 19.4018C20.6217 20.1866 19.8299 20.4935 18.956 20.2288C18.4482 20.0749 17.9428 19.9139 17.44 19.7459C17.2771 19.6919 17.1467 19.7036 17.0049 19.8083C16.5145 20.1702 15.9856 20.4768 15.4279 20.7226C15.3738 20.7432 15.3261 20.7778 15.2897 20.8228C15.2533 20.8678 15.2294 20.9216 15.2205 20.9788C15.12 21.4435 14.9914 21.903 14.9112 22.3709C14.7704 23.197 14.3292 23.7494 13.5224 23.9977L9.44375 24ZM21.3745 8.30179C21.3723 8.23114 21.3489 8.16279 21.3074 8.1056C20.7996 7.22746 20.288 6.35166 19.7867 5.46976C19.6731 5.26982 19.5408 5.22194 19.3254 5.29281C18.6814 5.5059 18.0304 5.69833 17.387 5.91282C17.0434 6.02734 16.7515 5.97383 16.4708 5.7462C15.8415 5.23104 15.1326 4.82159 14.3719 4.53388C14.0673 4.41936 13.8913 4.20769 13.8218 3.89088C13.673 3.21361 13.5111 2.53916 13.3651 1.86096C13.3182 1.63473 13.2098 1.52678 12.9685 1.52866C11.9691 1.53586 10.9701 1.53586 9.9713 1.52866C9.74319 1.52866 9.63618 1.62253 9.58925 1.84406C9.44845 2.51522 9.28042 3.18076 9.13868 3.85192C9.06546 4.19783 8.88054 4.42405 8.552 4.54749C7.80557 4.82861 7.11079 5.23127 6.49579 5.73916C6.20996 5.97383 5.91099 6.02969 5.5571 5.91141C4.90659 5.69317 4.24903 5.49557 3.59617 5.2853C3.41876 5.22851 3.29016 5.24353 3.18596 5.42611C2.68063 6.31442 2.16842 7.19914 1.64933 8.08026C1.53105 8.28067 1.56015 8.41631 1.72771 8.56603C2.22193 9.00816 2.70113 9.46764 3.19864 9.90601C3.49761 10.1698 3.5957 10.4744 3.53516 10.8668C3.41869 11.6157 3.4179 12.378 3.53281 13.1271C3.59805 13.5495 3.48259 13.8649 3.16203 14.1423C2.68517 14.5568 2.22568 14.9928 1.76197 15.4222C1.5273 15.6386 1.52354 15.7038 1.68687 15.9855C2.17499 16.8303 2.67015 17.6704 3.14654 18.5199C3.27045 18.7414 3.40374 18.794 3.63794 18.7161C4.26687 18.5072 4.90518 18.3261 5.53176 18.1111C5.89315 17.9872 6.19823 18.0351 6.49204 18.274C7.11549 18.7838 7.81731 19.1894 8.5703 19.475C8.88148 19.5928 9.06311 19.8083 9.13352 20.1354C9.27807 20.8061 9.43437 21.474 9.58831 22.1423C9.65871 22.4474 9.70142 22.4812 10.0178 22.4817C10.9856 22.4817 11.9533 22.4817 12.9211 22.4817C13.2497 22.4817 13.2929 22.446 13.3656 22.1283C13.5196 21.4524 13.6749 20.7761 13.8265 20.0993C13.895 19.7914 14.0757 19.5914 14.3695 19.4783C15.1299 19.1895 15.8384 18.7793 16.4675 18.2637C16.7463 18.0337 17.0415 17.9844 17.3846 18.0984C18.0281 18.3125 18.6791 18.5054 19.323 18.7185C19.537 18.7889 19.6708 18.7466 19.7853 18.5453C20.2781 17.6763 20.7777 16.8115 21.2839 15.9507C21.4083 15.7395 21.39 15.5879 21.2018 15.4222C20.7212 14.9998 20.2664 14.5474 19.7783 14.1343C19.446 13.8527 19.3559 13.5172 19.4155 13.1116C19.526 12.3781 19.526 11.6322 19.4155 10.8987C19.3535 10.4922 19.4455 10.1571 19.7769 9.87598C20.2645 9.46201 20.7254 9.01707 21.1971 8.58434C21.2825 8.50924 21.3848 8.44025 21.3745 8.30179Z"
            fill="#E83647"
          ></path>
          <path
            d="M16.4838 12.0096C16.5378 14.6004 14.3825 17.0283 11.474 17.0316C8.7973 17.0373 6.43977 14.8989 6.44728 11.9946C6.45339 9.11328 8.79683 6.97682 11.4791 6.98292C14.3774 6.98949 16.5401 9.40756 16.4838 12.0096ZM11.4759 8.55007C9.56139 8.55007 8.00786 10.0881 8.00551 11.9866C8.0027 13.9161 9.53558 15.4448 11.4566 15.4706C13.158 15.4936 14.9298 14.1658 14.9373 12.0171C14.9438 11.5605 14.8588 11.1072 14.6873 10.6839C14.5157 10.2607 14.2611 9.87613 13.9384 9.55294C13.6158 9.22975 13.2316 8.9745 12.8086 8.80225C12.3857 8.63 11.9325 8.54425 11.4759 8.55007Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Logout",
      image: (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.67056e-05 12.0144C1.67056e-05 9.6648 1.67056e-05 7.31494 1.67056e-05 4.9648C-0.000427638 3.64994 0.520903 2.38863 1.44956 1.45779C2.37821 0.526949 3.63829 0.00264997 4.95315 0C7.65617 0 10.3595 0 13.063 0C14.3724 0.0043759 15.627 0.525703 16.5538 1.45053C17.4807 2.37535 18.0048 3.62881 18.012 4.93812C18.012 5.3024 18.017 5.66584 18.012 6.03011C18.015 6.16308 17.9909 6.29526 17.9411 6.41859C17.8913 6.54192 17.8169 6.65381 17.7225 6.74742C17.628 6.84103 17.5154 6.91441 17.3916 6.96306C17.2679 7.01172 17.1355 7.03463 17.0025 7.03041C16.4082 7.03041 15.9856 6.61362 15.9747 6.01594C15.9672 5.56914 15.9747 5.12401 15.9289 4.67721C15.7947 3.33849 14.6785 2.21565 13.3448 2.08645C12.9605 2.04894 12.5779 2.03977 12.1936 2.03977C9.89627 2.03977 7.59837 2.03977 5.29992 2.03977C4.59054 2.03977 3.91617 2.17064 3.32267 2.5941C2.4374 3.22595 2.04979 4.11288 2.04812 5.16986C2.03979 9.72676 2.03979 14.2812 2.04812 18.8331C2.05229 20.386 2.96506 21.5522 4.37297 21.8665C4.66695 21.9292 4.96681 21.9602 5.26741 21.959C7.76314 21.9657 10.2586 21.9657 12.7538 21.959C14.3634 21.959 15.5621 21.0637 15.8814 19.625C16.0039 19.074 15.9722 18.5096 15.9772 17.9486C15.9762 17.7176 16.0567 17.4935 16.2044 17.3158C16.3521 17.138 16.5576 17.018 16.785 16.9767C17.3143 16.8867 17.7853 17.1434 17.9595 17.631C17.9799 17.6788 17.9942 17.7289 18.002 17.7802C18.147 19.6358 17.8736 21.3563 16.404 22.6834C15.4737 23.5244 14.3876 23.9921 13.1247 23.9954C10.39 24.0015 7.65533 24.0015 4.92064 23.9954C2.56077 23.9954 0.465987 22.2191 0.066702 19.895C0.0173131 19.6293 -0.00475089 19.3592 0.000851099 19.089C0.000851099 19.0581 0.000851099 19.0265 0.000851099 18.9956L1.67056e-05 12.0144Z"
            fill="#E83647"
          ></path>
          <path
            d="M21.38 13.0206H21.0041C17.3547 13.0206 13.705 13.0206 10.055 13.0206C9.40316 13.0206 8.98137 12.6038 8.98637 11.9852C8.99137 11.3834 9.41317 10.9849 10.0559 10.9849C13.7153 10.9849 17.3752 10.9849 21.0358 10.9849C21.155 10.9849 21.2858 11.0208 21.4434 10.9249L20.3281 9.82377C20.2118 9.71952 20.1192 9.59153 20.0567 9.44844C19.9941 9.30535 19.963 9.15051 19.9654 8.99436C19.9755 8.59257 20.148 8.28999 20.4981 8.1066C20.6584 8.01751 20.84 7.97378 21.0232 7.98009C21.2065 7.98641 21.3846 8.04253 21.5384 8.14244C21.6515 8.2162 21.7553 8.30323 21.8477 8.40168C22.7613 9.31195 23.6729 10.2236 24.5826 11.1367C25.1662 11.7202 25.1662 12.2928 24.5826 12.8747C23.6582 13.8033 22.7279 14.7252 21.8052 15.6555C21.4826 15.9798 21.1075 16.1081 20.6698 15.9789C19.9471 15.7647 19.7179 14.8669 20.2414 14.2843C20.554 13.9367 20.9007 13.6174 21.2267 13.284C21.2933 13.2123 21.4109 13.1681 21.38 13.0206Z"
            fill="#E83647"
          ></path>
        </svg>
      ),
    },
  ];

  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  console.log(pathname, "PARAMSSSSS");
  const [active, setActive] = useState("Personal Details");
  const [activeTab, setActiveTab] = useState(tabs[0].path);

  useEffect(() => {
    if (pathname === "/personal-account") {
      dispatch(PersonalDetailThunk());
    }
  }, [pathname === "/personal-account"]);

  // const handleLogout = () => {
  //   dispatch({
  //     type: USER_LOGOUT,
  //     payload: {
  //       logout: "Logout",
  //     },
  //   });
  // };

  return (
    <div className="my-account-pages">
      <Container>
        <div className="title">My Account</div>
        <div className="mobile-none">
          <Row>
            <Col lg="3">
              <ul className="sidebar">
                {desktopTabs?.map((list, index) => {
                  return (
                    <li
                      onClick={() => {
                        router.push(list?.pathName);
                      }}
                      id="Personal Details"
                      className={
                        pathname === list?.pathName
                          ? "nav-item custom-li active"
                          : "nav-item custom-li"
                      }
                    >
                      {list.image}
                      {list?.title}
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg="9">{children}</Col>
          </Row>
        </div>
        <div className="desktop-none">
          <MobileTabs tabs={desktopTabs}>
            {children}
          </MobileTabs>
        </div>
      </Container>
    </div>
  );
};

export default MyAccountLayout;
