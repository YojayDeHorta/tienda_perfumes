
<?php
require_once (__DIR__."/../MDB/mdbProducto.php");
$id_producto=$_GET['id_producto'];


borrarproducto($id_producto);
echo json_encode("borrado exitosamente");
?>