<!-- // Ejemplo de uso de PDO para conectarse a una base de datos SQL Server -->
<!-- //   // Asegúrate de tener la extensión PDO_SQLSRV habilitada en tu PHP.ini -->
 
<?php
// Datos de conexión
$server = "localhost"; // o localhost\SQLEXPRESS si es una instancia
$database = "miBD";
$user = "miUsuario";
$password = "miClave";

try {
    $conn = new PDO("sqlsrv:Server=$server;Database=$database", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta segura con prepared statement
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = :correo");
    $correo = "ejemplo@correo.com";
    $stmt->bindParam(':correo', $correo);
    $stmt->execute();

    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "<pre>";
    print_r($resultados);
    echo "</pre>";

} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
