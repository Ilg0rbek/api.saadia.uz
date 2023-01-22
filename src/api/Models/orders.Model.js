import query from "#query/orders.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({ order_id }) => {
	const [ data ] = await db(query.GET_ONE, order_id)
	return data
}

const POST = async ({ order_user_id, order_content, order_address, order_phone_number }) => {
	const [ data ] = await db(query.POST, order_user_id, JSON.stringify(order_content), order_address, order_phone_number)
	return data
}

const PUT = async ({order_id, order_user_id, order_content, order_status, order_address, order_phone_number }) => {
	const [ data ] = await db(query.PUT, order_user_id, order_content, order_status, order_address, order_id, order_phone_number)
	return data
}

const DELETE = async ({ order_id }) => {
	const [ data ] = await db(query.DELETE, order_id)
	return data
}

const checkProducts = async ({ order_content }) => {
	let productExists = true;

	order_content.forEach(async product => {
		const [ data ] = await db(query.checkProduct, product.order_product_id)
		if(!data) return false
	})

	return productExists
}

const checkProduct = async ({ order_product_id }) => {
	const [ data ] = await db(query.checkProduct, order_product_id)
	return data
}

const checkUser = async ({ order_user_id }) => {
	const [ data ] = await db(query.checkUser, order_user_id)
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkProduct,
	checkProducts,
	checkUser
}