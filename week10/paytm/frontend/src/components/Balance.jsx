export const Balance = ({value}) => {
  return (
    <div className="flex text-lg">
      <div className="font-bold">
        Your Balance
      </div>
      <div className="font-semibold ml-4">
        {value}
      </div>
    </div>
  );
};
