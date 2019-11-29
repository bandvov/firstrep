import React from "react";
import Spinner from "../Spinner/";
import ErrorIndicator from "../ErrorIndicator";

const withData = View => {
  return class extends React.Component {
    state = {
      data: null,
      loading:true,
      error:false
    };
    componentDidMount() {
      this.update();
    }
    componentDidUpdate(prevProp) {
      if (this.props.getData !== prevProp.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading:true,
        error:false
      })
      console.log("withData props", this.props);
      this.props.getData().then(data => {
        this.setState({ data,
        loading:false });
      }).catch(()=>{
        this.setState({error:true,loading:false})
      })
    }
    render() {
      if (this.state.loading) {
        return <Spinner />;
      }
      if (this.state.error) {
        return <ErrorIndicator />
      }
      return <View {...this.props} data={this.state.data} />;
    }
  };
};

export { withData };
