import { IData, IDataTypes } from '../models';

export function countType(arr: Array<IData>): IDataTypes {
  const res: IDataTypes = {
    income: 0,
    outcome: 0,
    loan: 0,
    investment: 0,
  };

  Object.keys(res).forEach((key) => {
    arr.forEach((element) => {
      if (key === element.type) {
        res[key]++;
      }
    });
  });

  return res;
}
