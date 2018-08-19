<?php

use Symfony\Component\HttpFoundation\Request;

require __DIR__ . '/../app/autoload.php';
include_once __DIR__ . '/../app/bootstrap.php.cache';

$kernel = new AppKernel('prod', false);
Request::setTrustedHeaderName(Request::HEADER_FORWARDED, null);
Request::setTrustedProxies(array('192.0.0.1', '10.0.0.0/8'));
$request = Request::createFromGlobals();

$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
