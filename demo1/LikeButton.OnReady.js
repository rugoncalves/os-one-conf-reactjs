// Find the DOM container, and render Like buttons into them.
const rootElement = document.querySelector('#' + $parameters.ContainerId);
if(rootElement){
    $parameters.ReactRoot = ReactDOM.createRoot(rootElement);
    $parameters.ReactRoot.customButtonRef = React.createRef();
}
