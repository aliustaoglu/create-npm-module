A module to help you creating npm modules for ReactJS

It's supposed to be used as a global npm package.

Creates the boilerplate when you want to publish npm package for a React component
It makes the configurations for webpack and babel so you can use ES6

You will need to edit the boilerplate for your needs before you publish it to NPM

#INSTALLATION and USAGE

> 1. npm install -g create-npm-module
> 2. create-npm-module my-awesome-module
> 3. cd my-awesome-module
> 4. npm install
> 5. npm run build
> 6. npm publish

Before 4th step you may need to make manual changes on package.json file. You need to choose an npm package name wisely. Then update the React component as you wish. Then you are ready to publish it to NPM. But before publishing let's test our component first:

To test your component before you publish to NPM consider installing it locally in your React App:

> npm install c:\...\my-awesome-module --save

Then in your React App:
```javascript
import MyAwesomeModule from 'my-awesome-module';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyAwesomeModule />
      </div>
    );
  }
}

export default App;

```

Then in your your App you should see the component rendered. Now you're absolutely ready to publish to NPM. Good luck ;)