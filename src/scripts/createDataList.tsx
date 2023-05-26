import { IData } from "../models";

export function CreateDataList(
  usersData: Array<IData>,
  transactionsType: string
) {
  const res = usersData.map((element) => {
    const { first, last } = element.name;
    if (element.type === transactionsType) {
      return (
        <tr
          key={first + last}
          className='border-b-2 border-slate-300 text-left'
        >
          <td>
            {first} {last}
          </td>
          <td>{element.amount}</td>
        </tr>
      );
    }
  });

  return <tbody>{res}</tbody>;
}
