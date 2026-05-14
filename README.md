# BeCyber

Cisco sertifika hiyerarşisini takip eden, kişisel not/wiki tabanlı bir siber güvenlik öğrenme platformu. Saf HTML/CSS/JS — derleme adımı yok, `index.html`'i tarayıcıda aç yeter.

## Yapı

- `index.html` — açılış sayfası: sertifika yolları, teori & lab kaynakları, çalışma unvanları
- `learn.html` — öğrenme arayüzü: domain → konu → alt konu gezinme + Markdown wiki editörü
- `css/style.css` — tüm stiller
- `js/data.js` — müfredat verisi

## Müfredat

Associate, Professional ve Expert seviyeleri resmi Cisco sınav blueprint'leriyle senkronize:

- **Associate** — 200-201 CBROPS v1.2
- **Professional** — 350-701 SCOR v1.1
- **Expert** — CCIE Security v6.1 (lab)

Foundational seviyesi, resmi bir sınav blueprint'i olmadığı için NetAcad eğitim taslağı olarak tutulur.

İlerleme ve wiki notları tarayıcının `localStorage`'ında saklanır.
