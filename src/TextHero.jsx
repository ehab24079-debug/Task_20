import Delivery from "./assets/Logos/Delivery.png";
import Guaranteed from "./assets/Logos/Guaranteed.png";
import Stock from "./assets/Logos/Stock.png";
export default function TextHero() {
  return (
    <div className="container mt-5  ">
      <h1 className="mb-4">Apple iPhone 14 Pro Max</h1>
      <p className="fs-4 fw-bold mb-3">
        $1399 <span className="fs-5 text-secondary fw-lighter"><del>$1499</del></span>
      </p>
      <p className="text-secondary mb-4">
        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work{" "}
        <br /> without rechargingthroughout the day. Incredible photosas in
        weak, yesand in <br /> bright lightusing the new systemwith two cameras
      </p>
      {/* buttons */}
      <div className="d-flex gap-3 mb-5 ">
        <button className="btn btn-outline-dark p-3 col-5 fw-bold">
          Add To Wishlist
        </button>
        <button className="btn btn-dark p-3 col-5">Add To Cart</button>
      </div>
      {/* icons */}
      <div className=" d-flex gap-5">
        {/* Delivery */}
        <div className="d-flex gap-3 ">
          <img src={Delivery} alt="Delivery" />
          <div className="d-flex flex-column ">
            <span className="text-secondary">Free Delivery </span>
            <span className="fw-bold">1-2 day </span>
          </div>
        </div>
        {/* Stock */}
        <div className="d-flex gap-3 ">
          <img src={Stock} alt="Delivery" />
          <div className="d-flex flex-column ">
            <span className="text-secondary">In Stock </span>
            <span className="fw-bold">Today </span>
          </div>
        </div>
        {/* Guaranteed */}
        <div className="d-flex gap-3 ">
          <img src={Guaranteed} alt="Delivery" />
          <div className="d-flex flex-column ">
            <span className="text-secondary">Guaranteed </span>
            <span className="fw-bold">1 year  </span>
          </div>
        </div>
      </div>
    </div>
  );
}
