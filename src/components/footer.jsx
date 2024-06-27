import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-content">
              <p>&copy; 2024 NEXTGENHOSTING. All rights reserved.</p>
              <p>
                Designed and developed by{" "}
                <a href="https://github.com/vServer-Hosting-Project/vserver-hosting" target="_blank">
                    vServer-Hosting-Project
                </a>
                <p>Impressum</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer