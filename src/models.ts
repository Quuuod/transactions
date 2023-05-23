export interface IData {
  _id: string;
  amount: string;
  type: 'income' | 'outcome' | 'loan' | 'investment';
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IAllData {
  total: number;
  data: Array<IData>;
}

export interface IDataTypes {
  income: number;
  outcome: number;
  loan: number;
  investment: number;
}
