<?php
    function autenticarCliente($telefono_movil, $password){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->autenticarCliente($telefono_movil, $password);
        return $cliente;
    }
    function insertarCliente($cliente){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->insertarCliente($cliente);
        return $resultado;
    }
    function buscarClientePorId($id){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->buscarClientePorId( $id);
        return $cliente;
    }
    function leerClientes(){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $clientes = $dao->leerClientes();
        return $clientes;
    }
    function buscarClientePorusername($username){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->buscarClientePorusername($username);
        return $cliente;
    }
    function buscarClientePoremail($email){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->buscarClientePoremail($email);
        return $cliente;
    }
    
    
    
    function recuperarCliente($email,$password){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->recuperarCliente($email,$password);
        return $resultado;
    }
    function insertarclientecompleto($id,$username,$email,$name,$password){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->insertarclientecompleto($id,$username,$email,$name,$password);
        return $resultado;
    }

    function modificarCliente($cliente){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->modificarCliente($cliente);
        return $resultado;
    }
    function modificarclienteporparametros($id,$username,$email,$name,$password){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->modificarclienteporparametros($id,$username,$email,$name,$password);
        return $resultado;
    }
    
    function veridreciente(){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->veridreciente();
        return $resultado;
    }

    function borrarCliente($id){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $resultado=$dao->borrarCliente($id);
        return $resultado;
    }
    ?>