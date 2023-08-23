import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";
import "../css/list.css";

const BucketItem = ({ item }) => {
  return (
    <li>
      <span>{item.content ? "complete" : "not complete"}</span>
      <NavLink
        className={item.content ? "true" : "false"}
        to={`content/${item.id}`}
      >
        <img src={item.img_src || dImage} alt="" width="30px" height="30px" />
        {item.bucket}
      </NavLink>
    </li>
  );
};
export default BucketItem;
