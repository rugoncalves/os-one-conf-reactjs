$parameters.ReactRoot.render(
    React.createElement(
        ReactJSComponents.SelectWrapper, 
        { 
            options: JSON.parse($parameters.OptionsList), 
            onChange: (option)=>{
                $actions.OnChangeReact(JSON.stringify(option));
            } 
        }
    )
);
