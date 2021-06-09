
<?php
require_once (__DIR__."/../MDB/mdbCliente.php");
$id_cliente=$_GET['id'];


borrarCliente($id_cliente);
echo json_encode("borrado exitosamente");
?>