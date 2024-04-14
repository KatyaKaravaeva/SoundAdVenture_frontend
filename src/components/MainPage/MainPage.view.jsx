// import { Link } from "react-router-dom";
// import styles from "../../assets/styles/articleList.module.css";
// import style from "./MainPage.module.css";
// import CommentsIcon from "../../assets/images/comments_icon.svg";
// import BookMarkAdd from "../../assets/images/bookmark_add.svg";
// import BookMarkAdded from "../../assets/images/bookmark_added.svg";

const MainPageView = (
  {
    // handleSubmit,
    // articles,
    // mainPageQuery,
    // isSubscribe,
    // setIsSubscribe,
    // makeBookmark,
    // searchData,
    // isSearch,
    // setIsSearch,
  }
) => {
  // if (mainPageQuery.isLoading || mainPageQuery.isRefetching) {
  //   return (
  //     <div className={styleLoading.article__loading_container}>
  //       <div className={styleLoading.article__loading}></div>
  //     </div>
  //   );
  // }
  return (
    <div>
      <div class="slider_area">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-6">
                <div class="slider_text">
                  <h5
                    class="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    4536+ Jobs listed
                  </h5>
                  <h3
                    class="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Find your Dream Job
                  </h3>
                  <p
                    class="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                  >
                    We provide online instant cash loans with quick approval
                    that suit your term length
                  </p>
                  <div
                    class="sldier_btn wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <a href="#" class="boxed-btn3">
                      Upload your Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ilstration_img wow fadeInRight d-none d-lg-block text-right"
          data-wow-duration="1s"
          data-wow-delay=".2s"
        >
          {/* <img src="img/banner/illustration.png" alt=""> */}
        </div>
      </div>

      <div class="catagory_area">
        <div class="container">
          <div class="row cat_search">
            <div class="col-lg-3 col-md-4">
              <div class="single_input">
                <input type="text" placeholder="Search keyword" />
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="single_input">
                <select class="wide">
                  <option data-display="Location">Location</option>
                  <option value="1">Dhaka</option>
                  <option value="2">Rangpur</option>
                  <option value="4">Sylet</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="single_input">
                <select class="wide">
                  <option data-display="Category">Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="4">Category 3</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-12">
              <div class="job_btn">
                <a href="#" class="boxed-btn3">
                  Find Job
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="popular_search d-flex align-items-center">
                <span>Popular Search:</span>
                <ul>
                  <li>
                    <a href="#">Design & Creative</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Administration</a>
                  </li>
                  <li>
                    <a href="#">Teaching & Education</a>
                  </li>
                  <li>
                    <a href="#">Engineering</a>
                  </li>
                  <li>
                    <a href="#">Software & Web</a>
                  </li>
                  <li>
                    <a href="#">Telemarketing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="popular_catagory_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title mb-40">
                <h3>Popolar Categories</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Design & Creative</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Marketing</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Telemarketing</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Software & Web</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Administration</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Teaching & Education</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Engineering</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="single_catagory">
                <a href="jobs.html">
                  <h4>Garments / Textile</h4>
                </a>
                <p>
                  {" "}
                  <span>50</span> Available position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageView;
