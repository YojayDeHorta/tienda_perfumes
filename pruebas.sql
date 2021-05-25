CREATE TABLE compras(
  id_producto int NOT NULL,
  id_cliente int NOT NULL,
  FOREIGN KEY(id_producto) REFERENCES productos(id_producto),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente),
  );
  CREATE TABLE compras( 
    id_compra int AUTO_INCREMENT PRIMARY KEY,
  id_producto int NOT NULL,
  id_cliente int NOT NULL,
  FOREIGN KEY(id_producto) REFERENCES productos(id_producto),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente) 
  )
