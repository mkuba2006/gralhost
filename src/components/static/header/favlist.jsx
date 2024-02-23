import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FavList() {
  return (
    <div className="cart">
      <FontAwesomeIcon id="icon" icon={faHeart}/>
    </div>
  );
}
  
 export default FavList;