export default function Header({score}:{score:number}) {
  return (
    <div className="flex mt-12 justify-center w-full">
      <div
        className="bg-transparent border-2 items-center flex justify-between rounded-md p-3 text-white w-[80vw] lg:w-[50vw]"
        style={{ borderColor: " hsl(217, 16%, 45%)" }}
      >
        <div className="flex flex-col text-2xl font-bold uppercase">
          <h1 className="-mb-3">Rock</h1>
          <h1 className="-mb-3">Paper</h1>
          <h1>Scissors</h1>
        </div>
        <div className="flex flex-col  rounded-md py-2 items-center bg-white h-[70px] w-[90px]">
          <h1
            className="text-xs uppercase tracking-widest"
            style={{ color: "hsl(229, 64%, 46%)" }}
          >
            Score
          </h1>
          <h1 className="text-3xl" style={{ color: "hsl(229, 25%, 31%)" }}>
            {score}
          </h1>
        </div>
      </div>
    </div>
  );
}
