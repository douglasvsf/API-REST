const postsData = require('../data/postsData');

exports.getPostsProd = function () {
	return postsData.getPostsProd();
};

exports.getPostProdByName = function (name) {
	return postsData.getPostProdByName(name);
};

exports.getPostProdPag = function (start,end) {
	return postsData.getPostProdPag(start,end);
};

exports.savePostProd = function (post) {
	return postsData.savePostProd(post);
};

exports.updatePostProd = function (id) {
	return postsData.updatePostProd(id);
};

exports.deletePostProd = function (id) {
	return postsData.deletePostProd(id);
};



// inicio pedido

exports.getPostsPed = function () {
	return postsData.getPostsPed();
};

exports.getPostPedById = function (id_cliente) {
	return postsData.getPostPedById(id_cliente);
};

exports.getPostPedPag = function (start,end) {
	return postsData.getPostPedPag(start,end);
};

exports.savePostPed = function (post) {
	return postsData.savePostPed(post);
};

exports.savePostProdInPed = function (id_pedido,id_produto) {
	return postsData.savePostProdInPed(id_pedido,id_produto);
};

exports.updatePostPed = function (id) {
	return postsData.updatePostPed(id);
};

exports.deletePostPed = function (id) {
	return postsData.deletePostPed(id);
};
