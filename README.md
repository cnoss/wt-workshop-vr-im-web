# WT Workshop - VR im Web mit A-Frame.io

> VR im Web - Web Technologien - 2020 - Pascal Schorde - WebXR, VR, AR, A-Frame.io, Virtual Reality, Augmented Reality, Mixed Reality, Extended Reality, Immersive VR, Grundlagen - Informatiker, Medieninformatiker, Technologieenthusiasten - JavaScript ES 2016+, HTML5

Mit dem Web Technologie Workshop _VR im Web mit A-Frame.io_ erhalten Teilnehmende einen Einblick inwieweit Webanwendungen für verschiedene VR Technologien umgesetzt werden kann. Unter Zuhilfenahme des A-Frame.io Webframework, speziell entwickelt für VR Anwendungen, werden den Teilnehmenden grundlegende Funktionen für die Entwicklung eigener VR fähigen Webanwendungen.

## Vorbereitung

Die Teilnehmenden sollten folgenden Anwendungen installiert haben:

* _aktuellen_ [Firefox](https://www.mozilla.org/de/firefox/) oder [Chrome Browser](https://www.google.com/intl/de_de/chrome/)
* [WebXR Extension](https://blog.mozvr.com/webxr-emulator-extension/) für den jeweiligen Browser (und gerne schonmal ausprobieren)
* Texteditor zur Bearbeitung von HTML und JavaScript
* [Git](https://git-scm.com/) um Repoistory zu clonen
* [Node](https://nodejs.org/en/) um Webserver zu starten

Sollte es zu Schwierigkleiten kommen, bitte ich um kurze Rückmeldung. Dafür einfach ein Issue aufmachen oder mich per Slack anschreiben.

## Am Workshoptag

Kurz vor dem Workshop bitte nochmal das Repository pullen, um den aktuellen Stand zu erhalten.

## Lokalen Server starten

Eine VR Anwendung muss in einer Serverumgebung laufen. Die `index.html` ist das zentrale Dokument für den Workshop.

```bash
cd <repo-path>
node server.js
```

Der Webserver läuft auf Port 3000 und ist unter `localhost:3000` erreichbar.

## Weiterführende Links

* https://blog.mozvr.com/webxr-emulator-extension/
* https://immersiveweb.dev/