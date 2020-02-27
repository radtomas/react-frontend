import React from "react";
import InsetsView from "./components/inset/InsetsView";
import {Container, Wrapper} from "./components/styled";

class App extends React.Component {
  render() {
    return (
        <Wrapper>
          <Container jc="center" ai="center">
            <h1>My website</h1>
          </Container>
          <InsetsView/>
        </Wrapper>
    );
  }
}

export default App;