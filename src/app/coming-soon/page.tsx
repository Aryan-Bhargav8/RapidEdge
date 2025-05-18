"use client";

import React from "react";

export default function ComingSoon() {
  return (
    <>
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <img
            src="/assets/icons/main-logo.svg"
            alt="RapidEdge Logo"
            className="logo"
          />
        </header>

        {/* Main Section */}
        <section className="main-section">
          <img
            src="/assets/icons/coming-soon-icon.svg"
            alt="Centered Logo"
            className="centered-logo"
          />
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="logo-container">
            <img
              src="/assets/icons/main-logo.svg"
              alt="RapidEdge Logo"
              className="footer-logo"
            />
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61569118678166"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/assets/icons/facebook-icon.svg"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/rapidedge.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/rapidedge-agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/assets/icons/linkedin-icon.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        * {
          overflow-x: hidden;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          min-height: 100vh;
          background: url("/assets/images/rootBackground.png") no-repeat center
            center;
          background-size: cover;
        }

        .header {
          width: 100%;
          display: flex;
          align-items: flex-start;
          margin-left: 118px;
          margin-top: 75px;
        }

        .logo {
          width: 150px;
        }

        .main-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          margin-bottom: 100px;
          text-align: center;
        }

        .centered-logo {
          max-width: 80%;
        }

        .footer {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 0 5px;
          margin-bottom: 30px;
          box-sizing: border-box;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-logo {
          height: 25px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
        }

        .social-link {
          transition: transform 0.3s;
        }

        .social-link:hover {
          transform: scale(0.9);
        }

        .social-icon {
          width: 35px;
          height: 35px;
        }

        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .header {
            margin-left: 118px !important;
            margin-top: 75px !important;
          }

          .footer {
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .header {
            margin-left: 118px !important;
            margin-top: 75px !important;
          }
        }
      `}</style>
    </>
  );
}
