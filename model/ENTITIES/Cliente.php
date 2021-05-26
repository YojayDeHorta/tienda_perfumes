<?php


/**
 * Cliente
 */
class Cliente
{
    private $id_cliente;
    private $nombre;
    private $apellido;
    private $numero_movil;
    private $password;
    private $email;
   
    public function __construct($id_cliente, $nombre,$apellido,$numero_movil,$password,$email){
        $this->id_cliente = $id_cliente;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
    	$this->numero_movil = $numero_movil;
    	$this->password = $password;
        $this->email = $email;

    }
    
    public function getId_cliente()
    {
        return $this->id_cliente;
    }
    
    public function setId_cliente($id_cliente)
    {
        $this->id_cliente = $id_cliente;

        return $this;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }


    public function getNumero_movil()
    {
        return $this->numero_movil;
    }

    public function setNumero_movil($numero_movil)
    {
        $this->numero_movil = $numero_movil;

        return $this;
    }

    public function getApellido()
    {
        return $this->apellido;
    }

    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email= $email;

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

