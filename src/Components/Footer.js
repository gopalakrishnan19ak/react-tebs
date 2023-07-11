import "./Footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tebs</h1>
          <p>choose your destination</p>
        </div>
        <div>
          {" "}
          <a href="/">
            <i className="fa-brands fa-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Cahngelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">Licence</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Cahngelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">Licence</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Cahngelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">Licence</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Cahngelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">Licence</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
