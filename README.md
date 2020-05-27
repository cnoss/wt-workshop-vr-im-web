# WT Workshop - VR im Web mit A-Frame.io

> VR im Web - Web Technologien - 2020 - Pascal Schorde - WebXR, VR, AR, A-Frame.io, Virtual Reality, Augmented Reality, Mixed Reality, Extended Reality, Immersive VR, Grundlagen - Informatiker, Medieninformatiker, Technologieenthusiasten - JavaScript ES 2016+, HTML5

Mit dem Web Technologie Workshop _VR im Web_ erhalten Teilnehmende einen Einblick in die Erstellung von Webanwendungen für VR Technologien. Neben einer Einführung in das Paradigma Extended Reality (XR), die Gründe für eine neue Webspezifikation (Web VR -> WebXR Device API) und Anforderungen sowie Herausforderungen an VR Anwendungen, werden unter Zuhilfenahme des A-Frame.io Webframeworks - ein speziell für VR Anwendungen konzipiertes Framework - eine eigene kleine Szenen entworfen. Am Ende des Workshops sind die Teilnehmenden bzgl. VR sensibilisiert und können darauf aufbauend sich selbstsändig in das Thema _VR im Web_ vertiefen.

## Vorbereitung

Die Teilnehmenden sollten folgenden Anwendungen installiert haben:

* _aktuellen_ [Firefox](https://www.mozilla.org/de/firefox/) oder [Chrome](https://www.google.com/intl/de_de/chrome/) Browser
* [WebXR Extension](https://blog.mozvr.com/webxr-emulator-extension/) für den jeweiligen Browser installieren
* Texteditor für die Bearbeitung von HTML und JavaScript
* [Git](https://git-scm.com/) um das [Repoistory](https://github.com/p2sk/wt-workshop-vr-im-web) zu clonen
* [Node](https://nodejs.org/en/) um den Webserver zu starten

Sollten Schwierigkeiten bei der Einrichtungeben, bitte ich um kurze Rückmeldung. Dafür einfach ein Issue aufmachen oder mir per Slack eine Nachricht schreiben.

## Am Workshoptag

Kurz vor dem Workshop bitte nochmal das Repository pullen, um den aktuellen Stand zu erhalten. Weitere Details dann im Workshop.

## Lokalen Server starten

Eine VR Anwendung muss in einer Serverumgebung laufen. Die `index.html` ist das zentrale Dokument für den Workshop.

```bash
cd <repo-path>
node server.js
```

Der Webserver kann unter [`localhost:3000`](http://localhost:3000) aufgerufen werden.

## Weiterführende Links

* https://immersiveweb.dev/
* https://blog.mozvr.com/webxr-emulator-extension/
* https://aframe.io/
* https://aframe.io/docs/1.0.0/introduction/
* https://github.com/supermedium/superframe
* https://developer.oculus.com/design/book-bp/
* https://www.iso.org/standard/56350.html
