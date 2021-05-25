<?php


/**
 * Pedido
 */
class Pedido{
    private $id_pedido;
    private $id_cliente;
    private $id_producto;
    private $total_compra;
    private $fecha_compra;
    private $cantidad_compra;

    

    public function __construct($id_pedido,$id_cliente,$id_producto, $total_compra,$fecha_compra,$cantidad_compra){
        $this->id_pedido = $id_pedido;
        $this->id_cliente = $id_cliente;
        $this->id_producto = $id_producto;
        $this->total_compra = $total_compra;
    	$this->fecha_compra = $fecha_compra;
    	$this->cantidad_compra = $cantidad_compra;
        
    }
    public function getid_pedido()
    {
        return $this->id_pedido;
    }
    
    public function setid_pedido($id_pedido)
    {
        $this->id_pedido = $id_pedido;

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

    public function gettotal_compra()
    {
        return $this->total_compra;
    }

    public function settotal_compra($total_compra)
    {
        $this->total_compra = $total_compra;

        return $this;
    }


    public function getfecha_compra()
    {
        return $this->fecha_compra;
    }

    public function setfecha_compra($fecha_compra)
    {
        $this->fecha_compra = $fecha_compra;

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

