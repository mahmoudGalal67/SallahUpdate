import React from "react";

import "./Blogs.css";

function Blogs() {
  return (
    <section className="blogs">
      <div className="headers flex">
        <button className="custom-link-ouline">
          <img src="arrow.svg" alt="" />
          عرض الكل
        </button>
        <div>
          <h3> أحدث المقالات</h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="blog">
          <img src="blog.png" alt="" />
          <h2>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p>
            لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات
            المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع
            المنتجات
          </p>
        </div>
        <div className="blog">
          <img src="BLOG2.png" alt="" />
          <h2>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p>
            لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات
            المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع
            المنتجات
          </p>
        </div>
        <div className="blog">
          <img src="BLOG3.png" alt="" />
          <h2>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p>
            لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات
            المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع
            المنتجات
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
