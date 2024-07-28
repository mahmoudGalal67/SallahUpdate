import Modal from "react-bootstrap/Modal";

import { ToastContainer, toast } from "react-toastify";

import DotLoader from "react-spinners/DotLoader";

import "./account.css";
import { useContext, useState } from "react";
import { request } from "../utils/Request";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/Auth";

function MyVerticallyCenteredModal(props) {
  const override = {
    position: "absolute",
    inset: "50%",
    // borderColor: "#62D0B6",
    // backgroundColor: "#62D0B6",
  };
  const [cookies, setCookie] = useCookies(["user"]);

  const { dispatch } = useContext(AuthContext);

  const [accountType, setAccountType] = useState("phone");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const { data } = await request({
        url: "/auth/login",
        method: "post",
        // withCredentials: true,
        data: { email, password },
        // Authorization: `Bearer ${cookies?.user}`,
      });
      setCookie("user", data.data.token, { path: "/" });
      dispatch({ type: "login", payload: data.data.user });
      toast.success("You have been logged in successfully");
      props.onHide();
    } catch (err) {
      setErr(err.response.data.message);
      console.log(err);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <form onSubmit={handleLogin}>
          <div className="wrapper">
            <img src="user.svg" alt="" />
            <h2>تسجيل الدخول</h2>
            {accountType === "phone" ? (
              <>
                <label htmlFor="phone">رقم الجوال</label>
                <input
                  required
                  name="number"
                  type="number"
                  placeholder="010 01234567"
                />
              </>
            ) : (
              <>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <label htmlFor="email">الرقم السري </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </>
            )}

            <button type="submit">دخول</button>
            {accountType === "phone" ? (
              <span onClick={() => setAccountType("email")}>
                تسجل الدخول بالبريد الإلكتروني
              </span>
            ) : (
              <span onClick={() => setAccountType("phone")}>
                تسجل الدخول برسالة نصية
              </span>
            )}
          </div>
          {err && <span className="error">{err}</span>}
        </form>

        <DotLoader
          color="#2ffff3"
          size={60}
          cssOverride={override}
          loading={loading}
        />
      </Modal.Body>
    </Modal>
  );
}

function Account({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        transition:Bounce
      />
    </>
  );
}
export default Account;
