import joi from 'joi';
import joiDate from "@joi/date";

const joiWithDate = joi.extend(joiDate);

const emailRegex =
    new RegExp(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/);
const phoneNumberRegex = new RegExp(/^\d{8,11}$/);
//const photoRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

const patientSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().pattern(emailRegex).empty(''),
    phone: joi.string().pattern(phoneNumberRegex).min(8).max(13).empty(''),
    photo: joi.string().empty(''),
    gender: joi.string().min(1).max(1).required(),
    birthdate: joiWithDate.date().format("DD-MM-YYYY").max('now').required(),
    domSm: joi.string().min(3).max(10).required(),
    domIm: joi.string().min(3).max(10).required(),
    sports: joi.string().empty(''),
    weight: joi.number().min(1).max(1000).required(),
    height: joi.number().min(1).max(300).required()
});

export default patientSchema;