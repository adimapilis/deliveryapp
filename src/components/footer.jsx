import React from "react"

export default function Footer() {
  return (
    <main className="footer">
      <div className="left-footer">
        <img src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg"></img>
      </div>
      <div className="middle1-footer">
        <div>Find Store</div>
        <div>About</div>
        <div>Charity</div>
        <div>Careers</div>
      </div>
      <div className="middle2-footer">
        <div>Business Opportunities</div>
        <div>Contact Us</div>
        <div>Terms &#38; Conditions</div>
        <div>Privacy Policy</div>
      </div>
      <div className="right-footer">
        <div className="ending">For news and updates, follow us</div>
        <div className="socmed-logos">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </div>
    </main>
  )
}