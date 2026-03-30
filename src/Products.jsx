import Cards from "./Cards";

export default function Products() {
    return (
        <div className="container" style={{ marginTop: "80px" }}>
        <h4>Related Products</h4>
        <div className="d-flex mt-5 mb-5">
          <Cards />
        </div>
      </div>
    )
}