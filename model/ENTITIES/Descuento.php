<?php


/**
 * Descuento
 */
class Descuento{
    private $id_descuento;
    private $id_producto;
    private $valor_descuento;
    private $usos_descuento;
    

    public function __construct($id_descuento,$id_producto,$valor_descuento,$usos_descuento){
        $this->id_descuento = $id_descuento;
       
        $this->id_producto = $id_producto;
        $this->valor_descuento = $valor_descuento ;
        $this->usos_descuento = $usos_descuento ;
        
    }
    public function getid_descuento()
    {
        return $this->id_descuento;
    }
    
    public function setid_descuento($id_descuento)
    {
        $this->id_descuento = $id_descuento;

        return $this;
    }
    public function getvalor_descuento()
    {
        return $this->valor_descuento;
    }
    
    public function setvalor_descuento($valor_descuento)
    {
        $this->valor_descuento = $valor_descuento;

        return $this;
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
    public function getusos_descuento()
    {
        return $this->usos_descuento;
    }

    public function setusos_descuento($usos_descuento)
    {
        $this->usos_descuento = $usos_descuento;

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

