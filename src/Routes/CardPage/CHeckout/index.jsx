import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Form, Formik, useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { clearBooks } from "../../../Redux/actions";
import { validate } from "./CheckInpusts";

export default function FormDialog() {
  const classes = useStyles();
  const checkedBooks = useSelector((state) => state.checkedBooks);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    history.push("/cart");
  };

  const formik = useFormik({
    initialValues: {
      books: checkedBooks,
      city: "",
      adress: "",
      phone: "",
      delivery: "",
    },
    validate,
    onSubmit: () => {
      dispatch(clearBooks());
      history.push("/books");
    },
  });

  return (
    <div>
      <Formik>
        {() => (
          <Form onSubmit={formik.handleSubmit}>
            <div className={classes.paper}>
              <FormControl className={classes.inputWrap}>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  required
                  id="city"
                  onChange={formik.handleChange}
                  aria-describedby="my-helper-text"
                  value={formik.values.city}
                />
                {formik.errors.city ? (
                  <div className={classes.error}>{formik.errors.city}</div>
                ) : null}
              </FormControl>
              <FormControl className={classes.inputWrap}>
                <FormLabel htmlFor="adress">Adress</FormLabel>
                <Input
                  required
                  id="adress"
                  onChange={formik.handleChange}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl className={classes.inputWrap}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input
                  type="phone"
                  required
                  id="phone"
                  onChange={formik.handleChange}
                  aria-describedby="my-helper-text"
                  value={formik.values.phone}
                />
                {formik.errors.phone ? (
                  <div className={classes.error}>{formik.errors.phone}</div>
                ) : null}
              </FormControl>
              <FormControl className={classes.inputWrap}>
                <TextField
                  required
                  id="delivery"
                  label="Birthday"
                  type="date"
                  onChange={formik.handleChange}
                  className={classes.textField}
                  value={formik.values.delivery}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {formik.errors.delivery ? (
                  <div className={classes.error}>{formik.errors.delivery}</div>
                ) : null}
              </FormControl>
              <ButtonGroup
                className={classes.btn}
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                <Button onClick={handleClose}>Cancel</Button>
              </ButtonGroup>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
