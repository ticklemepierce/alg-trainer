import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import * as classes from "./styles.module.css";

interface IMultiProgress {
  data: Array<{
    value: number;
    name: string;
    color: string; // TODO color type?
  }>;
}

export const MultiProgress = ({ data }: IMultiProgress) => {
  const totalPercent = data.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  // TODO refactor with fewer loops??
  const legends = data.map(function (item, i) {
    if (item.value > 0) {
      return (
        <div className={classes.legend} key={i}>
          <Typography className={classes.dot} style={{ color: item.color }}>
            ●
          </Typography>
          <Typography className={classes.label}>
            {item.name}: {item.value}%
          </Typography>
        </div>
      );
    }
  });

  const bars = data.map(function (item, i) {
    if (item.value > 0) {
      return (
        <div
          className={classes.bar}
          style={{ backgroundColor: item.color, width: item.value + "%" }}
          key={i}
        />
      );
    }
  });

  bars.push(
    <div
      className={classes.bar}
      style={{ backgroundColor: grey[400], width: 100 - totalPercent + "%" }}
    />
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.bars}>{bars}</div>
      <div className={classes.legends}>{legends}</div>
    </div>
  );
};
