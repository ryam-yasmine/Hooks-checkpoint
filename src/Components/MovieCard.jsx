import "./Card.css";

const MovieCard = ({ item }) => {
  return (
    <>
      {item.map((e) => {
        return (
          <div className="Card">
            <img src={e.imgURL} alt={e.title} />
            <div className="infos">
              <div className="head">
                <h3 className="title">{e.title}</h3>
                <h5 className="Rating">{e.Rating}/10</h5>
              </div>
              <p className="desc">{e.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
/*
function MovieCard(props) {
  const { title, imgURL, Rating, desc } = props;
  return (
    <div className="Card">
      <img src={imgURL} alt="" />
      <div className="infos">
        <div className="head">
          <h3 className="title">{title}</h3>
          <h5 className="Rating">{Rating}</h5>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}*/

export default MovieCard;
