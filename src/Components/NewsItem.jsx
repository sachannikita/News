import Image from "../assets/npi.jpg";

const NewsItem = ({ title, description, src, url, theme }) => {
  return (
    <div
      className={`card mb-3 d-inline-block my-3 mx-3 px-2 py-2 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : Image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News are not proper, so this is a custom description."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

