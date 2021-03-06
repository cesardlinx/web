import React from "react";
import Button from "../UI/button/button";
import CommunityDescription from "./community-description/community-description";
import PhotoSlider from "./photo-slider/photo-slider";
import circleWidget from "../../images/widgets/circle.svg";
import squareWidget from "../../images/widgets/square.svg";
import photo1 from "../../images/slider/1era meetup cuenca.jpg";
import photo2 from "../../images/slider/segunda meetup.jpg";
import "./community-section.css";

const CommunitySection = () => {
  const photos = [
    {
      name: "1era meetup",
      photoURL: photo1,
    },
    {
      name: "2da meetup - Trabajo remoto mitos y realidades",
      photoURL: photo2,
    },
    {
      name: "photo3",
      photoURL:
        "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    },
    {
      name: "photo4",
      photoURL:
        "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
    },
    {
      name: "photo5",
      photoURL:
        "https://i.picsum.photos/id/864/598/386.jpg?hmac=DOo0-DGwCVWdAnQAN_IHDZ2kKK_t10AGle49ztEbyYM",
    },
  ];
  return (
    <section className="community-section ec-container">
      <div className="section-block slider">
        <PhotoSlider photos={photos} />
      </div>
      <div className="section-block info">
        <ul className="headings">
          <li className="heading-item-title">
            <h3 className="heading title">Comunidad</h3>
          </li>
          <li className="heading-item-subtitle">
            <h4 className="heading subtitle">Javascript del Ecuador</h4>
          </li>
        </ul>
        <CommunityDescription />
        <div className="call-to-action">
          <Button type="secondary">Conocer a la Comunidad</Button>
          <Button type="secondary">Cómo ayudar?</Button>
          <Button type="primary">Código de Conducta</Button>
        </div>
      </div>
      <img className="widget circle" src={circleWidget} />
      <img className="widget square" src={squareWidget} />
    </section>
  );
};

export default CommunitySection;
