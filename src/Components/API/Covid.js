import React from "react";
import CovidBanner from "../Layouts/Covid/CovidBanner";
import SplitNumber from "../../utils/SplitNumber";
class CovidComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
    }
  
    componentDidMount() {
      fetch("https://covid19.mathdro.id/api")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              confirmed: result.confirmed.value,
              recovered: result.recovered.value,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, confirmed, recovered} = this.state;
      if (error) {
        return <CovidBanner confirmed={error.message} recovered={error.message}/>;
      } else if (!isLoaded) {
        return <CovidBanner confirmed={"Loading..."} recovered={"Loading..."}/>;
      } else {
        return <CovidBanner confirmed={SplitNumber(confirmed)} recovered={SplitNumber(recovered)}/>
      }
    }
  }

export default CovidComponent;