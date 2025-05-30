import images from "../../data/images";

function AnatomySection() {
  return (
    <div className="anatomySection">
      <h1>Dashboard</h1>
      <div className="anatomySection_container">
        <div className="healthy_heart">❤️ Healthy Heart</div>
        <div className="human_body">
          {" "}
          <img src={images.humanAnatomy} alt="human Anatomy" />
        </div>
        <div className="healthy_leg">🦵Healthy Leg</div>
      </div>
    </div>
  );
}
export default AnatomySection;
