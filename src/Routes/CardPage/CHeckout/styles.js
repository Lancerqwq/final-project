import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  link: {
    padding: "5px 10px ",
    fontSize: 18,
    color: "white",
    textDecoration: "none",
    backgroundColor: "#ff7043",
    borderRadius: 5,
    "&:hover": {
      transition: "all .4s",
      backgroundColor: "#ff5722",
    },
  },
  paper: {
    textAlign: "left",
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
  inputWrap: {
    minWidth: 330,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    justifyContent: "flex-end",
    gap: 15,
  },
  error: {
    color: "red",
  },
});
