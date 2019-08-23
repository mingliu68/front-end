import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// carousel style
import "./Carousel.css";

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    return axios
      .get(`http://localhost:8000/api/pictures/animal/34`)
      .then(response => {
        console.log(response)
        const { img_url, img_id, animal_id } = response
        const images = img_url
        this.setState({ images: response.data }) 
      })
  }

  render() {

    const customStyles = {
      // carousel: {
      //   width: "90%",
      //   margin: "80px 0px 20px 20px",
      //   marginLeft: "140px",
      // }
    }

    // style={customStyles.carousel}

    const { images } = this.state
    if (!images.length) return <div>Images are not fetched yet!</div>

    return (
      // <GridContainer > 
        // <GridItem xs={6} sm={8} md={8} lg={8} xl={8}>
          <Carousel autoPlay infiniteLoop>
            {/* //  <Carousel> */}
            {
              Array.from(images).map(image => {
                return (
                  <div style={{ backgroundImage: `url(${ image.img_url })`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <img style={{ opacity: "0" }} src={ image.img_url } />
                  </div>
                  )
              })
            }
         </Carousel>
        // </GridItem>
      // </GridContainer>
    )
  }
}

export default CustomCarousel
