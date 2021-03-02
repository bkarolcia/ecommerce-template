import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import "../styles/logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__icon">
        <FontAwesomeIcon icon={faDolly} />
      </div>
      <div className="logo__text">
        <h1 className="logo__header">
          Shopping Tim<span className="logo__text--red">e</span>
        </h1>
        <h4 className="logo__header logo__header--thin">The best choice</h4>
      </div>
    </div>
  );
};

export default Logo;
