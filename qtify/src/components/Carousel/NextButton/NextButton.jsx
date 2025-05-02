import RightArrow from "../../../assets/RightArrow.svg";
import styles from "./NextButton.module.css";


const NextButton = ({swiper}) => {
    
  return (
    <div className={`${styles.button} ${swiper?.isEnd ? styles.hidden : ''}`} onClick={() => swiper?.slideNext()}>
      <img src={RightArrow} />
    </div>
  );
};

export default NextButton;