import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Title, Subtitle, User } from "./styles";
import { Creators as TemplateActions } from "~/store/ducks/template";

function Example(props) {
  return (
    <Container>
      <Title>ReactJS Template</Title>
      <Subtitle>
        by:
        <User
          href="https://github.com/vinniciusgomes"
          target="_blank"
          className="ml-2"
        >
          @vinniciusgomes
        </User>
      </Subtitle>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  template: state.templateReducer.template,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TemplateActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Example);
