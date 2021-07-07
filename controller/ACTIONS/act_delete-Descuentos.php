
<?php
require_once (__DIR__."/../MDB/mdbDescuento.php");
$id_descuento=$_GET['id'];


borrardescuentos($id_descuento);
echo json_encode("borrado exitosamente");
?>