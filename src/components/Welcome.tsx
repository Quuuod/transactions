import SeeTransaction from './SeeTransaction';

interface IWelcome {
  total: number;
}

function Welcome(props: IWelcome) {
  return (
    <>
      <div className="text-center text-xl border-b border-slate-300 bg-slate-200 absolute top-0 left-0 right-0 h-1/6 rounded-t-lg"></div>
      <div className="w-full mt-14">
        <h1 className="text-4xl text-center ">Welcome</h1>
        <p className="text-center">
          With supporting text below as a natural lead-in additional content
        </p>
      </div>
      <div className="mb-14 mt-5 w-full flex items-center">
        <SeeTransaction text="See transactions" />
      </div>

      <div className="flex items-center justify-center text-center text-xl border-t border-slate-300 bg-slate-200 absolute bottom-0 left-0 right-0 h-1/6 rounded-b-lg">
        <p>{`You have ${props.total} transactions`}</p>
      </div>
    </>
  );
}
export default Welcome;
