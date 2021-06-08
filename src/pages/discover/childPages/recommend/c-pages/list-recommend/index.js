import React, { PureComponent } from "react";

import { getListRcmAction } from "../../store/actionCreators";
import { connect } from "react-redux";

import { ListRecommendWrapper } from "./style";
import HYTopRanking from "@/components/top-ranking";
import Header from "@/components/discover-rcm-header/index.js";

const headerProps = {
  title: "榜单",
  more: "更多",
  tab: [],
};

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      newList: {},
      originalList: {},
      soaringList: {},
    };
  }

  componentDidMount() {
    this.props.dispatchList(0);
    this.props.dispatchList(2);
    this.props.dispatchList(3);
  }

  componentDidUpdate() {
    this.setState({
      newList: this.props.topNewList,
      originalList: this.props.topOriginList,
      soaringList: this.props.topUpList,
    });
  }

  render() {
    const { newList, originalList, soaringList } = this.state;
    return (
      <div>
        <Header headerProps={headerProps}></Header>
        <ListRecommendWrapper>
          <div className="tops">
            <HYTopRanking info={soaringList} />
            <HYTopRanking info={newList} />
            <HYTopRanking info={originalList} />
          </div>
        </ListRecommendWrapper>
      </div>
    );
  }
}

const componentState = function (state) {
  return {
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"]),
  };
};

const componentDispatch = function (dispatch) {
  return {
    dispatchList: function (list) {
      dispatch(getListRcmAction(list));
    },
  };
};

export default connect(componentState, componentDispatch)(App);
