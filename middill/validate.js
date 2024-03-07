const yup = require("yup");

const validate = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup
        .string()
        .matches(/^[A-Z,a-z]+$/)
        .email()
        .required(),
      cin: yup.number().min(3).required(),
    });

    await schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
module.exports = validate;
