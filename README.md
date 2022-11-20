<h1>create-react-app</h1>

<h3>React 18 | typescript</h3>

<h3>install</h3>

`npx @twinklecube/create-react-app my-react-app`
<br /><br />
or install in the current folder<br />
`npx @twinklecube/create-react-app .`

<h3>Run and Build</h3>

run in development server<br />
`npm start`
<br />
this command will open the rect app on port 3000<br />
`http:localhost:3000`
<br /><br />
build<br />
`npm run build`<br />
this command will build the app into the `dist` folder

<h3>Styling - followings are configured and ready to use</h3>

<ul>
    <li>css</li>
    <li>css modules</li>
    <li>sass/scss</li>
    <li>sass/scss modules</li>
    <li>less</li>
    <li>less modules</li>
</ul>

<h3>styled-components and @emotion are tested</h3>

install 
<br />
`npm i styled-components`
or
`npm i @emotion/styled`
<br />
and use as usual

<h3>Font and Image formats supported</h3>

Image formats: `jpg, jpeg, svg, png, gif, webp`<br />
Font formats: `woff2, woff, eot, ttf, otf` <br />

<h3>Add any other image or font format</h3>

Step 1: open `webpack.shared.js` which is located in the root folder<br />
Step 2: find `test: /\.(jpg|jpeg|png|gif|svg|webp|woff|woff2|eot|ttf|otf)$/i`<br />
Step 4: include the new file/format extension in this list seperated by a pipe character<br />
Step 5: open `module.d.ts` which is located in the `src` folder <br />
Step 6: add `declare module '*.your-file-extension';` at the end of the file.<br />