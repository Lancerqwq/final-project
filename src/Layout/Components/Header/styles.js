import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    position: "static",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "none",
  },
  wrap: {
    justifyContent: "flex-end",
    gap: 10,
  },
  link: {
    fontSize: 18,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  selected: {
    fontWeight: "bold",
    color: "#ff4d40",
  },
});
