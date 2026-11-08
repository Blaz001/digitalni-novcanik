# Digitalni novčanik

Samostalna Android verzija aplikacije priprema se na grani `capacitor-android-app`.

## Android aplikacija

- Aplikacija se pakira s lokalnim web-datotekama. Ne oslanja se na Chrome za prikaz.
- Podaci se spremaju u pohranu Android WebViewa unutar privatnog prostora aplikacije, odvojeno od Chromeove pohrane.
- U aplikaciji su dostupni izvoz i vraćanje potpune JSON sigurnosne kopije te izvoz evidencije u CSV.
- Brisanje podataka same Android aplikacije ili njezina deinstalacija može izbrisati lokalne podatke. JSON kopiju čuvaj izvan aplikacije.

## Izrada APK-a

GitHub Actions workflow **Build Android APK** automatski izrađuje debug APK nakon promjene na grani `capacitor-android-app`.

Za ručno pokretanje:
1. Otvori karticu **Actions** u GitHub repozitoriju.
2. Odaberi **Build Android APK**.
3. Klikni **Run workflow** i odaberi granu `capacitor-android-app`.
4. Nakon završetka otvori rezultat pokretanja i preuzmi artifact `digitalni-novcanik-debug-apk`.

APK iz ovog workflowa je debug verzija za osobnu instalaciju i testiranje.