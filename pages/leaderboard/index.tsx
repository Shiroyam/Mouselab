import { NextPage } from "next";
import { useState } from "react";
import { Table } from "../../components/table/Table";
import { useKeenSlider } from "keen-slider/react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import cn from "classnames";
import styles from "./leaderboard.module.scss";
import "keen-slider/keen-slider.min.css";

export const Leaderboard: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 2,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className={styles.leaderboard}>
        {loaded && instanceRef.current && (
          <div className={styles.arrows}>
            <MdOutlineArrowBackIosNew
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className={styles.arrow}
            />
            <MdOutlineArrowBackIosNew
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className={styles.arrow}
            />
          </div>
        )}
        <div ref={sliderRef} className={cn("keen-slider")}>
          <div className={cn("keen-slider__slide", styles.table)}>
            <div className={styles.title}>Time 15</div>
            <Table />
          </div>
          <div className={cn("keen-slider__slide", styles.table)}>
            <div className={styles.title}>Time 30</div>
            <Table />
          </div>
          <div className={cn("keen-slider__slide", styles.table)}>
            <div className={styles.title}>Time 60</div>
            <Table />
          </div>
          <div className={cn("keen-slider__slide", styles.table)}>
            <div className={styles.title}>Time 120</div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
