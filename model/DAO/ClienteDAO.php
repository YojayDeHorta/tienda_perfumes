<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Cliente.php");

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
                        );
            }
            return $cliente;
        }else{
            return null;
        }
    } 
    
    
}
