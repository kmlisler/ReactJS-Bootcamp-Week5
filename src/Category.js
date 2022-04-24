import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: "1", name: "Teknoloji" },
        { categoryId: "2", name: "Giyim" },
        { categoryId: "3", name: "Ayakkabı" },
        { categoryId: "4", name: "Müzik" },
        { categoryId: "5", name: "Spor" },
      ],
      selectedCategory:""
    };
  }
  showSelectedCategory= (category) =>{
    this.setState({ selectedCategory: category.name})
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={() => this.showSelectedCategory(category)} key={category.categoryId}>
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>Selected Category : {this.state.selectedCategory}</h4>
      </div>
    );
  }
}

export default Category;
