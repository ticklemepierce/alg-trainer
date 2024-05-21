import { Typography } from "@mui/material";
import { grey, yellow, green } from "@mui/material/colors";
import classes from "./styles.module.css";

const colorMap = {
  learning: yellow[600],
  learned: green[500],
};

interface IMultiProgress {
  data: Array<{
    value: number;
    name: "learning" | "learned";
  }>;
}

export const MultiProgress = ({ data }: IMultiProgress) => {
  const totalPercent = data.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.bars}>
        {data.map((item, i) => {
          if (item.value === 0) {
            return;
          }
          return (
            <div
              className={classes.bar}
              style={{
                backgroundColor: colorMap[item.name],
                width: item.value + "%",
              }}
              key={i}
            />
          );
        })}
        <div
          className={classes.bar}
          style={{
            backgroundColor: grey[400],
            width: 100 - totalPercent + "%",
          }}
        />
      </div>
      <div className={classes.legends}>
        {data.map((item, i) => (
          <div className={classes.legend} key={i}>
            <Typography
              className={classes.dot}
              style={{ color: colorMap[item.name] }}
            >
              ●
            </Typography>
            <Typography className={classes.label}>
              {`${item.name[0].toUpperCase()}${item.name.slice(1)}`}:{" "}
              {Math.round(item.value)}%
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
