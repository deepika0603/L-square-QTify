import LeftArrow from "../../../assets/LeftArrow.svg";
import styles from "./PrevButton.module.css";

const PrevButton = ({ swiper }) => {
  return (
    <div
      className={`${styles.button} ${swiper?.isBeginning ? styles.hidden : ""}`}
      onClick={() => swiper?.slidePrev()}
    >
      <img src={LeftArrow} />
    </div>
  );
};

export default PrevButton;