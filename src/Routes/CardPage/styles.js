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
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    width: 200,
    margin: "20px auto 0px",
    backgroundColor: "#3f51b5",
  },
  amountWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  amount: {
    margin: 0,
    padding: 10,
    textAlign: "center",
  },
  link: {
    width: "100%",
    color: "white",
    textDecoration: "none",
  },
});
