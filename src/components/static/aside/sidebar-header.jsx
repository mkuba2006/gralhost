import classes from "./aside.module.css";




const Head = (props) => {
  return (
    <header className={classes.sidebar_header} onClick={props.onClick}>
        <button type="button" className={classes.sidebar_burger}>
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
        </button>
        <img src="https://www.gral.pl/images/logo-h2.gif" className={classes.sidebar_logo} alt="Logo" />
    </header>
  );
};

export default Head;
