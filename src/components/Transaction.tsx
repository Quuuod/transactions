import SeeTransaction from './SeeTransaction';

function Transaction({
  amount,
  type,
  text,
}: {
  amount: number;
  type: string;
  text: string;
}) {
  return (
    <div className="relative p-5 border bg-white rounded-lg h-40">
      <div className="absolute top-5 left-5 right-0">
        <h1 className="text-2xl pb-4">{amount}</h1>
        <p>{type}</p>
      </div>
      <div className="absolute bottom-5 left-48 right-0">
        <SeeTransaction text={text} />
      </div>
    </div>
  );
}

export default Transaction;
