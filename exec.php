<?php

require('create_files.php');

$test = <<<'BLOC'

BLOC;

$results = createFilesFromText($test);
foreach ($results as $result) {
    echo $result['message'] . "\n";
}