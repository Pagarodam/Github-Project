# Github-Project

## INSTALLATION

CREATING react app whitout create-react app.

1- `npm init -y`
For init a new project and create the package.json file.

2- Create a new folder project in main /src.

3- `git init` for init a new git repository.

4- create .gitingnore.

add this
```
node_modules/
.DS_Store
.cavhe/
dist/
.env
coverage/
.vscode/
.parcel-cache
```
5- `npm install -D prettier`

In the config menu of VS search and check de next boxes.

config/prettier config on search bar (require config)
config/format on save

6- create .prettierrc
Add this to the file.
{}

7- `npm install -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

8- create .eslintrc.json
```
{
  //the order of the "extends" array matters.
  "extends": [
    "eslint:recomended",
    "plugin:import/errors",
    "plugin:react/recomended",
    "plugin:jsx-a11y/recomended",
    "prettier"
  ],
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/prop-types": 0,
    "react/react/in-jsx-scope": 0
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

9- `npm install react react-dom`

10- `npm install -D parcel`

package.json
```
"scripts": {
  "start": "parcel ./src/index.html --open",
  "dev": "parcel src/index.html",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

11- `npm install -D @babel/core @babel/preset-react`

12- create .babelrc
```
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

13- create in src folder the next files App.js index.html index.js


index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="./index.css" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

index.js
```
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
```

App.js
```
function App() {
  return <h1>Succes??</h1>;
}

export default App;
```

14 `npm run dev`

15 delete .babelrc

---

## START INSTRUCCTIONS
1- Clone repository into your 

1- Write in terminal `npm i` for install all dependencies and then npm run dev for init localhost server.

2- Search for a user or a user and repository.

3- If only introduce a user you will receive the first 30 repositories. You can click on one of them to see the issues and pulls or go to next page.

4- If you click on an issue or pull, you'll see the title, description, and all comments with the author's name and the date the comment was made (only 30 issues or pulls will be shown at once).
