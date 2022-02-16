import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Wrapper from "./Wrapper";

function App() {
  return (
    <RecoilRoot>
      <Wrapper />
    </RecoilRoot>
  );
}

export default App;
