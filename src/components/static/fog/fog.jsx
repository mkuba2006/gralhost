import "./fog.css";
import { useContext, memo } from "react";
import OpenContext from '../../logic/open_context';


function Fog() {
  const {open} = useContext(OpenContext);

    return (
      <div className={` ${open ? "before" : ""}`}>
      </div>
    );
}
  
export default memo(Fog);