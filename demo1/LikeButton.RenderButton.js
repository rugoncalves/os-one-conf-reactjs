$parameters.ReactRoot.render(
    React.createElement(
        LikeButton, 
        { 
            /* Configs to LikeButton */
            commentID: 1, 
            callback: $actions.ButtonClicked, 
            className: $parameters.ExtendedClass 
        }
    )
);
