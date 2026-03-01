<?php
// Nom du ZIP final
$zipFileName = 'kaay_nougou_international.zip';

// Créer un nouvel objet ZipArchive
$zip = new ZipArchive();
if ($zip->open($zipFileName, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== TRUE) {
    exit("Impossible de créer le fichier ZIP\n");
}

// Fonction récursive pour ajouter un dossier entier
function addFolderToZip($folder, $zip, $parentFolder = '') {
    $handle = opendir($folder);
    while (false !== ($file = readdir($handle))) {
        if ($file == '.' || $file == '..') continue;
        $path = $folder . '/' . $file;
        $localPath = $parentFolder ? $parentFolder . '/' . $file : $file;

        if (is_dir($path)) {
            $zip->addEmptyDir($localPath);
            addFolderToZip($path, $zip, $localPath);
        } else {
            $zip->addFile($path, $localPath);
        }
    }
    closedir($handle);
}

// Liste des fichiers et dossiers à inclure
$folders = [
    'index.php',
    'login.php',
    'register.php',
    'logout.php',
    'dashboard.php',
    'add_product.php',
    'edit_product.php',
    'delete_product.php',
    'product.php',
    'load_products.php',
    'db.php',
    'css',
    'js',
    'uploads'
];

// Ajouter chaque fichier/dossier au ZIP
foreach ($folders as $item) {
    if (is_dir($item)) {
        $zip->addEmptyDir($item);
        addFolderToZip($item, $zip, $item);
    } elseif (file_exists($item)) {
        $zip->addFile($item, $item);
    }
}

// Fermer le ZIP
$zip->close();

echo "Fichier ZIP créé avec succès : $zipFileName\n";
?>
