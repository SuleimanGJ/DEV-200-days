import { Link } from "react-router-dom";

export function ButtonWarning({ label, ButtonText, to }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link to={to} className="cursor pointer-cursor pl-1 underline">
        {ButtonText}
      </Link>
    </div>
  );
} 