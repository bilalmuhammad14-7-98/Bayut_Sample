import React from "react";
import styles from "./MainSection.module.css";
import logo from "../../images/img_new.jpg";

const MainSection = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <img src={logo} alt="Nature" style={{ borderRadius: "30px" }}></img>
          <div class="col-6">
            <div className={styles.textblock_heading}>
              <h4>Search Properties for sale and rent in UAE</h4>
            </div>

            <div className={styles.textblock}>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Rent"
                    ></input>
                  </div>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Location"
                    ></input>
                  </div>
                  <div class="col-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Residential"
                    ></input>
                  </div>
                </div>

                <div
                  class="row justify-content-center"
                  style={{ marginTop: "10px" }}
                >
                  <div class="col-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Rent"
                    ></input>
                  </div>
                  <div class="col-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Location"
                    ></input>
                  </div>
                  <div class="col-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Residential"
                    ></input>
                  </div>
                  <div class="col-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Residential"
                    ></input>
                  </div>
                </div>

                <div
                  class="row justify-content-center"
                  style={{ marginTop: "10px" }}
                >
                  <div class="col-12">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Rent"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
