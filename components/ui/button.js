import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (!props.link) {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}

export default Button;
