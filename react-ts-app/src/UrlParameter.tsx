import { useParams, useLocation } from 'react-router-dom';

interface UrlParameters {
  id: string;
}

export const UrlParameter = () => {
  const { id } = useParams<UrlParameters>();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query.get('name'));
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get('name')}です</p>
    </div>
  );
};
