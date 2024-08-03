import Info from "../../components/Info/Info";
import Nav from "../../components/nav/Nav";
import TabsReact from "../../components/Tabs/TabsReact";
import DynamicPrducts from "../../components/DynamicProducts/DynamicProducts";
import Footer from "../../components/Footer/Footer";

import Accordion from "react-bootstrap/Accordion";

import "./ProductDetails.css";

function ProductDetails() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(100, 300);

  return (
    <div className="product-details">
      <Info />
      <Nav />
      <div className="container">
        <div className="left">
          <h2>
            موبايل آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين ذات جودة
            عالية
          </h2>
          <div className="extra-info">
            مرة <span style={{ color: "#60f4d4" }}>250</span> تم شرائها
            <img src="fire.svg" alt="" />
            وحدة
            <span style={{ color: "#60f4d4" }}>16</span>
            المتبقي
            <img src="bag.svg" alt="" />
          </div>
          <div className="options">
            مشاركة المنتج
            <img src="share.svg" style={{ width: "15px" }} alt="" />
            أضف للمفضلة
            <img src="heart1.svg" style={{ width: "15px" }} alt="" />
            <div className="rating flex">
              <span>( 10 ) تقييمات</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <div className="views">
            يشاهد المنتج الان <span style={{ color: "#60f4d4" }}>{rndInt}</span>{" "}
            شخص
          </div>
          <p>
            موبايل ابل ايفون 11 بشريحتين لاتصال وذاكرة داخلية 64 جيجا ويدعم
            تقنية شبكة الجيل الرابع ال تي اي مع تطبيق فيس تايم، بنفسجي، النسخة
            العالمية
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item>
              <Accordion.Header>
                {" "}
                <img
                  style={{ width: "30px", margin: "0 12px" }}
                  src="edit.svg"
                  alt=""
                />
                تخصيص المنتج{" "}
              </Accordion.Header>
              <Accordion.Body className="details">
                <div className="images">
                  <h3>صور المنتج</h3>
                  <div className="wrapper flex">
                    <img src="side.png" alt="" />
                    <img src="side.png" alt="" />
                    <img src="side.png" alt="" />
                    <img src="side.png" alt="" />
                    <img src="side.png" alt="" />
                  </div>
                </div>
                <div className="colors">
                  <h3>الألوان المتاحة</h3>
                  <div className="wrapper flex">
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#FFAF44",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#F55157",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#1D1F1F",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#EEEEEE",
                      }}
                    ></div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <img
                  style={{ width: "30px", margin: "0 12px" }}
                  src="home.svg"
                  alt=""
                />{" "}
                التوفر في المعارض
              </Accordion.Header>
              <Accordion.Body>
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <img
                  style={{ width: "30px", margin: "0 12px" }}
                  src="weight.svg"
                  alt=""
                />{" "}
                وزن المنتج
              </Accordion.Header>
              <Accordion.Body>
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="count">
            <div className="price">250.00 ر.س</div>
            <div className="counter">
              <div>+</div>
              <div>2</div>
              <div>-</div>
            </div>
            <span>حدد الكمية</span>
          </div>
          <div className="links flex">
            <button className="custom-link-ouline">
              <img src="cartcolored.svg" alt="" />
              عرض الكل
            </button>
            <button className="custom-link-filled">
              <img src="cartwhite.svg" alt="" />
              عرض الكل
            </button>
          </div>
        </div>
        <div className="right">
          <div className="wrapper flex">
            <div className="main-img">
              <img src="image-two.dd7d3cfc16bf56c43f01.png" alt="" />
            </div>
            <div className="side-images">
              <div className="side-img">
                <img src="image-four.ba1b0ca752d3139c2a1f.png" alt="" />
              </div>
              <div className="side-img">
                <img src="image-five.11880e87fe2172358c1d.png" alt="" />
              </div>
              <div className="side-img">
                <img src="image-one.c6ad23352c1adcfa5d6e.png" alt="" />
              </div>
              <div className="side-img">
                <img src="image-three.dfce5cb4f77af5fe35ec.png" alt="" />
              </div>
              <div className="side-img">
                <img src="image-two.dd7d3cfc16bf56c43f01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs">
        <TabsReact />
      </div>
      <DynamicPrducts />
      <Footer />
    </div>
  );
}

export default ProductDetails;
