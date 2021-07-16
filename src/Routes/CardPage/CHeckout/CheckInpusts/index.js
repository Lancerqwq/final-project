export const validate = (values) => {
  const errors = {};
  const checkLetter = /^[A-Za-z]+$/;
  const checkPhone = /^[0-9]{10}$/;
  const checkDelivery =
    Date.parse(new Date(values.delivery)) > Date.parse(new Date() + 24 * 3600);

  if (!values.city.match(checkLetter)) {
    errors.city = "Enter only letters";
  }
  if (!values.phone.match(checkPhone)) {
    errors.phone = "Enterenter only 10 numbers";
  }
  if (!checkDelivery) {
    errors.delivery = "Minimum order time 24 hours";
  }
  return errors;
};
