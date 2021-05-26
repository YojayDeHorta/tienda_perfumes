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
    function buscarClientePornumeromovil($numero_movil){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->buscarClientePornumeromovil($numero_movil);
        return $cliente;
    }
    function buscarClientePoremail($email){
        require_once(__DIR__."/../../model/DAO/ClienteDAO.php");
        $dao=new ClienteDAO();
        $cliente = $dao->buscarClientePornumeromovil($email);
        return $cliente;
    }
    ?>