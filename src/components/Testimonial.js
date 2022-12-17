import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Ciel from "../images/ciel.png";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "crimson", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "crimson", fontSize: "30px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="monial"
      style={{ width: "100%", textAlign: "center", padding: "1rem 4rem" }}
    >
      <h4 style={{ marginBottom: 20 }}>TESTIMONIALS</h4>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        {/* <Card
          img={Ciel}
          text='"Working with Glenn on our  Capstone project was a great experience. He understands instructions very well, writes good code and always asks relevant questions. He would be a great addition to your team"'
          name="Ciel Palacio"
          position="KodeGo Instructor"
        /> */}
        <Card
          img="/ReactPortfolio
/          https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-1/275060766_10217514878458700_8903523126286898553_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEFrgSQB2zhugyfpf30_hZ1Ikz1BKbDf4IiTPUEpsN_gljil5MnThZZUSTWh6Qbg9lXVWOlL7U-mtcxAs8YD5Yi&_nc_ohc=N3YaoMdrrRcAX-1pFfY&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfA_0u3OgsFxCpnzuPpocrmbML2C1942yAp0q0rnmJwADw&oe=639CEFEB"
          text='"Working with Glenn on our  Capstone project was a great experience. He understands instructions very well, writes good code and always asks relevant questions. He would be a great addition to your team"'
          name="Danil Cristales"
          position="KodeGo Teamate"
        />
        <Card
          img="/ReactPortfolio
/          https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-1/285805368_3104744556457593_3057326052926961798_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF2kULP1BXqY_hKUjj4Qgvu1ZjfRbj1NoTVmN9FuPU2hOsUehuSqjhHxMNgaicaxikEgqzO848Ub7tK6FrPv6Ok&_nc_ohc=Qj4XlQtGZzsAX_puffB&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfDOBstCE8I8OJtgkcXmDsLZkNcZNFnDSe2rm2_BbjmVfA&oe=639CABDA"
          text='"Having glenn as a teammate on our capstone project is great. He is creative and a hard worker that gives new ideas for the project."'
          name="Alex Pacaldo"
          position="KodeGo Teamate"
        />
      </Slider>
    </div>
  );
};

const Card = ({ img, text, name, position }) => {
  return (
    <div
      className="test"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 80,
          height: 80,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>{text}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span className="pname" style={{ fontWeight: 500, color: "crimson" }}>
          {name}
        </span>
      </p>
      <p className="pkdt">{position}</p>
    </div>
  );
};

export default Testimonial;
