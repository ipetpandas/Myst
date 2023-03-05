import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent" id="support">
      <div className="footer-container">
        <div className="footer-developer-info-container">
          2023 - Peter Nguyen
        </div>
        <a
          className="footer-github-container"
          href="https://github.com/ipetpandas"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="footer-linkedin-container"
          href="https://www.linkedin.com/in/nguyenpeterviet/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="footer-view-project-container"
          href="https://github.com/ipetpandas/capstone"
        >
          View Project on GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
