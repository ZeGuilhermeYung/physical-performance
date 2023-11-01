import joi from 'joi';

const emailRegex =
    new RegExp(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/);
//const photoRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

const patientSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().pattern(emailRegex).empty(''),
    phone: joi.number().min(10).max(11).empty(''),
    photo: joi.string().empty(''),
    gender: joi.string().min(1).max(1).required(),
    birthdate: joi.date().iso().max('now'),
    domSm: joi.string().min(3).max(10).required(),
    domIm: joi.string().min(3).max(10).required(),
    sports: joi.string().empty(''),
    weight: joi.number().min(1).max(3).required(),
    height: joi.number().min(1).max(3).required()
});

export default patientSchema;