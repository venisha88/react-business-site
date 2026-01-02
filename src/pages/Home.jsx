import { motion } from "framer-motion";
import webImage from "../assets/web.png";
function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="container py-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="row align-items-center">

          <div className="col-md-6">
              <h1 className="fw-bold display-5">
                  Building Modern Web Solutions
              </h1>
          <p className="lead text-muted">
            We design and develop fast, responsive, and scalable React websites
            for businesses and startups.
          </p>

            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={webImage}
              alt="Web Development"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Why Choose TechNova?</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <h5>⚡ Fast Performance</h5>
            <p className="text-muted">
              Optimized React applications with fast loading times.
            </p>
          </div>

          <div className="col-md-4">
            <h5>📱 Fully Responsive</h5>
            <p className="text-muted">
              Looks great on mobile, tablet, and desktop devices.
            </p>
          </div>

          <div className="col-md-4">
            <h5>🔒 Secure & Scalable</h5>
            <p className="text-muted">
              Built using modern best practices and clean code.
            </p>
          </div>
          <div className="col-md-4">
          <div className="card p-4 text-center shadow-sm border-0 h-100">
            <img
              src={webImage}
              alt="Web-development"
              width="60"
               className="mb-3"
            />
            <h5 className="fw-bold">Web Development</h5>
            <p>Modern and responsive React websites.</p>
          </div>
        </div>

        </div>
      </div>

    </>
  );
}

export default Home;
