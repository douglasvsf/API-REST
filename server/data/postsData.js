const database = require('../infra/database');
const crypto = require('crypto');

const generate = function () {
	return crypto.randomBytes(10).toString('hex');
};

exports.getPostsProd = function () {
	return database.query('select * from tb_produto');
};

exports.getPostProdByName = function (name) {
	return database.oneOrNone("select * from tb_produto where nome_produto = $1", [name]);
};

exports.getPostProdPag = function (start,end) {
	return database.query("select * from tb_produto OFFSET $1 LIMIT $2", [start,end]);
};

exports.savePostProd = function (post) {
	return database.one('insert into tb_produto (nome_produto, tamanho_produto, cor, valor) values ($1, $2, $3, $4) returning *', [generate(), generate(), cryptoRandomNumber(), cryptoRandomNumber()]);
};

exports.updatePostProd = function (id,name,size,color,value) {
	return database.none('update tb_produto set nome_produto = $2, tamanho_produto = $3, cor = $4, valor = $5 where id_produto = $1', [id,generate(), generate(), cryptoRandomNumber(), cryptoRandomNumber()]);
};

exports.deletePostProd = function (id) {
	return database.none('delete from tb_produto where id_produto = $1', [id]);
};
// fim produtos

// inicio pedido

exports.getPostsPed = function () {
	return database.query('select * from tb_pedido a join rel_itens b ON a.id_pedido = b.id_pedido join tb_produto c ON b.id_produto = c.id_produto');
};

exports.getPostPedById = function (id_cliente) {
	return database.query("select * from tb_pedido a join rel_itens b ON a.id_pedido = b.id_pedido join tb_produto c ON b.id_produto = c.id_produto where a.id_cliente = $1", [id_cliente]);
};

exports.getPostPedPag = function (start,end) {
	return database.query("select * from tb_pedido a join rel_itens b ON a.id_pedido = b.id_pedido join tb_produto c ON b.id_produto = c.id_produto OFFSET $1 LIMIT $2", [start,end]);
};

exports.savePostPed = function (post) {
	return database.one('insert into tb_pedido (data_pedido, forma_pagamento, data_entrega_prevista, data_entrega_efetuada, id_cliente) values (CURRENT_TIMESTAMP, $1, $2, $3, $4) returning *', [generate(), '30/10/2021 13:35:15', '15/11/2021 14:35:15', cryptoRandomNumber2()]);
};

exports.savePostProdInPed = function (id_pedido,id_produto) {
	return database.one('insert into rel_itens (id_produto, id_pedido) values ($2, $1) returning *', [id_pedido,id_produto]);
};

exports.updatePostPed = function (id,name,size,color,value) {
	return database.none('update tb_pedido set data_pedido = CURRENT_TIMESTAMP, forma_pagamento = $2, data_entrega_prevista = $3, data_entrega_efetuada = $4, id_cliente = $5 where id_pedido = $1', [id,generate(), '30/10/2021 08:50:15', '15/10/2021 10:10:15', cryptoRandomNumber2()]);
};

exports.deletePostPed = function (id) {
            database.none('delete from rel_itens where id_pedido = $1', [id]);
	return database.none('delete from tb_pedido where id_pedido = $1', [id]);
};

function cryptoRandomNumber(){
    var result = Math.floor(parseInt(crypto.randomBytes(6).toString('hex'), 16)/281474976710656*(1000-1+1)+1);
    if(result>1000){
        result = 1000;
    }
    return result;
}

function cryptoRandomNumber2(){
    var result = Math.floor(parseInt(crypto.randomBytes(6).toString('hex'), 16)/281474976710656*(10-1+1)+1);
    if(result>10){
        result = 10;
    }
    return result;  
}