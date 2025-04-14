<?php
  // Ejemplo de uso de traits en PHP
  // Un trait es un mecanismo para reutilizar código en lenguajes orientados a objetos.
  
  // Definimos un trait llamado Logger
trait Logger {
    public function log($mensaje) {
      echo "[LOG]: $mensaje\n";
    }
  }
  
  class Usuario {
    use Logger;
    public $nombre;
  
    public function __construct($nombre) {
      $this->nombre = $nombre;
      $this->log("Usuario $nombre creado.");
    }
  }
  
  $u = new Usuario("Carlos");
  