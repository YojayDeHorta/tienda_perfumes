
<?php
require_once (__DIR__."/../MDB/mdbCupon.php");
$id_cupon=$_GET['id'];


borrarcupones($id_cupon);
echo json_encode("borrado exitosamente");
?>