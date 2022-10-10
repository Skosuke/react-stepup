import React, { useState, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChildArea } from './component/ChildArea';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [open]);

  const temp = useMemo(() => 1 + 2, [open]);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
