import * as React from "react";
import {connect} from "react-redux";
import {getInsets, setInset} from "../../store/inset/actions";
import {Div} from "../styled";

class InsetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {insets: []};
  }

  componentDidMount() {
    this.props.getInsets();
  }

  setInset(inset) {
      this.props.setInset({inset: inset});
  }

  render() {
    return (
        <Div>
          {this.props.insets && this.props.insets.length
              ? this.props.insets.map((inset, index) => {
                return <button
                    key={inset.id}
                    onClick={this.setInset.bind(this, inset)}
                >{inset.title}</button>;
              })
              : "No insets."}
        </Div>
    )
  }
}

const mapStateToProps = state => {
  const insetState = state.inset;
  return {
    insets: insetState.insets,
    isFetching: insetState.isFetching
  };
};

export default connect(
    mapStateToProps,
    {getInsets, setInset}
)(InsetsList);