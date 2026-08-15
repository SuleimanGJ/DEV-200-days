export function InputBox({placeholder, label}) {
    return (
      <div className="">
        <div className="text-sm text-left py-2 font-medium">
            {label}
        </div>
        <input placeholder={placeholder} className="border rounded border-slate-200 w-full py-1 px-2" />
      </div>
    );
} 