import React from 'react'
import {Container, Row} from "react-bootstrap"
import CategoryCard from './CategoryCard'
import BoxImg from '../layouts/box_model.png'
import "../layouts/Style.css"
const CategoryContainer = () => {



    return (
        <div>
            <Container style={{border:"1px solid",textAlign:"center" }}>
       <h1 style={{color:"red"}} >    Welcome To My Container </h1>
       <img className="boxImg" src={BoxImg} alt="CssLayout" />
  <Row>
   <CategoryCard  />
  </Row>
</Container>
        </div>
    )
}

export default CategoryContainer
