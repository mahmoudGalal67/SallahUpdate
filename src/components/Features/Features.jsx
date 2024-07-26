import React from "react";

import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="wrapper flex">
        <div className="item flex">
          <div>
            <h3>منتجات مضمونه</h3>
            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
          <img src="download (1).png" alt="" />
        </div>
        <div className="item flex">
          <div>
            <h3>منتجات مضمونه</h3>
            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
          <img src="download (2).png" alt="" />
        </div>
        <div className="item flex">
          <div>
            <h3>منتجات مضمونه</h3>
            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
          <img src="download.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
