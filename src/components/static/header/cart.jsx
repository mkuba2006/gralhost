import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
function Cart() {
  return (
    <div className="cart">
      <FontAwesomeIcon id="icon" icon={faCartShopping}/>
    </div>
  );
}
  
export default memo(Cart);