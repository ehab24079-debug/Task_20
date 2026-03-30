import heroMob from "./assets/imgs/heroMob.png";
export default function HeroPic() {
  return (
    <div className="container mt-5">
      <img
        src={heroMob}
        alt="Hero Mobile"
        style={{ width: "536px", height: "516px" }}
      />
    </div>
  );
}
