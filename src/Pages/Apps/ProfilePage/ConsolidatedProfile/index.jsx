import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  Container,
  Button,
  Progress,
  Badge,
} from "reactstrap";
import {
  timelineData,
  profileProjects,
} from "../../../../Data/profileapp/ProfileAppData";

const ConsolidatedProfile = () => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  const [data, setData] = useState("tab1");
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Slider settings for stories
  const settings = {
    slidesToShow: 4,
    className: "story-container app-arrow",
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Stories data
  const stories = [
    {
      imgSrc: "/assets/images/profile-app/11.jpg",
      avatar: "/assets/images/avtar/1.png",
      bgColor: "bg-primary",
    },
    {
      imgSrc: "/assets/images/profile-app/12.jpg",
      avatar: "/assets/images/avtar/08.png",
      bgColor: "bg-danger",
    },
    {
      imgSrc: "/assets/images/profile-app/13.jpg",
      avatar: "/assets/images/avtar/2.png",
      bgColor: "bg-secondary",
    },
    {
      imgSrc: "/assets/images/profile-app/14.jpg",
      avatar: "/assets/images/avtar/3.png",
      bgColor: "bg-dark",
    },
    {
      imgSrc: "/assets/images/profile-app/15.jpg",
      avatar: "/assets/images/avtar/07.png",
      bgColor: "bg-warning",
    },
    {
      imgSrc: "/assets/images/profile-app/16.jpg",
      avatar: "/assets/images/avtar/4.png",
      bgColor: "bg-info",
    },
    {
      imgSrc: "/assets/images/profile-app/17.jpg",
      avatar: "/assets/images/avtar/5.png",
      bgColor: "bg-primary",
    },
    {
      imgSrc: "/assets/images/profile-app/18.jpg",
      avatar: "/assets/images/avtar/6.png",
      bgColor: "bg-success",
    },
  ];

  // Friends data
  const friends = [
    {
      name: "Bette Hagenes",
      title: "Wed Developer",
      image: "/assets/images/avtar/2.png",
      bgColor: "bg-dark",
    },
    {
      name: "Fleta Walsh",
      title: "Wed Designer",
      image: "/assets/images/avtar/10.png",
      bgColor: "bg-primary",
    },
    {
      name: "Lenora",
      title: "UI/UX designer",
      image: "/assets/images/avtar/14.png",
      bgColor: "bg-success",
    },
    {
      name: "Fleta Walsh",
      title: "React Developer",
      image: "/assets/images/avtar/16.png",
      bgColor: "bg-warning",
    },
    {
      name: "Emery McKenzie",
      title: "Wed Developer",
      image: "/assets/images/avtar/13.png",
      bgColor: "bg-danger",
    },
    {
      name: "Bette Hagenes",
      title: "Wed Designer",
      image: "/assets/images/avtar/1.png",
      bgColor: "bg-info",
    },
  ];

  // Profile Tabs Component
  const ProfileAppTabs = () => (
    <Card>
      <CardBody>
        <div className="tab-wrapper">
          <ul className="profile-app-tabs">
            <li
              className={`${
                data === "tab1" ? "active" : ""
              } tab-link fw-medium f-s-16 f-w-600`}
              onClick={() => setData("tab1")}
            >
              <i className="ti ti-user fw-bold"></i> Profile
            </li>
            <li
              className={`${
                data === "tab2" ? "active" : ""
              } tab-link fw-medium f-s-16 f-w-600`}
              onClick={() => setData("tab2")}
            >
              <i className="ti ti-timeline fw-bold"></i> Activities{" "}
              <span className="badge rounded-pill bg-warning badge-notification">
                10+
              </span>
            </li>
            <li
              className={`${
                data === "tab3" ? "active" : ""
              } tab-link fw-medium f-s-16 f-w-600`}
              onClick={() => setData("tab3")}
            >
              <i className="ti ti-clipboard-data fw-bold"></i> Projects
            </li>
            <li
              className={`${
                data === "tab4" ? "active" : ""
              } tab-link fw-medium f-s-16 f-w-600`}
              onClick={() => setData("tab4")}
            >
              <i className="ti ti-photo-heart fw-bold"></i> Post
            </li>
            <li
              className={`${
                data === "tab5" ? "active" : ""
              } tab-link fw-medium f-s-16 f-w-600`}
              onClick={() => setData("tab5")}
            >
              <i className="ti ti-users fw-bold"></i> Friends
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );

  // Profile Card Component
  const ProfileCard = () => (
    <Card>
      <CardBody>
        <div className="profile-container">
          <div className="image-details">
            <div className="profile-image"></div>
            <div className="profile-pic">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                  />
                  <label htmlFor="imageUpload">
                    <i className="ti ti-photo-heart"></i>
                  </label>
                </div>
                <div className="avatar-preview">
                  <div id="imgPreview"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="person-details">
            <h5 className="f-w-600">
              User Name
              <img
                width="20"
                height="20"
                src="/assets/images/profile-app/01.png"
                alt="verified"
              />
            </h5>
            <p>Designation</p>
            <div className="details">
              <div>
                <h4 className="text-primary">ID</h4>
                <p className="text-secondary">123465</p>
              </div>
              <div>
                <h4 className="text-primary">Company</h4>
                <p className="text-secondary">xyz private limited</p>
              </div>
              <div>
                <h4 className="text-primary">Currency</h4>
                <p className="text-secondary">INR</p>
              </div>
            </div>
            <div className="my-2">
              <button type="button" className="btn btn-primary b-r-22">
                <i className="ti ti-edit"></i> Edit Profile
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary b-r-22 ms-2"
              >
                <i className="ti ti-key"></i> Change Password
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );

  // About Me Component
  const AboutMe = () => (
    <Card>
      <CardHeader>
        <h5>Account Information</h5>
      </CardHeader>
      <CardBody>
        <div className="about-list">
          <div className="d-flex justify-content-between">
            <span className="fw-medium">
              <i className="ti ti-id"></i> ID
            </span>
            <span className="float-end f-s-13 text-secondary">117603</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-medium">
              <i className="ti ti-building"></i> Company
            </span>
            <span className="float-end f-s-13 text-secondary">
              xyz private limited
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-medium">
              <i className="ti ti-mail"></i> Email
            </span>
            <span className="float-end f-s-13 text-secondary">
              xyz@gmail.com
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-medium">
              <i className="ti ti-phone"></i> Phone
            </span>
            <span className="float-end f-s-13 text-secondary">-</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-medium">
              <i className="ti ti-bell"></i> Email Notifications
            </span>
            <span className="float-end f-s-13 text-secondary">Subscribed</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">
              <i className="ti ti-currency-rupee"></i> Currency
            </span>
            <span className="float-end f-s-13 text-secondary">INR</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">
              <i className="ti ti-world"></i> Language
            </span>
            <span className="float-end f-s-13 text-secondary">en</span>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="mb-3">Your Partner Referral Link</h6>
          <div className="referral-section p-3 bg-light rounded">
            <div className="d-flex flex-sm-row flex-column gap-sm-0 gap-3 justify-content-between align-items-center mb-2">
              <small className="text-primary">
                https://network.vcommission.com/register.html?ref=117603
              </small>
              <Button color="dark" size="sm">
                Referred Affiliates
              </Button>
            </div>
            <small className="text-muted">Total Referral Earning: $ 0</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <Container fluid>
      <Row className="m-1">
        <Col xs={12}>
          <h4 className="main-title">Profile</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li>
              <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                Dashboard
              </Link>
            </li>
            <li className="active">Profile</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <div className="col-lg-12 col-xxl-12 order--1-lg col-box-4">
          <ProfileCard />
          <AboutMe />
        </div>
      </Row>
    </Container>
  );
};

export default ConsolidatedProfile;
