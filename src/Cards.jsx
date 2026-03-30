import IphoneBlue from "./assets/imgs/IphoneBlue.png";
import iphone from "./assets/imgs/iphone.png";
import Oppo from "./assets/imgs/Oppo.png";

export default function Card1() {
  return (
    <>
      {/* Card 1 */}
      <div
        className=" p-2 pb-4 rounded shadow bg-body-secondary d-flex flex-column justify-content-center align-items-center border"
        style={{ width: "18rem", marginRight: "20px" }}
      >
        <img src={Oppo} className="p-3" />
        <div className="card-body">
          <p className="card-text fw-bold">
            Apple iPhone 14 Pro 512GB Gold <br /> (MQ233)
          </p>
          <p className="fw-bold">
            $1437 <br />
          </p>
          <button className="btn btn-dark p-2  col-12">Add To Cart</button>
        </div>
      </div>
      {/* Card 2 */}
      <div
        className=" p-2  rounded shadow bg-body-secondary d-flex flex-column justify-content-center align-items-center border"
        style={{ width: "18rem", marginRight: "20px" }}
      >
        <img src={iphone} className="p-3" />
        <div className="card-body">
          <p className="card-text fw-bold">
            Apple iPhone 11 128GB White <br />
            (MQ233)
          </p>
          <p className="fw-bold">
            $510 <br />
          </p>
          <button className="btn btn-dark p-2 col-12">Add To Cart</button>
        </div>
      </div>
      {/* Card 3 */}
      <div
        className=" p-2 rounded shadow bg-body-secondary d-flex flex-column justify-content-center align-items-center border"
        style={{ width: "18rem", marginRight: "20px" }}
      >
        <img src={IphoneBlue} className="p-3" />
        <div className="card-body">
          <p className="card-text fw-bold">
            Apple iPhone 11 128GB White <br />
            (MQ233)
          </p>
          <p className="fw-bold">
            $550 <br />
          </p>
          <button className="btn btn-dark p-2 col-12">Add To Cart</button>
        </div>
      </div>
      {/* Card 4 */}
      <div
        className=" p-2 rounded shadow bg-body-secondary d-flex flex-column justify-content-center align-items-center border"
        style={{ width: "18rem", marginRight: "20px" }}
      >
        <img src={IphoneBlue} className="p-3" />
        <div className="card-body">
          <p className="card-text fw-bold">
            Apple iPhone 11 128GB White <br />
            (MQ233)
          </p>
          <p className="fw-bold">
            $550 <br />
          </p>
          <button className="btn btn-dark p-2 col-12">Add To Cart</button>
        </div>
      </div>
    </>
  );
}
