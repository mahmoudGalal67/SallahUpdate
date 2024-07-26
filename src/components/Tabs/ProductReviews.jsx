import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import client1 from "../../images/client1.jpg";
import client2 from "../../images/client2.jfif";
import client3 from "../../images/client3.jfif";
import client4 from "../../images/client4.jfif";

function ProductReviews() {
  return (
    <section>
      <div className="row">
        <div className="comment col-md-4 col-sm-12" style={{ height: "430px" }}>
          <div
            className="text-center mx-4 mt-3 h-auto py-3"
            style={{ backgroundColor: "#F8F8F8" }}
          >
            4.5 من 5
            <div className="mt-2">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span style={{ color: "#546581" }}>
                <FaRegStar />
              </span>
            </div>
            <p className="mt-2" style={{ color: "#546581" }}>
              4.5 من 5{" "}
            </p>
          </div>
          <h5 className="mx-4 mt-4">أضف تعليقك </h5>
          <textarea
            cols={56}
            className="h-25 mx-4 p-2 mt-3 rounded rounded-2"
            placeholder=" برجاءأضف تعليقك .."
          ></textarea>
          <button className="btn btn-lg mx-4 mb-5 text-white mt-3">
            {" "}
            انشر تعليقك{" "}
          </button>
        </div>
        {/* col-4 */}

        <div className="col-md-8 col-sm-12">
          <div className="user-comment h-auto p-3 d-flex justify-content-between">
            <h6>تعليقات المستخدمين</h6>
            <p> ترتيب حسب: الأحدث</p>
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client1}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمود ابراهيم </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user1 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client2}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمد خالد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user2 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client3}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> رضا محمد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user3 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client4}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمد خالد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user4 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client1}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمود ابراهيم </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user5 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client2}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمد خالد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user6 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client3}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> رضا محمد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user7 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client4}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمد خالد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user8 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client1}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمود ابراهيم </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user9 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client2}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> محمد خالد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user10 */}

          <hr />

          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4 mx-2">
                <img
                  src={client3}
                  className="rounded rounded-circle"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="user-info  mt-0">
                  <p> رضا محمد </p>
                  <p style={{ color: "#FFC62A" }}>
                    {" "}
                    <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                    <FaRegStar style={{ color: "#546581" }} />{" "}
                  </p>
                </div>
              </div>
              <div className="date mt-4 fw-medium">
                <p> 10 / 13 / 2020 </p>
              </div>
            </div>

            <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
              استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
              ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
              التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
              مميزاً
            </p>
          </div>
          {/* user11 */}

          <hr />

          <button className="btn-more btn btn-lg btn-outline-success mt-4">
            {" "}
            عرض المزيد{" "}
          </button>
        </div>
        {/* col-8 */}
      </div>
      {/* row */}
    </section>
  );
}

export default ProductReviews;
