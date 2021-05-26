<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Cliente.php");

/**
 * Description of ClienteDAO
 *
 * @author Admin
 */
class ClienteDAO {
    
    public function autenticarCliente($email, $pass){
        $data_source = new DataSource();
     
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE email = :email AND password = :pass", 
                                                    array(':email'=>$email,':pass'=>$pass));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["apellido"],
                        $data_table[$indice]["numero_movil"],
                        $data_table[$indice]["password"],
                        $data_table[$indice]["email"],
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }
    public function insertarCliente(Cliente $cliente){
        $data_source= new DataSource();
        $sql = "INSERT INTO clientes VALUES (:id_cliente, :nombre, :apellido, :numero_movil, :password, :email)";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_cliente'=>$cliente->getId_cliente(),
            ':nombre'=>$cliente->getNombre(),
            ':apellido'=>$cliente->getApellido(),
            ':numero_movil'=>$cliente->getNumero_movil(),
            ':password'=>$cliente->getPassword(),
            ':email'=>$cliente->getEmail()
            )
        );
        
        return $resultado;
    }

    public function buscarClientePornumeromovil($numero_movil){
        $data_source = new DataSource();
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE numero_movil = :numero_movil", 
                                                    array(':numero_movil'=>$numero_movil));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["apellido"],
                        $data_table[$indice]["numero_movil"],
                        $data_table[$indice]["password"],
                        $data_table[$indice]["email"]
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    } 

    public function buscarClientePoremail($email){
        $data_source = new DataSource();
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM clientes WHERE email = :email", 
                                                    array(':email'=>$email));
        $cliente=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cliente = new Cliente(
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["nombre"],
                        $data_table[$indice]["apellido"],
                        $data_table[$indice]["numero_movil"],
                        $data_table[$indice]["password"],
                        $data_table[$indice]["email"]
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    }
    
}
