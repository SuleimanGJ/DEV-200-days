export const AppBar = () => {
    return (
      <div className="flex justify-between h-14 shadow">
        <div className="h-full ml-4 flex flex-col justify-center">PayTM</div>
        <div className="flex">
          <div className="h-full mr-4 flex flex-col justify-center">
            Hello, User
          </div>
          <div className="bg-red-500 rounded-full w-12 h-12 flex justify-center mt-1 mr-2">
            <div className="h-full text-2xl flex flex-col justify-center">
              U
            </div>
          </div>
        </div>
      </div>
    );
}