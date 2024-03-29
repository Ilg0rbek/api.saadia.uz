import Joi from "joi"

const LOGIN = (data) => {
    const schema = Joi.object({
        user_phone: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')).required(),
        user_password: Joi.string().min(3).required()
    })
    try {
        if (schema.validate(data).error) {
            return {
                status: false, message: schema.validate(data).error.details[0].message,
            }
        }
        return {
            status: true
        }
    } catch (err) {
        return err
    }
}

const REGISTER = (data) => {
    const schema = Joi.object({
        user_phone: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')).required(),
        user_first_name: Joi.string().min(3).required(),
        user_last_name: Joi.string().min(3),
        user_password: Joi.string().min(6).required(),
        user_telegram_id: Joi.string().min(8),
    })
    try {
        if (schema.validate(data).error) {
            return {
                status: false, message: schema.validate(data).error.details[0].message,
            }
        }
        return {
            status: true
        }
    } catch (err) {
        return err
    }
}

export default {
    LOGIN, REGISTER
}