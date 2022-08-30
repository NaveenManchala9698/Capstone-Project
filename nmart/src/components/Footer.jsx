import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">eBooks</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            ></input>
            <input type="submit" value="Subscribe"></input>
          </form>
        </div>
      </section>

      {/* <section className="ft-social">
        <ul className="ft-social-list">
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="#">
              <Youtube />
            </a>
          </li>
        </ul>
      </section> */}

      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>

          <li>&copy; 2019 Copyright NMart Inc.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
