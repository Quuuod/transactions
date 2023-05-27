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

export interface ITransactionTypes {
  income: number;
  outcome: number;
  loan: number;
  investment: number;
}

export interface ITransaction {
  number: number;
  type: string;
  text: string;
  tab: number;
}
export interface ITransactionNavigate {
  text: string;
  tab: number;
}

export interface INumberType {
  number: number;
  type: string;
}

export interface IWelcome {
  total: number;
}

export interface DataProps {
  data: IAllData;
}

export enum TransactionsTypes {
  income = 0,
  outcome = 1,
  loan = 2,
  investment = 3,
}

export const tabs: string[] = ['Income', 'Outcome', 'Loans', 'Investments'];
