import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const WishlistIcon = () => {
  return (
    <FontAwesomeIcon icon={regularHeart} className="text-xl cursor-pointer" />
  );
};

export default WishlistIcon;
