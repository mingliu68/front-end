/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Update from "@material-ui/icons/Update";

import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Search from "@material-ui/icons/Search";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Warning from "@material-ui/icons/Warning";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Danger from "components/Typography/Danger.jsx";



import { dataTable } from "variables/general.jsx";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  cardCategory: {
    color: "#333333",
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0"
  },
};

class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      data: dataTable.dataRows.map((prop, key) => {
        return {
          id: key,
          /*name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],*/
          profilePic: prop[0],
          name: prop[1],
          status: prop[2],
          location: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <NavLink to={`/admin/animal/${key}`}>
                <Button
                  justIcon
                  round
                  simple
                  /*onClick={() => {
                    let obj = this.state.data.find(o => o.id === key);
                    alert(
                      "You've clicked LIKE button on \n{ \nName: " +
                        obj.name +
                        ", \nposition: " +
                        obj.position +
                        ", \noffice: " +
                        obj.office +
                        ", \nage: " +
                        obj.age +
                        "\n}."
                    );
                  }}*/
                  color="info"
                  className="view"
                >
                  <Search />
                </Button>
              </NavLink>{" "}
              {/* use this button to add a edit kind of action */}
              <NavLink to={`/admin/editAnimal/${key}`}>
                <Button
                  justIcon
                  round
                  simple
                  /*onClick={() => {
                    let obj = this.state.data.find(o => o.id === key);
                    alert(
                      "You've clicked EDIT button on \n{ \nName: " +
                        obj.name +
                        ", \nposition: " +
                        obj.position +
                        ", \noffice: " +
                        obj.office +
                        ", \nage: " +
                        obj.age +
                        "\n}."
                    );
                  }}*/
                  color="warning"
                  className="edit"
                >
                  <Dvr />
                </Button>
              </NavLink>{" "}
             {/* use this button to remove the data row */}
             {/* <Button
                justIcon
                round
                simple
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>*/}{" "}
            </div>
          )
        };
      })
    };
  }

  componentDidMount() {
    axios
    //.get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/shelter/${localStorage.getItem("shelter_id")}`)
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/shelter/${localStorage.getItem('shelter_id')}`)
    .then(animals => {
      const picStyle = { width: '100%' }
      console.log(animals)
      this.setState({
        animals : animals.data.map((animal, key) => {
        return {
          id: key,
          animalID: animal.id,
          profilePic: <img src={animal.img_url} style={picStyle}/>,
          name: animal.name,
          species: animal.species,
          status: animal.animal_status,
          location: animal.nickname,
          actions: (
            <div className="actions-right">
              {/* view animal */}
              <NavLink to={`/admin/animal/${animal.id}`}>
                <Button
                  justIcon
                  round
                  simple
                  color="info"
                  className="like"
                >
                  <Search />
                </Button>
              </NavLink>{" "}
              {/* edit animal */}
              <NavLink to={`/admin/editAnimal/${animal.id}`}>
                <Button
                  justIcon
                  round
                  simple
                  color="warning"
                  className="edit"
                >
                  <Dvr />
                </Button>
              </NavLink>{" "}
           
            </div>
          )
        };
      })
      })
      console.log("state" , this.state.animals)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { classes } = this.props;
    const card_category = {
      color: "#999",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      paddingTop: "10px",
      marginBottom: "0"
    }
    const card_title = {
      fontSize: "1.825em",
      lineHeight: "1.4em",
      color: "#3C4858",
      minHeight: "auto",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      textDecoration: "none",
      textAlign: "right"
    }

    return (
      <GridContainer>
         <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>pets</Icon>
                </CardIcon>
                <p className={classes.cardCategory} style={card_category}>Current Animals</p>
                <h3 className={classes.cardTitle} style={card_title}>
                  {this.state.animals.length} <small>Animals</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats} style={card_category}>
                <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        <GridItem xs={12}>
          {/*{this.state.animals.map(animal => <p>{animal.name}</p>)}*/}
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Animals</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.animals}
                filterable
                columns={[
                  
                  {
                    Header: "Profile Pic",
                    accessor: "profilePic",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Animal ID",
                    accessor: "animalID"
                  },
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Species",
                    accessor: "species"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  },
                  {
                    Header: "Location",
                    accessor: "location"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID : state.userReducer.userID,
    shelterID : state.shelterReducer.shelterID,
    shelterWorkerID : state.userReducer.shelterWorkerID,
    roleID : state.userReducer.roleID
  }
  
}

ReactTables.propTypes = {
  classes: PropTypes.object
};




export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(ReactTables))


//export default withStyles(styles)(ReactTables);

/*
export default connect(
  mapStateToProps,
  {}
)(ReactTables)
*/