import iphone from "../../images/phone.png";
import Watch from "../../images/smartwatch.png";
import Hear from "../../images/airbouds.png";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import App1 from "../../images/appstore.png";
import App2 from "../../images/appstore.png";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

import "./Cart.css";
import NavBar from "../../components/nav/Nav";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

function Cart() {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) {
      return setCounter(counter - 1);
    } else {
      return setCounter(counter);
    }
  };
  return (
    <>
      <Info />
      <NavBar />
      <div className="cart-page">
        <div className="container">
          <div className="row">
            <div
              className="border-1 col-md-4 col-sm-12 border-1 bg-white rounded rounded-2 mt-4 card h-75"
              dir="rtl"
            >
              {/* col-md-8 col-sm-12 border-1 bg-white rounded rounded-2 */}
              <p className="mx-1 py-4  fw-medium ms-auto">ملخص الطلب </p>
              <div className="mb-5">
                <div className="text d-flex justify-content-between ">
                  <span className="mx-1 gray-text">مجموع المنتجات </span>
                  <span className="mx-2"> 145 ر.س </span>
                </div>
              </div>
              {/* <span className='mx-0'>هل لديك كود خصم </span> */}
              {/* < div className='mx-0 '> */}
              <p className="ms-auto p-2">هل لديك كود خصم </p>
              <div className="mx-0 ">
                <div className="d-flex items-center gap-2">
                  <input
                    type="text"
                    className="mt-1 w-100 mx-0 col-md rounded-3 p-2 "
                    style={{ color: "black" }}
                    placeholder="ادخل كود الخصم "
                  />
                  <button className=" btn btn-sm mt-0 mt-1 add">اضافه</button>
                </div>
                <hr />
              </div>
              <div className="text d-flex justify-content-between">
                <span className="mx-1 mt-2 fw-medium">الاجمالي </span>
                <span className="mx-1 mt-2 fw-medium">145 رس</span>
              </div>{" "}
              {/**/}
              {/* <div className='ms-auto'> */}
              <p className="ms-auto mt-3 mb-2">الاسعار شامله الضريبه </p>
              {/* </div> */}
              <button className="rounded-3 mb-3 p-2 confirm">
                اتمام الطلب{" "}
              </button>
              {/* </div> */}
            </div>

            <div
              className="product col-md-8 col-sm-12 border-1 bg-white rounded rounded-2"
              dir="rtl"
            >
              <div className="d-flex justify-content-start mt-2">
                <div className="py-3">
                  <img src={Hear} height={100} width={100} alt="" />
                </div>

                <div className="mx-3 mt-3 ">
                  <p className="fw-medium mt-3">
                    موبايل آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين
                  </p>
                  <span className="text-secondary"> 50,000 ر.س </span>
                  {/* <p className='text-secondary'> الوزن 0.1 كجم </p> */}
                </div>
              </div>
              {/* details */}

              <div className="d-flex justify-content-between ">
                <p className="mx-3 text-secondary mt-3">المجموع 50,000 ر.س</p>
                <div className="count p-2 text-center mb-3 d-flex md:justify-content-between">
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick1}
                  >
                    <IoAdd />
                  </button>
                  <span style={{ marginInline: "8px" }}> {counter} </span>
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick2}
                  >
                    <FiMinus />
                  </button>
                  <MdCancel className="fs-3" style={{ marginRight: "8px" }} />
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-start mt-2">
                <div className="py-3">
                  <img src={Watch} height={100} width={100} alt="" />
                </div>

                <div className="mx-3 mt-3 ">
                  <p className="fw-medium mt-3 ">
                    موبايل آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين
                  </p>
                  <span className="text-secondary"> 50,000 ر.س </span>
                  {/* <p className='text-secondary'> الوزن 0.1 كجم </p> */}
                </div>
              </div>
              {/* details */}

              <div className="d-flex justify-content-between">
                <p className="mx-3 text-secondary mt-3">المجموع 50,000 ر.س</p>
                <div className="count p-2 text-center mb-3 d-flex justify-content-between">
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick1}
                  >
                    <IoAdd />
                  </button>
                  <span style={{ marginInline: "8px" }}> {counter} </span>
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick2}
                  >
                    <FiMinus />
                  </button>
                  <MdCancel className="fs-3" style={{ marginRight: "8px" }} />
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-start mt-2">
                <div className="py-3">
                  <img src={iphone} height={100} width={100} alt="" />
                </div>

                <div className="mx-3 mt-3 ">
                  <p className="fw-medium ">
                    موبايل آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين
                  </p>
                  <span className="text-secondary"> 50,000 ر.س </span>
                  {/* <p className='text-secondary'> الوزن 0.1 كجم </p> */}
                </div>
              </div>
              {/* details */}

              <div className="d-flex justify-content-between">
                <p className="mx-3 text-secondary mt-3">المجموع 50,000 ر.س</p>
                <div className="count p-2 text-center mb-3 d-flex justify-content-between ">
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick1}
                  >
                    <IoAdd />
                  </button>
                  <span className="border-2" style={{ marginInline: "8px" }}>
                    {" "}
                    {counter}{" "}
                  </span>
                  <button
                    className="btn-click"
                    style={{ color: "black" }}
                    onClick={handleClick2}
                  >
                    <FiMinus />
                  </button>
                  <MdCancel className="fs-3" style={{ marginRight: "8px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
