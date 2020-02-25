import * as React from "react";
import {connect} from "react-redux";
import {getInsets} from "../store/inset/actions";

class Insets extends React.Component{
    constructor(props) {
        super(props);
        this.state = {insets: []};
    }
    componentDidMount() {
        this.props.getInsets();
    }
    render() {
        return (
            <div>
                <h2>Last Insets(fetching: {this.state.isFetching ? 'Yes' : 'No'}):</h2>
                <ul className="todo-list">
                {this.props.insets && this.props.insets.length
                    ? this.props.insets.map((inset, index) => {
                    return <li>{inset.title}</li>;
                    })
                    : "No insets."}
                </ul>
            </div>
        );
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
  { getInsets }
)(Insets);