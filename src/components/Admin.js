import React, { useState } from "react";
import AdminPanel from "./AdminPanel.js";
import AdminLogin from "./AdminLogin.js";

export default function Admin(props) {
  const { adminDetails, setAdminDetails } = props;
  return (
    <section className="admin-section">
      {adminDetails.login ? (
        <AdminPanel
          adminDetails={adminDetails}
          setAdminDetails={setAdminDetails}
        />
      ) : (
        <AdminLogin
          adminDetails={adminDetails}
          setAdminDetails={setAdminDetails}
        />
      )}
    </section>
  );
}
