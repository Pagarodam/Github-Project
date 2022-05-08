import GitImage from "../..//assets/github-logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header
      className={"bg-black fixed top-0 w-full h-100 bg-black text-white "}
    >
      <p className="p-4">GitHub: searching for issues & pull request </p>
    </header>
  );
};

export default Header;
