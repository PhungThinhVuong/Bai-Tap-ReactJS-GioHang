import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class BaiTapGioHang extends Component {
  state = {
    spChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };

  renderProduct = () => {
    return dataPhone.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham prod={prod} xemChiTiet={this.xemChiTiet} />
        </div>
      );
    });
  };

  xemChiTiet = (prodClick) => {
    console.log(prodClick);
    //Thay đổi state = prod click
    this.setState({
      spChiTiet: prodClick,
    });
  };


  themGioHang = () => {

  }
  render() {
    let {
      maSP,
      tenSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      giaBan,
    } = this.state.spChiTiet;

    return (
      <div className="container">
        <h3 className="text-center mt-5">Bài Tập Giỏ Hàng</h3>
        <GioHang />
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-3">
          <div className="row">
            <div className="col-4">
              <h3>{tenSP}</h3>
              <img
                src={hinhAnh}
                alt="..."
                height={350}
                className="w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-8">
              <h3>Thông tin chi tiết</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Cam trước</th>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Cam sau</th>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
