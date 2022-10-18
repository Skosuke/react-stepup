# project

## 環境構築

local

```
docker-compose build

docker-compose run --rm node sh -c 'npx create-react-app react-ts-app --template typescript'


```

```
docker-compose up -d
```

### react バージョン 17 にダウングレードしたい場合

```

docker exec -it <containerID> sh

```

container

```

cd react-ts-app/

```

package.json の以下上書き

"@testing-library/react": "^12.0.0"

"@testing-library/user-event": "^12.0.0"

"@types/react": "^17.0.0"

"@types/react-dom": "^17.0.0"

"react": "^17.0.0"

"react-dom": "^17.0.0"

container

```

npm list react

npm i

npm list react

```

### index.tsx を 17 の仕様に上書き

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

<参考 URL>

https://note.com/hiropython/n/ne4c5611d1d01

https://create-react-app.dev/docs/getting-started/

https://zenn.dev/fuuukeee3/articles/9cd87e664a87e4

## react-router-dom をインストール

react17 では 6 系が正常動作しないため 5 を指定

@types/react-router-dom は typescript 環境で必要

```
npm i --save-dev react-router-dom@5.3.0
npm i --save-dev @types/react-router-dom
```

## styled-components をインストール

```
npm i --save-dev styled-components@5.3.6
npm i --save-dev @types/styled-components@5.1.26
```
