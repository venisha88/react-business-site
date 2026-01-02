import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5">

      <div className="container py-4">
        <div className="row">

          <div className="col-md-6">
            <h5>TechNova</h5>
            <p>
              Building modern and responsive React websites for businesses
              and startups.
            </p>
          </div>

          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/service" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Contact</h6>
            <p>Email: info@technova.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
