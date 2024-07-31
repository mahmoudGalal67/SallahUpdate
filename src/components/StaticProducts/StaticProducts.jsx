import Countdown from "react-countdown";

import "./StaticProducts.css";
import { Link } from "react-router-dom";

function StaticProducts() {
  const Finished = () => <span>You are good to go!</span>;
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <span className="count-down">
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </span>
      );
    } else {
      // Render a finished state
      return <Finished />;
    }
  };
  return (
    <div className="StaticProducts">
      <div className="headers flex">
        <Link to="/products">
          <button className="custom-link-ouline">
            <img src="arrow.svg" alt="" />
            عرض الكل
          </button>
        </Link>
        <div>
          <h3>منتجات مميزة</h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="product">
          <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
          <div className="title">ساعات</div>
          <Link to="productDetails">
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          </Link>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="count-down-product">
            <Countdown
              date={Date.now() + 500000000}
              intervalDelay={0}
              precision={3}
              renderer={renderer}
            ></Countdown>
          </div>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />

          <div className="title">ساعات</div>
          <Link to="productDetails">
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          </Link>

          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-three.d81b5546860624a0706d.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-three.d81b5546860624a0706d.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
        <div className="product">
          <img src="product-three.d81b5546860624a0706d.png" alt="" />
          <div className="title">ساعات</div>
          <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
          <p className="info">سوار رياضي اسود - عادي.</p>
          <div className="price-wrapper">
            <div className="old">350.00 ر.س</div>
            <div className="new">250.00 رس</div>
          </div>
          <div className="links-wrapper">
            <a className="fav flex" href="">
              <img src="heart.svg" alt="" />
            </a>
            <button className="cart">
              <span>+</span>
              Add to cart
            </button>
          </div>
          <div className="offer">خصم 25%</div>
          <div className="special">جديد</div>
        </div>
      </div>
    </div>
  );
}

export default StaticProducts;
