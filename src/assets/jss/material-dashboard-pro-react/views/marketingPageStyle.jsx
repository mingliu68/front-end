import { title, whiteColor, blackColor } from "assets/jss/material-dashboard-pro-react.jsx";
import { relative } from "path";

const marketingPageStyle = () => ({

    div_1: {
      position: "relative",
      width: "100%",
      top: "0",
      margin: "0 auto",
      height: "35rem",
      backgroundColor: "#309FAD",
      zIndex: "1",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },

    div1img : {
        float: "right",
        marginRight: "140px",
        marginTop: "-100px"
    },
    div_1_pic :{
        width: "450px",
        height: "auto",
        float: "right",
    },


    headerTitle: {
        ...title,
        marginTop: "6rem",
        marginBottom: "0.9rem",
        fontSize: "3.5em",
        color: whiteColor,
        letterSpacing: "14px",
        fontWeight: "800",
        textTransform: "uppercase",
        textShadow: "3px 3px 0px #54AFBA",
        
      },    

    div_2: {
        position: "relative",
        width: "100%",
        margin: "0 auto",
        minHeight: "20rem",
        background: "rgb(242,242,242)",
        background: "linear-gradient(180deg, rgba(242,242,242,1) 29%, rgba(214,230,232,1) 100%)",
        zIndex: "1",
      },

    div2img : {
        zIndex: "3",
        float: "right",
        marginRight: "3%",
        marginTop : "-300px",
        position: "relative",
    },
    div_2_pic :{
        width: "530px",
        height: "auto",
        float: "right",
        zIndex: "3",
    },

    iconsBar : {
        width: "80%",
        height: "9.5rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "-50px",
        position: "relative",
        left: "0",
        right: "0",
        borderRadius: "4px",
        boxShadow: "0 0px 5px rgba(0,0,0,0.19)",
        zIndex: "3",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    barType: {
        fontSize: "0.9rem",
        fontFamily: "'Lato', sans-serif",
        textTransform: "none",
        display: "block",
        color: "black",
        fontWeight: "400",
      },

    div_3: {
        position: "relative",
        width: "100%",
        top: "0",
        margin: "0 auto",
        minHeight: "25rem",
        backgroundColor: "#FCFCFC",
        zIndex: "1",
      },

      div_4: {
        position: "relative",
        width: "100%",
        margin: "0 auto",
        minHeight: "25rem",
        background: "rgb(242,242,242)",
        background: "linear-gradient(180deg, rgba(242,242,242,1) 29%, rgba(214,230,232,1) 100%)",
        zIndex: "1",
      },

      containerWrapper: {
        maxWidth: "80%",
        margin: "0 auto",
    },

      signupButton: {
        backgroundColor: "#A464A3",
        marginTop: "30px",
        marginRight: "15px",
        boxShadow: "2px 2px 3px #588CA9",
        fontSize: "1em",
        fontWeight: "700",
        "&:hover": {
         backgroundColor: "#A464A3"
     }
    },
  title: {
    ...title,
    fontSize: "13.7em",
    color: blackColor,
    letterSpacing: "14px",
    fontWeight: "700"
  },
  subTitle: {
    fontSize: "2.25rem",
    marginTop: "5%",
    marginBottom: "8px",
    fontWeight: "700"
  },
  description: {
    fontSize: "1.125rem",
    marginTop: "8px",
    marginBottom: "8px"
  },
  bodyStyle: {
    zIndex: 3,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    color: blackColor

  }


});

export default marketingPageStyle;
