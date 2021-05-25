<?php


/**
 * Producto
 */
class Producto{
    private $id_producto;
    private $stock_disponible;
    private $nombre_producto;
    private $precio_producto;

    

    public function __construct($id_producto,$stock_disponible,$nombre_producto,$precio_producto){
        $this->id_producto = $id_producto;
        $this->stock_disponible = $stock_disponible;
        $this->nombre_producto = $nombre_producto;
    	$this->precio_producto = $precio_producto;
        
    }
    public function getid_producto()
    {
        return $this->id_producto;
    }
    
    public function setid_producto($id_producto)
    {
        $this->id_producto = $id_producto;

        return $this;
    }
    public function getstock_disponible()
    {
        return $this->stock_disponible;
    }
    
    public function setstock_disponible($stock_disponible)
    {
        $this->stock_disponible = $stock_disponible;

        return $this;
    }
    public function getnombre_producto()
    {
        return $this->nombre_producto;
    }

    public function setnombre_producto($nombre_producto)
    {
        $this->nombre_producto = $nombre_producto;

        return $this;
    }

    public function getprecio_producto()
    {
        return $this->precio_producto;
    }

    public function setprecio_producto($precio_producto)
    {
        $this->precio_producto = $precio_producto;

        return $this;
    }
    

    public function toArray() {
        $vars = get_object_vars ( $this );
        $array = array ();
        foreach ( $vars as $key => $value ) {
            $array [ltrim ( $key, '_' )] = $value;
        }
        return $array;
    }
}

