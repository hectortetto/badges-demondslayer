import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";

import conflogo from "../images/badge-header.svg";

import BadgesList from "../components/BadgesList";

import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
//import Badge from "../components/Badge";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1.constructor()");
    this.state = {
      loading:true,
      error:null,
      data: undefined,
    };
  }
  componentDidMount() {
    this.fetchData();
    console.log("3.componentDidMount()");

    /* this.timeoutId= setTimeout(()=>{
      this.setState({
        loading:true,
        error:null,
        data:undefined
      })
    },100);*/
   this.intervalId= setInterval(this.fetchData,5000);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5.componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("6.componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    if (this.state.loading === true && this.state.data ===undefined) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    console.log("2.render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="BadgeNew__hero">
            <img className="img-fluid" width="150" src={conflogo} alt="Logo" />
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn  btn-primary">
              {" "}
              New Badge{" "}
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badge__container">
            <BadgesList badges={this.state.data} />
            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
