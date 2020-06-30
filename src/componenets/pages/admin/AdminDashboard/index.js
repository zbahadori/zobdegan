import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminHeader from "../../../partials/admin/containers/Header";
import AdminMenue from "../../../partials/admin/containers/Menu";
import AdminFooter from "../../../partials/admin/containers/Footer";
import Loading from "../../../partials/admin/containers/Loading";
import Alert from "../../../partials/admin/containers/Alert";
import "../../../partials/admin/assets/css/style.css";
import loading01 from "../../../partials/admin/assets/images/loading01.svg";
import loading02 from "../../../partials/admin/assets/images/loading02.svg";
import TotalPayments from "../../../partials/admin/containers/TotalPayments";
import ChargeWallet from "../../../partials/admin/containers/AdminUpdateAlert/ChargeWallet";

export default function Admin() {
  const [usersData, setUsersData] = useState([]);
  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-all-users",
      withCredentials: true,
      method: "get",
    })
      .then((res) => {
        try {
          setUsersData(res.data.users);
        } catch (e) {}

        console.log(res.data);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminMenue />
      <main>
        <Loading></Loading>
        <Alert></Alert>
        <TotalPayments></TotalPayments>
        <ChargeWallet
          title="شارژ کیف پول"
          info="لطفا مبلغ مورد نظر خود را به تومان  وارد نمائید"
          btn_text=" شارژ کیف پول من"
        ></ChargeWallet>
      </main>
      <AdminFooter />
    </div>
  );
}
