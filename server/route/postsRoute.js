const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

// PRODUTOS INICIO

router.get('/posts/getProducts', async function (req, res) {
	const posts = await postsService.getPostsProd();
	res.json(posts);
});

router.get('/posts/getProducts/:name', async function (req, res) {
	const posts = await postsService.getPostProdByName(req.params.name);
	res.json(posts);
});

router.get('/posts/getProducts/Pagination/:start/:end', async function (req, res) {
	const posts = await postsService.getPostProdPag(req.params.start,req.params.end);
	res.json(posts);
});

router.post('/posts/insertProducts', async function (req, res) {
	const post = req.body; // utilizar case tenha
	const newPost = await postsService.savePostProd(post);
	res.json(newPost);
});

router.put('/posts/updateProducts/:id', async function (req, res) {
	await postsService.updatePostProd(req.params.id);
	res.end();
});

router.delete('/posts/deleteProducts/:id', async function (req, res) {
	await postsService.deletePostProd(req.params.id);
	res.end();
});

// PRODUTOS FIM

// PEDIDOS INICIO

router.get('/posts/getPed', async function (req, res) {
	const posts = await postsService.getPostsPed();
	res.json(posts);
});

router.get('/posts/getPed/:id_cliente', async function (req, res) {
	const posts = await postsService.getPostPedById(req.params.id_cliente);
	res.json(posts);
});

router.get('/posts/getPed/Pagination/:start/:end', async function (req, res) {
	const posts = await postsService.getPostPedPag(req.params.start,req.params.end);
	res.json(posts);
});

router.post('/posts/insertPed/:id_produto', async function (req, res) {
	const post = req.body;
	const newPost = await postsService.savePostPed(req.params.id_produto,post);
    const newPostProdInPed = await postsService.savePostProdInPed(newPost.id_pedido,req.params.id_produto);
	res.json(newPostProdInPed);
});

router.put('/posts/updatePed/:id', async function (req, res) {
	await postsService.updatePostPed(req.params.id);
	res.end();
});

router.delete('/posts/deletePed/:id', async function (req, res) {
	await postsService.deletePostPed(req.params.id);
	res.end();
});


// PEDIDOS FIM

module.exports = router;