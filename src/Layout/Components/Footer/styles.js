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
  link: {
    justifyContent: "flex-end",
    gap: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "inherit",
    textDecorationLine: "none",
  },
  footerCopy: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: " center",
  },
});
