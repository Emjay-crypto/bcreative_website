<?php
// Simple PHP server for static site
$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

if ($uri !== '/' && file_exists(__DIR__ . $uri)) {
    return false;
}

include_once __DIR__ . '/index.html';
