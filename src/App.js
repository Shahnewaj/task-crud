import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import RootRouter from "./routes";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <RootRouter />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
