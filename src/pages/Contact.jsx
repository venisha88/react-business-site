 import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
    <div className="container py-5 text-center">
  <div className="p-5 bg-primary text-white rounded">
    <h2 className="fw-bold">Ready to Grow Your Business?</h2>
    <p className="mb-4">
      Let’s build a modern website that helps you stand out online.
    </p>
    <Link to="/contact" className="btn btn-light btn-lg">
  Contact Us
</Link>
  </div>
</div>

    <div className="container mt-5">
        <h2>Contact Us</h2> 
        <form>      
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" /> 
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
        )
     }
export default Contact;