import React from 'react'
import Property from '../Property'

class TextAnimator extends React.Component {

  render() {
    return (
      <Property
        name={this.props.animator.name}
        messages={this.props.animator.messages}
        renderers={this.props.renderers}
        messageTypes={this.props.messageTypes}
      />
    );
  }
}

export default TextAnimator