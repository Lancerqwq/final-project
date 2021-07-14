import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    border: "1px solid #212121",
  },
  wrap: {
    width: "70%",
    display: "flex",
    padding: 50,
    justifyContent: "space-around",
    alignContent: "space-between",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
