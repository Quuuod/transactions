import SeeTransaction from './SeeTransaction';
import Total from './Total';
import { IWelcome } from '../models';

function Welcome({ total }: IWelcome) {
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

      <Total total={total} />
    </>
  );
}
export default Welcome;
