import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./App.css";
function App() {


  return (
    <div>
      <h1 className="title">Teknolojik Yemekler</h1>
        <div className="genel">
      <div className="content">
        <h3>Position Absolute Acı Pizza</h3>
        <span>85.5</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
          amet ipsum nisi. Aenean vel quam lectus. Pellentesque venenatis, nunc
          eget pharetra cursus, tellus erat pulvinar elit, ac laoreet metus
          lectus eget odio. Donec nisi mi, aliquam in mollis eget, laoreet sed
          urna. Cras nunc turpis, accumsan nec fringilla in, gravida vel risus.
          Quisque condimentum tellus id iaculis faucibus. Fusce ac mauris mollis
          justo iaculis fringilla. Donec commodo fringilla consequat. Vivamus
          elit arcu, euismod non placerat ac, accumsan et augue.
        </p>
      </div>

      <div className="boyut">
        <div className="ratio">
          <FormGroup tag="fieldset">
            <legend>Boyut Seç</legend>

            <FormGroup check>
              <Input name="radio1" type="radio" />
              <Label check>Küçük</Label>
            </FormGroup>

            <FormGroup check>
              <Input name="radio1" type="radio" />
              <Label check>Orta</Label>
            </FormGroup>

            <FormGroup check>
              <Input name="radio1" type="radio" />
              <Label check>Büyük</Label>
            </FormGroup>
          </FormGroup>
        </div>

        <div className="hamur">
          <span>Hamur Seç</span>
          <Input bsSize="sm" className="mb-3" type="select">
            <option>küçük</option>
            <option>orta</option>
            <option>büyük</option>
          </Input>
        </div>
      </div>

      <div className="ekstra">
        <FormGroup tag="fieldset">
          <legend>Ek Malzemeler</legend>

          <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>domates</Label>
          </FormGroup>

          <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>biber</Label>
          </FormGroup>

          <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>sucuk</Label>
          </FormGroup>
          
           <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>mısır</Label>
          </FormGroup>


           <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>sarımsak</Label>
          </FormGroup>

           <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>ananas</Label>
          </FormGroup>

           <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>soğan</Label>
          </FormGroup>

           <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>tavuk</Label>
          </FormGroup>

        </FormGroup>
      </div>
      </div>
    </div>
  );
}

export default App;
