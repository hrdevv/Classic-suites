<?php
/**
 * JC Kline Homes - Database Configuration
 * Phase 1 Digital Refactor
 */

// Database credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'u_jckline');
define('DB_PASS', 'secure_password_here');
define('DB_NAME', 'db_jckline_homes');

// Connection logic with robust error handling
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
} catch (PDOException $e) {
    // Log error securely and show generic message to user
    error_log("Connection failed: " . $e->getMessage());
    die("A system error occurred. Please try again later.");
}
?>