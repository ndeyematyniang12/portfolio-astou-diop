<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sécurité basique
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);

    // ===============================
    // 1️⃣ EMAIL POUR TOI (ADMIN)
    // ===============================
    $email_admin = "belleastoudiop@gmail.com";
    $sujet_admin = "📩 Nouveau message - DIOP PRESTIGE";

    $contenu_admin = "
    Nouveau message reçu depuis le site DIOP PRESTIGE :

    Nom : $nom
    Email : $email
    Téléphone : $telephone

    Message :
    $message
    ";

    $headers_admin = "From: $email\r\n";
    $headers_admin .= "Reply-To: $email\r\n";

    mail($email_admin, $sujet_admin, $contenu_admin, $headers_admin);

    // ===============================
    // 2️⃣ EMAIL DE CONFIRMATION CLIENT
    // ===============================
    $sujet_client = "✔️ Message bien reçu – DIOP PRESTIGE";

    $contenu_client = "
    Bonjour $nom,

    Merci de nous avoir contactés.

    Votre message a bien été reçu et nous vous répondrons
    dans les plus brefs délais.

    📍 Adresse :
    Guédiawaye – Angle Mousse
    Cité Madieng Khary DIENG

    📞 Téléphone : +221 77 757 81 74
    🌐 Site : https://diop-prestige-hlmi.b12sites.com

    --- Votre message ---
    $message

    Cordialement,
    DIOP PRESTIGE
    ";

    $headers_client = "From: DIOP PRESTIGE <belleastoudiop@gmail.com>\r\n";

    mail($email, $sujet_client, $contenu_client, $headers_client);

    // ===============================
    // 3️⃣ REDIRECTION
    // ===============================
    header("Location: merci.html");
    exit();
}
?>
