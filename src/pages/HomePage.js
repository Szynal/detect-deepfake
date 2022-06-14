import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "./HomePage.css";
import UploadImageToS3WithNativeSdk from "./UploadVideo";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="mdb-color  blue-1" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      Under development
                    </strong>
                  </h2>

                  <UploadImageToS3WithNativeSdk />

                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold"></strong>
                  </h2>
                  <MDBRow />

                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1 mx-2 mb-2"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">
                        Official Documentation
                      </span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="bars" className="pink-text pr-2" />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag="button"
                            to="/navigation"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="edit" className="blue-text pr-2" />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className="mb-4 pb-3">
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink
                            tag="button"
                            to="/forms"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="table" className="green-text pr-2" />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink
                            tag="button"
                            to="/tables"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
