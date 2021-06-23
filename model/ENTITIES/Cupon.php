<?php


/**
 * Cupon
 */
class Cupon{
    private $id_cupon;
    private $nombre_cupon;
    private $valor_cupon;
    private $usos_cupon;
    

    public function __construct($id_cupon,$nombre_cupon,$valor_cupon,$usos_cupon){
        $this->id_cupon = $id_cupon;
       
        $this->nombre_cupon = $nombre_cupon;
        $this->valor_cupon = $valor_cupon ;
        $this->usos_cupon = $usos_cupon ;
        
    }
    public function getid_cupon()
    {
        return $this->id_cupon;
    }
    
    public function setid_cupon($id_cupon)
    {
        $this->id_cupon = $id_cupon;

        return $this;
    }
    public function getvalor_cupon()
    {
        return $this->valor_cupon;
    }
    
    public function setvalor_cupon($valor_cupon)
    {
        $this->valor_cupon = $valor_cupon;

        return $this;
    }
    
    public function getnombre_cupon()
    {
        return $this->nombre_cupon;
    }

    public function setnombre_cupon($nombre_cupon)
    {
        $this->nombre_cupon = $nombre_cupon;

        return $this;
    }
    public function getusos_cupon()
    {
        return $this->usos_cupon;
    }

    public function setusos_cupon($usos_cupon)
    {
        $this->usos_cupon = $usos_cupon;

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

