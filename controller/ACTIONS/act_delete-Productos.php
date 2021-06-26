
<?php
require_once (__DIR__."/../MDB/mdbProducto.php");
$id_producto=$_GET['id_producto'];
$file_pointer = '../../view/store/img/productos/Catalogo-'.$id_producto.'.png';
borrarproducto($id_producto);
if (!unlink($file_pointer)) {  
    echo json_encode("no se ha podido borrar");  
}  
else { 
    echo json_encode("borrado exitosamente");  
}  

?>