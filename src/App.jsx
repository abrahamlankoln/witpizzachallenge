import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [extras, setExtras] = useState([]); // seçilen ekstra malzemeler
  const basePrice = 85; // pizza fiyatı
  const extraPrice = 5; // her ekstra malzeme fiyatı

  const ekstraMalzemeler = [
    "Domates",
    "Biber",
    "Sucuk",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Soğan",
    "Tavuk",
  ];

  const handleExtraChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      if (extras.length < 10) {
        setExtras([...extras, value]); // seçilenleri ekle
      } else {
        e.target.checked = false; // 10'u geçemez
        alert("En fazla 10 malzeme seçebilirsiniz!");
      }
    } else {
      setExtras(extras.filter((item) => item !== value)); // seçileni çıkar
    }
  };

  const toplam = (basePrice + extras.length * extraPrice) * count;

  return (
    <div>
      <h1 className="title">Teknolojik Yemekler</h1>
      <div className="genel">
        <div className="content">
          <h3>Position Absolute Acı Pizza</h3>
          <span className="fiyat">{basePrice}₺</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ipsum nisi. Aenean vel quam lectus. Pellentesque venenatis, nunc
            eget pharetra cursus, tellus erat pulvinar elit, ac laoreet metus
            lectus eget odio.
          </p>
        </div>

        <div className="boyut">
          <div className="ratio">
            <FormGroup tag="fieldset">
              <h4>Boyut Seç</h4>
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
            <h4>Hamur Seç</h4>
            <Input bsSize="sm" className="mb-3" type="select">
              <option>Hamur Kalınlığı</option>
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </Input>
          </div>
        </div>

        <div className="ekstra">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 Malzeme seçebilirsiniz !! {extraPrice}₺ her biri</p>
          <FormGroup tag="fieldset">
            {ekstraMalzemeler.map((item) => (
              <FormGroup check key={item}>
                <Input
                  type="checkbox"
                  value={item}
                  onChange={handleExtraChange}
                />
                <Label check>{item}</Label>
              </FormGroup>
            ))}
          </FormGroup>
        </div>

        <div>
          <h2>Sipariş Notu</h2>
          <Input
            className="mb-3 custom-input"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>

        <div className="siparis-container">
          <div className="counter">
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <div className="order-summary">
            <h4>Sipariş Toplamı</h4>
            <p><strong>Seçilen Ekstralar:</strong> {extras.length * extraPrice}₺</p>
            <p className="total">Toplam: {toplam}₺</p>
            <button className="order-btn">SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
