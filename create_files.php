<?php

/**
 * Crée des fichiers à partir d'un texte structuré.
 *
 * Format attendu :
 * ### chemin/vers/fichier.ext
 * ```langage
 * contenu du fichier
 * ```
 *
 * Les lignes de chemin commencent par ### (avec ou sans backticks autour du chemin).
 * Le contenu peut être délimité par des triples backticks (```), avec ou sans identifiant de langage.
 * Si aucun backtick n'est présent, tout le texte jusqu'au prochain ### est considéré comme contenu.
 *
 * @param string $text Le texte complet contenant les sections.
 * @return array Liste des résultats avec statut et message pour chaque fichier.
 */
function createFilesFromText(string $text): array
{
    $lines = explode("\n", $text);
    $results = [];
    $currentPath = null;
    $contentLines = [];
    $inCodeBlock = false;

    foreach ($lines as $line) {
        // Détection d'une ligne de chemin de fichier : commence par ###
        if (preg_match('/^\s*###\s*(.*)$/', $line, $matches)) {
            // Traiter le fichier précédent
            if ($currentPath !== null) {
                $results[] = writeFileFromContent($currentPath, $contentLines);
                $contentLines = [];
            }
            // Extraire le chemin, retirer les backticks éventuels
            $path = trim($matches[1]);
            $path = trim($path, "`");
            $currentPath = $path;
            $inCodeBlock = false;
            continue;
        }

        // Ignorer les lignes si aucun chemin courant n'est défini
        if ($currentPath === null) {
            continue;
        }

        // Gestion des blocs de code avec backticks
        if (preg_match('/^\s*```/', $line)) {
            // Bascule de l'état (ouverture/fermeture)
            $inCodeBlock = !$inCodeBlock;
            continue; // On n'inclut pas les lignes de backticks
        }

        // Collecte du contenu
        if ($inCodeBlock) {
            // Dans un bloc de code : on prend tout
            $contentLines[] = $line;
        } else {
            // Sans backticks : on collecte jusqu'au prochain ###
            // On évite d'accumuler des lignes vides au début
            if (trim($line) !== '' || !empty($contentLines)) {
                $contentLines[] = $line;
            }
        }
    }

    // Traiter le dernier fichier
    if ($currentPath !== null) {
        $results[] = writeFileFromContent($currentPath, $contentLines);
    }

    return $results;
}

/**
 * Écrit le contenu dans un fichier en créant les dossiers nécessaires.
 *
 * @param string $path Chemin du fichier.
 * @param array  $contentLines Lignes de contenu.
 * @return array Statut et message.
 */
function writeFileFromContent(string $path, array $contentLines): array
{
    // Nettoyer les lignes vides en début et fin
    while (!empty($contentLines) && trim($contentLines[0]) === '') {
        array_shift($contentLines);
    }
    while (!empty($contentLines) && trim(end($contentLines)) === '') {
        array_pop($contentLines);
    }

    $content = implode("\n", $contentLines);
    // Ajouter une nouvelle ligne finale si absente
    if ($content !== '' && substr($content, -1) !== "\n") {
        $content .= "\n";
    }

    $directory = dirname($path);
    if (!is_dir($directory)) {
        if (!mkdir($directory, 0777, true) && !is_dir($directory)) {
            return [
                'file' => $path,
                'status' => 'error',
                'message' => "Impossible de créer le dossier $directory"
            ];
        }
    }

    if (file_put_contents($path, $content) === false) {
        return [
            'file' => $path,
            'status' => 'error',
            'message' => "Impossible d'écrire le fichier $path"
        ];
    }

    return [
        'file' => $path,
        'status' => 'success',
        'message' => "Fichier créé/mis à jour : $path"
    ];
}

// ---------- Exécution en ligne de commande ----------
if (php_sapi_name() === 'cli' && realpath($argv[0]) === __FILE__) {
// if (php_sapi_name() === 'cli') {
    $input = '';
    if ($argc > 1) {
        // Lecture depuis un fichier passé en argument
        $input = file_get_contents($argv[1]);
        if ($input === false) {
            fwrite(STDERR, "Erreur : impossible de lire le fichier {$argv[1]}\n");
            exit(1);
        }
    } else {
        // Lecture depuis STDIN
        $input = stream_get_contents(STDIN);
    }

    if (empty($input)) {
        fwrite(STDERR, "Aucune donnée fournie.\n");
        exit(1);
    }

    $results = createFilesFromText($input);
    foreach ($results as $result) {
        echo $result['message'] . "\n";
    }
}

