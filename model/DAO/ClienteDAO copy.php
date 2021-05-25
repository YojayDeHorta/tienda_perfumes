<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/cliente.php");

/**
 * Description of ClienteDAO
 *
 * @author Admin
 */
class ClienteDAO {
    
    public function autenticarCliente($num, $pass){
        $data_source = new DataSource();
     
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE numero_movil = :num AND password = :pass", 
                                                    array(':num'=>$num,':pass'=>$pass));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["apellido"],
                        $data_table[$indice]["numero_movil"],
                        $data_table[$indice]["password"],
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }
    public function insertarCliente(Cliente $cliente){
        $data_source= new DataSource();
        $sql = "INSERT INTO clientes VALUES (:id_cliente, :nombre, :apellido, :numero_movil, :password)";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_cliente'=>$cliente->getId_cliente(),
            ':nombre'=>$cliente->getNombre(),
            ':apellido'=>$cliente->getApellido(),
            ':numero_movil'=>$cliente->getNumero_movil(),
            ':password'=>$cliente->getPassword()
            )
        );
        
        return $resultado;
    }
    public function buscarClientePorId($id){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE id = :id", 
                                                    array(':id'=>$id));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["email"],
                        $data_table[$indice]["username"],
                        $data_table[$indice]["password"],
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }

    public function buscarClientePorusername($username){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE username = :username", 
                                                    array(':username'=>$username));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["email"],
                        $data_table[$indice]["username"],
                        $data_table[$indice]["password"],
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }    
    
    public function buscarClientePoremail($email){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE email = :email", 
                                                    array(':email'=>$email));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["email"],
                        $data_table[$indice]["username"],
                        $data_table[$indice]["password"],
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }

    public function leerClientes(){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM clientes");
        $cliente=null;
        $clientes=array();
        foreach($data_table as $indice=>$valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["email"],
                        $data_table[$indice]["username"],
                        $data_table[$indice]["password"],
                        );
                array_push($clientes,$cliente);
        }
        return $clientes;   
    }
    
    
    public function insertarclientecompleto($id,$username,$email,$name,$password){
        $data_source= new DataSource();
        $sql = "INSERT INTO clientes VALUES (:id, :nombre, :email, :username, :password)";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id'=>$id,
            ':nombre'=>$name,
            ':email'=>$email,
            ':username'=>$username,
            ':password'=>$password
            )
        );
        
        return $resultado;
    }
    public function modificarclienteporparametros($id,$username,$email,$name,$password){
        $data_source= new DataSource();
        $sql = "UPDATE clientes SET nombre= :nombre, email= :email, username= :username, password= :password WHERE id=:id";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id'=>$id,
            ':nombre'=>$name,
            ':email'=>$email,
            ':username'=>$username,
            ':password'=>$password
            )
        );
        
        return $resultado;
    }
    
    public function modificarCliente(Cliente $cliente){
        $data_source= new DataSource();
        $sql = "UPDATE clientes SET nombre= :nombre, email= :email, username= :username, password= :password WHERE id=:id";

        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id'=>$cliente->getId(),
            ':nombre'=>$cliente->getNombre(),
            ':email'=>$cliente->getEmail(),
            ':username'=>$cliente->getUsername(),
            ':password'=>$cliente->getPassword()
            )
        );
        
        return $resultado;
    }

    public function recuperarCliente($email,$password){
        $data_source= new DataSource();
        $sql = "UPDATE clientes SET password= :password WHERE email=:email";

        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':email'=>$email,
            ':password'=>$password
            )
        );
        
        return $resultado;
    }

    public function veridreciente(){
        $data_source= new DataSource();
        $sql = "SELECT * from clientes";

        $resultado = $data_source->ejecutarActualizacion($sql, array(   
            )
        );
        
        return $resultado;
    }

    public function borrarCliente($id){
        $data_source = new DataSource();
        $cliente=  buscarUsuarioPorId($id);
        $resultado= $data_source->ejecutarActualizacion("DELETE FROM clientes WHERE id = :id", array('id'=>$id));
        
        return $cliente;
    }
    
    
    
}
