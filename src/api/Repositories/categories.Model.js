import query from "#query/categories.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({ category_id }) => {
	const data = await db(query.GET_ONE, category_id)
	return data
}

const GET_PRODUCTS = async ({ category_id, limit, offset }) => {
	const data = await limit ? db(query.GET_PRODUCTS, category_id, limit, offset) : db(query.GET_ALL_PRODUCTS, category_id)
	return data
}

const POST = async ({ category_name }) => {
	const [ rows ] = await db(query.POST, category_name)
	return rows
}

const PUT = async ({ category_id, category_name}) => {
	const [ rows ] = await db(query.PUT, category_id, category_name)
	return rows
}

const DELETE = async ({ category_id }) => {
	const [ rows ] = await db(query.DELETE, category_id)
	return rows
}

const checkCategory =  async ({ category_name }) => {
	const [ rows ] = await db(query.checkCategory, category_name)
	return rows
}

export default {
	GET,
	GET_ONE,
	GET_PRODUCTS,
	POST,
	PUT,
	DELETE,
	checkCategory
}