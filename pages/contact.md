---
layout: page
title: Contact
permalink: /contact
---

# Contact

<p>
Vous pouvez me contacter <a id="contact-mail-fr" href="#" target="_blank" rel="noopener noreferrer">par mail</a> pour toute question ou pour accéder aux repos.
</p>

<p>
You may contact me <a id="contact-mail-en" href="#" target="_blank" rel="noopener noreferrer">through my email</a> if you have any questions or would like to bring up any issues.
</p>

<script>
  (function () {
    const user = "github";
    const domain = "anogen.eu";
    const email = user + "@" + domain;
    const mailto = "mailto:" + email;

    const fr = document.getElementById("contact-mail-fr");
    const en = document.getElementById("contact-mail-en");

    if (fr) fr.href = mailto;
    if (en) en.href = mailto;
  })();
</script>
