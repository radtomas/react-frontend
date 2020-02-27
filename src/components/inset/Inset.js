import * as React from "react";
import {connect} from "react-redux";
import {Container} from "../styled";
import {addInset} from "../../store/inset/actions";

class Inset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inset: props.inset};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.inset.id === props.inset.id) {
      return null
    }
    return {
      ...state,
      ...props
    };
  }

  handleContentChange(event) {
    let updatedInset = {
      ...this.state.inset,
      content: event.target.value
    };

    this.setState({inset: updatedInset});
  }

  handleTitleChange(event) {
    let updatedInset = {
      ...this.state.inset,
      title: event.target.value
    };

    this.setState({inset: updatedInset});
  }

  handleSubmit(event) {
    this.props.addInset(this.state.inset);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <Container fd="column">
            <p>id: {this.state.inset.id || ""}</p>
            <input
                type="text"
                name="title"
                value={this.state.inset.title || ""}
                onChange={this.handleTitleChange}
            />
            <textarea
                name="content"
                value={this.state.inset.content || ""}
                onChange={this.handleContentChange}
            />
            <button>{this.state.inset.id ? "Update" : "Add"}</button>
          </Container>
        </form>
    );
  }
}

const mapStateToProps = state => {
  return {inset: state.inset.inset}
};

export default connect(mapStateToProps, {addInset})(Inset);