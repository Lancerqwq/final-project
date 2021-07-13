import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    height: 700,
    "&:hover": {
      opacity: 0.6,
      cursor: "pointer",
    },
  },
  media: {
    width: "100%",
    height: "74%",
  },
  expand: {
    marginLeft: "auto",
  },
  cardHead: {
    fontSize: 18,
  },
  wrap: {
    padding: 30,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 25,
  },
  info: {
    textAlign: "left",
  },
}));
