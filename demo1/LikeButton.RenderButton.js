$parameters.ReactRoot.render(
    React.createElement(
        LikeButton, 
        { 
            /* Configs to LikeButton */
            ref: $parameters.ReactRoot.customButtonRef,  
            commentID: 1, 
            callback: $actions.ButtonClicked, 
            className: $parameters.ExtendedClass 
        }
    )
);
