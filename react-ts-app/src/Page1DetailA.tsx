import { useLocation, useHistory } from 'react-router-dom';

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();

  const onClickBackButton = () => history.goBack();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBackButton}>戻る</button>
    </div>
  );
};
