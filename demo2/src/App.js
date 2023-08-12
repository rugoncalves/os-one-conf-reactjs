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
