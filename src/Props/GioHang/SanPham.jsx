import React, { Component } from "react";

export default class SanPham extends Component {
  render() {

    const {prod,xemChiTiet,themGioHang} = this.props;

    return (
      <div className="card">
        <img
          src={prod.hinhAnh}
          height={350}
          className="w-100"
          style={{ objectFit: "contain" }}
        />
        <div className="card-body">
          <p>{prod.tenSP}</p>
          <p>{prod.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(prod);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ms-3"
            onClick={() => {
              themGioHang(prod);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
