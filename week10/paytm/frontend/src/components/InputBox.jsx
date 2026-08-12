export function InputBox({placeholder, label}) {
    return (
      <div className="">
        <div className="">
            {label}
        </div>
        <input placeholder={placeholder} className="" />
      </div>
    );
} 