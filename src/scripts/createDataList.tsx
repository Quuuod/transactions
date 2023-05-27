import { IData } from '../models';

export function CreateDataList(
  usersData: Array<IData>,
  transactionsType: string
) {
  const res = usersData
    .map((element) => {
      const { first, last } = element.name;
      if (element.type === transactionsType) {
        return (
          <tr
            key={first + last}
            className="border-b-2 border-slate-300 text-left"
          >
            <td>
              {first} {last}
            </td>
            <td>{element.amount}</td>
          </tr>
        );
      } else return undefined; //для того чтобы не мутировать изначальные данные
    })
    .filter((element) => element !== undefined); //удаление лишних элементов из получившегося массива

  return <tbody>{res}</tbody>;
}
