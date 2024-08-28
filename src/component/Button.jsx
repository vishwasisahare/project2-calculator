import styles from "./Button.module.css";

const Button = ({onButtonClick}) => {
  const ButtonName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "="
  ];
  return (
    <div className={styles.buttoncontainer}>
      {ButtonName.map((ButtonName) => (
        <button className={styles.button} onClick={() => onButtonClick(ButtonName)} key={ButtonName}>
          {ButtonName}</button>
      ))}
    </div>
  );
};
export default Button;
