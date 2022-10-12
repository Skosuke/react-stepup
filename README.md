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

## styled-jsx でエラー起きた

react-ts-app/src/typings/custom.d.ts
を追記することで解決。
jsx に対して型宣言が必要らしい。詳しくはよくわからず。

<参考 URL>
https://www.anycodings.com/1questions/1127914/styled-jsx-typescript-error-after-migrating-to-monorepo-structure-property-jsx-does-not-exist-on-type-detailedhtmlprops

## emotion でエラー起きた

「react-ts-app/tsconfig.json」に以下を追記

```
"compilerOptions": {
    "types": ["@emotion/react/types/css-prop"]
  }
```

## emotion 使えない問題

コード上部に以下追記することで解決

```
/** @jsxImportSource @emotion/react */
```

## 後からインストールしたパッケージ

### パッケージ

npm install node-sass

npm install styled-jsx

npm install styled-components

npm i --save-dev @emotion/react

npm i --save-dev @emotion/styled

### 型定義パッケージ

npm i --save-dev @types/styled-components

## save と save-dev ってなに？

npm install と npm install --save-dev の違いは、パッケージを本番環境で使うか、開発環境で使うかだけの違いです。

<参考 URL>
https://zenn.dev/hrkmtsmt/articles/5f4a0e5c79b77a

## vscode のプライグイン

vscode-styled-components: styled-components の入力補完
