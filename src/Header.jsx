import Logo from "./assets/Logos/logo.png";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className=" border-bottom ">
      <div className="container d-flex  align-items-center p-4" style={{gap:"61px"}}>
        <img src={Logo} alt="logo" />
    { /* input */}
      <input
      style={{width:"372px", height:"56px"}}
        type="text"
        className="form-control "
        placeholder="Search..."
      />
      {/* Nav */}
      <ul className="d-flex gap-5 list-unstyled">
        <li className="fw-bold">Home</li>
        <li className="text-secondary fw-fw-bolder">About</li>
        <li className="text-secondary fw-fw-bolder">Contact Us</li>
        <li className="text-secondary fw-fw-bolder">Blog</li>
      </ul>
        {/* Icons */}
      <ul className="d-flex gap-4 list-unstyled">
        <li><Icon icon="weui:like-outlined" width="32px" height="32px" /></li>
        <li><Icon icon="material-symbols-light:shopping-cart-outline" width="32px" height="32px" /></li>
        <li><Icon icon="iconamoon:profile-thin" width="32px" height="32px" /></li>
      </ul>
      </div>
    </header>
  );
}
