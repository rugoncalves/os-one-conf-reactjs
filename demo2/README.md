# demo 2
In this demo we'll try to bundle a reactjs component to be used in OutSystems.

## Required tools
- Node JS
- npm
- github
- Visual Studio Code

## Setting up this demo

1. Setup Node.js and npm:
Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official Node.js website: (https://nodejs.org/)[https://nodejs.org/]

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
npm install rollup --save-dev
npm install react-scripts --save-dev
```

6. Create Project Structure:
Create the following folder structure inside your project folder:
```
├── src/
│   ├── components/
│   │   ├── SelectWrapper.js
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
└── package.json
```

7. Create HTML File:
Inside the public folder, create an index.html file with the following content:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Select Wrapper</title>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="../dist/select-wrapper.bundle.js"></script>
</head>
<body>
    <h1>This is the test usage of package!</h1>
    <div id="root"></div>
    <script type="text/javascript">
        const optionList = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            // Add more options as needed
        ];

        const handleSelectChange = (selectedOption) => {
            console.log('The user selected:', selectedOption);
        };

        const root = document.querySelector("#root");
        if(root){
            const reactroot = ReactDOM.createRoot(root);
            reactroot.render(
                React.createElement(SelectWrapper, { options: optionList, onChange: handleSelectChange })
            );
        }
    </script>
</body>
</html>
```

