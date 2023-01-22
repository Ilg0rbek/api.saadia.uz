import query from "#query/auth.Query"
import db from "#config/db"
import Auth from "#models/auth.Model";

const LOGIN = async ({user_phone, user_password}) => {
    return await Auth.findOne({
        where: {
            user_phone, user_password
        }
    })
}

const REGISTER = async ({user_phone, user_password, user_first_name, user_last_name, user_telegram_id}) => {
    const user = await Auth.findOne({
        where: {
            user_phone, user_password
        }
    })

    if (user) {
        return user
    }

    return await Auth.create({
        user_first_name, user_last_name, user_phone, user_password, user_telegram_id
    })
}

const checkUser = async ({user_phone}) => {
    const data = await db(query.checkUser, user_phone)
    return data
}


const checkTelegramId = async ({user_telegram_id}) => {
    const data = await db(query.checkTelegramId, user_telegram_id)
    return data
}


export default {
    LOGIN, REGISTER, checkUser, checkTelegramId, Auth
}