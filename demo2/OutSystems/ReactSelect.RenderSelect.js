$parameters.ReactRoot.render(
    React.createElement(SelectWrapper, { options: JSON.parse($parameters.OptionsList), onChange: (option)=>$actions.OnChangeReact(JSON.stringify(option)) })
);

