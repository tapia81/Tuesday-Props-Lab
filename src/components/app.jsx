
function Book(props) {
  return (
    <div className="page-container">
    <div className="container">
        <h1>{props.title}</h1>
        <div className="sub-container">
          
      <img src={props.image} alt="book" />
      <p>{props.description }</p>
        </div>
      </div>
      
      <div className="container">
        <h1>{props.title2}</h1>
        <div className="sub-container">
          
      <img src={props.image2} alt="book" />
      <p>{props.description2}</p>
        </div>
    </div>
    </div>
  );
} export default Book
