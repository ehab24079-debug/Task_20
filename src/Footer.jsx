import Tiktok from "./assets/Logos/Tiktok.png";
import Facebook from "./assets/Logos/Facebook.png";
import Twitter from "./assets/Logos/Twitter.png";
import Instagram from "./assets/Logos/Instagram.png";   
import LogoVector from "./assets/Logos/LogoVector.png";
export default function Footer() {
  return (
    <footer
      className=""
      style={{ backgroundColor: "hsl(0, 0%, 0%)", height: "60vh" }}
    >
      <div
        className="container d-flex "
        style={{ marginTop: "104px" }}
      >
        {/* Start */}
        <div className="d-flex flex-column text-secondary" style={{paddingRight:"113px"}}>
          <img
            src={LogoVector}
            alt="LogoVector"
            style={{ height: "22px", width: "65px" }}
          />{" "}
          <br />
          <p className="">
            We are a residential interior design firm located in Portland.{" "}
            <br /> Our boutique-studio offers more than
          </p>
        </div>
        {/* Middle */}
        <div className="text-secondary" style={{width:"295px"}}>
          <p className="text-light">Services</p>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </div>
        {/* End */}
        <div className="ms-5">
          <div className="text-secondary">
            <p className="text-light">Assistance to the buyer</p>
            <p> Find an order</p>
            <p> Terms of delivery</p>
            <p>Exchange and return of goods</p>
            <p>Guarantee</p>
            <p>Frequently asked questions</p>
            <p>Terms of use of the site</p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="d-flex gap-4 ">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Tiktok} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
    </footer>
  );
}
