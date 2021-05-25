<?php


/**
 * Compra
 */
class Compra{
    private $id_compra;
    private $id_cliente;
    private $id_producto;
    private $cantidad_compra;

    

    public function __construct($id_compra,$id_cliente,$id_producto,$cantidad_compra){
        $this->id_compra = $id_compra;
        $this->id_cliente = $id_cliente;
        $this->id_producto = $id_producto;
    	$this->cantidad_compra = $cantidad_compra;
        
    }
    public function getid_compra()
    {
        return $this->id_compra;
    }
    
    public function setid_compra($id_compra)
    {
        $this->id_compra = $id_compra;

        return $this;
    }
    public function getid_cliente()
    {
        return $this->id_cliente;
    }
    
    public function setid_cliente($id_cliente)
    {
        $this->id_cliente = $id_cliente;

        return $this;
    }


    public function getcantidad_compra()
    {
        return $this->cantidad_compra;
    }

    public function setcantidad_compra($cantidad_compra)
    {
        $this->cantidad_compra = $cantidad_compra;

        return $this;
    }
    
    public function getid_producto()
    {
        return $this->id_producto;
    }

    public function setid_producto($id_producto)
    {
        $this->id_producto = $caltegoria;

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

