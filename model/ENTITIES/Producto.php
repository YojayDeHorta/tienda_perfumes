<?php


/**
 * Producto
 */
class Producto{
    private $id_producto;
    private $stock_disponible;
    private $nombre_producto;
    private $precio_producto;
    private $descripcion;
    private $tipo;
    
    

    public function __construct($id_producto,$stock_disponible,$nombre_producto,$precio_producto,$descripcion,$tipo){
        $this->id_producto = $id_producto;
        $this->stock_disponible = $stock_disponible;
        $this->nombre_producto = $nombre_producto;
    	$this->precio_producto = $precio_producto;
        $this->descripcion = $descripcion;
        $this->tipo = $tipo;
    }
    public function getId_producto()
    {
        return $this->id_producto;
    }
    
    public function setId_producto($id_producto)
    {
        $this->id_producto = $id_producto;

        return $this;
    }
    public function getStock_disponible()
    {
        return $this->stock_disponible;
    }
    
    public function setStock_disponible($stock_disponible)
    {
        $this->stock_disponible = $stock_disponible;

        return $this;
    }
    public function getNombre_producto()
    {
        return $this->nombre_producto;
    }

    public function setNombre_producto($nombre_producto)
    {
        $this->nombre_producto = $nombre_producto;

        return $this;
    }

    public function getPrecio_producto()
    {
        return $this->precio_producto;
    }

    public function setPrecio_producto($precio_producto)
    {
        $this->precio_producto = $precio_producto;

        return $this;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }
    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }  
    public function toJSON(){
        return json_encode($this);
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

