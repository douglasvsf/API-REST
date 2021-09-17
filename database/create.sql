create schema sistema;

create table tb_pedido (
    id_pedido serial primary key,
    data_pedido text not null,
    forma_pagamento text not null,
    data_entrega_prevista timestamp,
  	data_entrega_efetuada timestamp,
  	id_cliente int not null
);

create table tb_produto (
    id_produto serial primary key,
    nome_produto text not null,
    tamanho_produto text not null,
    cor int,
  	valor int
);

create table rel_itens (
    id_produto text,
    id_pedido text 
);




