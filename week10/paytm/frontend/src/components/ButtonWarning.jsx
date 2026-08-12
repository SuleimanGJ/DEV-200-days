import { Link } from "react-router-dom";

export function ButtonWarning({ label, ButtonText, to }) {
  return (
    <div className="">
      <div className="">
            {label}
      </div>
      <Link to={to} className="cursor pointer-cursor po">
        {ButtonText}
      </Link>
    </div>
  );
} 