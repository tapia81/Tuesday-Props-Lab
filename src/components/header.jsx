function Header(props) {
  return (
    <div className="header">
      <div className="app-title">
        <h1>{props.appTitle }</h1>
      </div>
      <div className="nav-bar">
        <button>{props.button1 }</button>
        <button>{props.button2 }</button>
        <button>{props.button3 }</button>
      </div>
    </div>
  );
}
export default Header