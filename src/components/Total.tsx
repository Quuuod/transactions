import { IWelcome } from '../models';

function Total({ total }: IWelcome) {
  return (
    <div className="flex items-center justify-center text-center text-xl border-t border-slate-300 bg-slate-200 absolute bottom-0 left-0 right-0 h-1/6 rounded-b-lg">
      <p>{`You have ${total} transactions`}</p>
    </div>
  );
}

export default Total;
