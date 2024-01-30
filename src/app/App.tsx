import { withProviders } from '@app/provider';
import { Routing } from '@pages/index';

const App = () => {
  return <Routing />
};

export default withProviders(<App />);
