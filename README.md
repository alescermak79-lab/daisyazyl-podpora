# Podpořte kočičky z Daisy azylu

Statická kampaňová stránka pro pravidelné dary spolku **Daisy azyl z.s.** (https://www.daisyazyl.cz/).

- `index.html` – stránka (styly inline)
- `app.js` – příběhy koček, galerie, generování QR kódů (SPAYD + trvalý příkaz `FRQ:1M`)
- `qrcode.min.js` – knihovna qrcode-generator (MIT)

## Nasazení na GitHub Pages
1. Nahrajte soubory do repozitáře (např. `daisyazyl-podpora`).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. Web poběží na `https://<uzivatel>.github.io/daisyazyl-podpora/`.

## Vlastní doména (zdarma)
Nejdůvěryhodnější varianta je subdoména vlastní domény, např. `podpora.daisyazyl.cz`:
1. U správce DNS domény daisyazyl.cz přidejte záznam `CNAME podpora → <uzivatel>.github.io`.
2. V Settings → Pages → Custom domain zadejte `podpora.daisyazyl.cz` a zapněte *Enforce HTTPS*.

Fotky a příběhy se načítají z daisyazyl.cz – úpravy příběhů dělejte v poli `STORIES` v `app.js`.
