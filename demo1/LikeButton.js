class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked comment number ' + this.props.commentID;
      }
  
      return React.createElement(
        'button',
        { 
          className: 'btn btn-primary',
          onClick: () => {
              this.setState({ liked: true });
              this.props.callback && setTimeout(this.props.callback, 0);
          }
        },
        '👍🏻'
      );
    }
  }
