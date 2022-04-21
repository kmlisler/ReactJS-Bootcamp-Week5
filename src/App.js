import Navi from "./Navigate";
import ProductList from "./ProductList";
import Category from "./Category";
import { Container, Col, Row } from "reactstrap";
function App() {
  let titleCategory = "Category List";
  return (
    <div>
      <header>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col>
              <Category title = {titleCategory}/>
            </Col>
            <Col>
              <ProductList title= "Product List"/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
