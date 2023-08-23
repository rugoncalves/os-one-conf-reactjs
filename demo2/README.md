# demo 2
In this demo we'll try to bundle a reactjs component to be used in OutSystems.

## Required tools
- Node JS
- npm
- github
- Visual Studio Code

## Setting up this demo

1. Setup Node.js and npm:
Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official Node.js website: [https://nodejs.org](https://nodejs.org/)

2. Create Project Folder:
Create a new folder for your project. You can name it something like "react-select-wrapper".

3. Navigate to Project Folder:
Open a terminal or command prompt and navigate to your project folder:
```
cd path/to/one-conf-reactjs-outsystems/Demo2
```

4. Initialize Project:
Initialize a new npm project using the following command:
```
npm init -y
```

5. Install Dependencies:
Install the necessary dependencies: React, React Select, and any other packages you might need. In this case, you'll need react, react-dom, and react-select. Install them using:
```
npm install react react-dom react-select
npm install react-scripts --save-dev
```
6. Edit package.json
Add the following command in the scripts section:
```
"start": "react-scripts start"
```

7. Create Project Structure:
Create the following folder structure inside your project folder:
```
├── src/
│   ├── components/
│   │   ├── SelectWrapper.jsx
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
└── package.json
```

8. Create HTML File:
Inside the public folder, create an index.html file with the following content:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Select Wrapper</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

9. Create the App.js File:
```
import React from 'react';
import SelectWrapper from './components/SelectWrapper';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
];

const App = () => {
    const handleSelectChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <h1>React Select Wrapper Example</h1>
            <SelectWrapper options={options} onChange={handleSelectChange} />
        </div>
    );
};

export default App;
```

10. Create the index.js File:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

11. Create the SelectWrapper.jsx File:
```
import React, { Component } from 'react';
import Select from 'react-select';

export default class SelectWrapper extends Component {
    render() {
        const { options, onChange } = this.props;

        return (
            <Select options={options} onChange={onChange} />
        );
    }
}
```

12. Now it's time to test our code. In the terminal:
```
npm run start
```
A browser window should appear and the application we just created should appear containing a select with 2 options.

### Preparing the project to bundle
13. Install additional tools for development:
   a. rollup (several)
   b. babel (several)
```
npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-babel @babel/core @babel/preset-react --save-de
```

14. Create a (new) entry point for rollup
Create an entry point JavaScript file that imports all the JSX files from the components folder and exports them. Let's name this file index.js:
```
import SelectWrapper from './SelectWrapper.jsx';
// Import other components here

export {
    SelectWrapper,
    // Export other components here
};

```

15. Add the configs for rollup:
```
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/components/index.js',
    output: {
        file: 'dist/reactjs-components.bundle.js', // Adjust the output file path
        format: 'iife', // Output format as an Immediately Invoked Function Expression
        name: 'ReactJSComponents', // Global variable name for the component
        globals: {
            react: 'React', // External dependency globals
            'react-dom': 'ReactDOM'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            presets: ['@babel/preset-react']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production') // Replace with appropriate value
        })
    ],
    external: ['react', 'react-dom']
};
```

16. Generate the bundle:
```
npx rollup -c
```
The generated file will be in the folder `dist` and can be taken to your OutSystems module, and be used in the application.
See the OML on how it could be used then. 
