import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { getPersonalRcmAction } from "../../store/actionCreators";

import SongCover from "@/components/songs-cover/index.js";
import { PersonalRecommendWrapper } from "./style";
import Header from "@/components/discover-rcm-header/index.js";

const headerProps = {
  title: "个性化推荐",
  tab: [],
};

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      personalRcm: [],
    };
  }

  componentDidMount() {
    this.props.dispacthAction();
  }

  componentDidUpdate() {
    this.setState({
      personalRcm: this.props.personalRcm,
    });
  }

  render() {
    return (
      <div>
        <Header headerProps={headerProps} />
        <PersonalRecommendWrapper>
          {this.state.personalRcm.map((item) => (
            <SongCover key={item.id} item={item} />
          ))}
        </PersonalRecommendWrapper>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    personalRcm: state.getIn(["recommend", "personalRcm"]),
  };
};

const mapDipatchToProps = function (dispatch) {
  return {
    dispacthAction: function () {
      dispatch(getPersonalRcmAction());
    },
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(App);
