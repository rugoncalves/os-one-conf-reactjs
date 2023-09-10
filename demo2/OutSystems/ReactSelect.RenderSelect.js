$parameters.ReactRoot.render(
    React.createElement(
        ReactJSComponents.SelectWrapper, 
        { 
            options: JSON.parse($parameters.OptionsList), 
            onChange: (option)=>{
                $actions.OnChangeSelect(JSON.stringify(option));
            } 
        }
    )
);
