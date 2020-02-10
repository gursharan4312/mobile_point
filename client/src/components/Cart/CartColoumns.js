import React from "react";

export default function CartColoumns() {
  return (
    <div className="contaienr-fluid text-center">
      <div className="row d-none d-md-flex mt-2 font-weight-bold">
        <div className="col-10 col-md-2 text-capitalize">product</div>
        <div className="col-10 col-md-2 text-capitalize">Name</div>
        <div className="col-md-2 text-capitalize">price</div>
        <div className="col-md-2 text-capitalize">quantity</div>
        <div className="col-md-2 text-capitalize">remove</div>
        <div className="col-md-2 text-capitalize">total</div>
      </div>
    </div>
  );
}
