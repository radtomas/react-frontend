import * as React from "react";
import Inset from "./Inset";
import InsetsList from "./InsetsList";
import {Container} from "../styled";

class InsetsView extends React.Component{
    render() {
        return (
            <Container jc="space-around">
                <Inset />
                <InsetsList />
            </Container>
        );
    }
}

export default InsetsView;