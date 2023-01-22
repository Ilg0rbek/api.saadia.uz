import query from "#query/wishlists.Query"
import db from "#config/db"

const GET = async ({wishlist_user_id}) => {
	const data = await db(query.GET, wishlist_user_id)
	return data
}

const GET_ONE = async ({ wishlist_id }) => {
	const [ data ] = await db(query.GET_ONE, wishlist_id)
	return data
}

const POST = async ({ wishlist_user_id, wishlist_product_id}) => {
	const [ data ] = await db(query.POST, wishlist_user_id, wishlist_product_id)
	return data
}

const DELETE = async ({ wishlist_id }) => {
	const [ data ] = await db(query.DELETE, wishlist_id)
	return data
}
const checkProduct = async ({ wishlist_product_id }) => {
	const [ data ] = await db(query.checkProduct, wishlist_product_id)
	return data
}

const checkUser = async ({ wishlist_user_id }) => {
	const [ data ] = await db(query.checkUser, wishlist_user_id)
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	DELETE,
	checkProduct,
	checkUser
}