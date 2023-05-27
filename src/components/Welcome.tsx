import { IWelcome } from '../models';
import WelcomeHead from './WelcomeHead';
import ShowTransaction from './ShowTransaction';
import Total from './Total';

function Welcome({ total }: IWelcome) {
  return (
    <div className="relative flex items-center justify-center flex-wrap w-auto mx-auto p-10 bg-white rounded-lg m-10 h-96">
      <WelcomeHead />

      <ShowTransaction text="See transactions" tab={0} />

      <Total total={total} />
    </div>
  );
}
export default Welcome;
