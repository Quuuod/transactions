import SeeTransaction from './SeeTransaction';
import { ITransaction } from '../models';
import NumberType from './NumberType';

function Transaction({ number, type, text }: ITransaction) {
  return (
    <div className="relative p-5 border bg-white rounded-lg h-40">
      <NumberType number={number} type={type} />
      <div className="absolute bottom-5 left-48 right-0">
        <SeeTransaction text={text} />
      </div>
    </div>
  );
}

export default Transaction;
