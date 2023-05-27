import { INumberType } from '../models';

function NumberType({ number, type }: INumberType) {
  return (
    <div className="absolute top-5 left-5 right-0">
      <h1 className="text-2xl pb-4">{number}</h1>
      <p>{type}</p>
    </div>
  );
}

export default NumberType;
