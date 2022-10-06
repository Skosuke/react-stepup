# project

##　環境構築

local

```
docker-compose build

docker-compose run --rm node sh -c 'npx create-react-app react-ts-app --template typescript'

docker-compose up -d

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

<参考 URL>

https://note.com/hiropython/n/ne4c5611d1d01

https://create-react-app.dev/docs/getting-started/

https://zenn.dev/fuuukeee3/articles/9cd87e664a87e4
