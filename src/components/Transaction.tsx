import ShowTransaction from "./ShowTransaction";
import { ITransaction } from "../models";
import NumberType from "./NumberType";

function Transaction({ number, type, text, tab }: ITransaction) {
  return (
    <div className='relative p-5 border bg-white rounded-lg h-40'>
      <NumberType number={number} type={type} />
      <div className='absolute bottom-5 right-5'>
        <ShowTransaction text={text} tab={tab} />
      </div>
    </div>
  );
}

export default Transaction;
