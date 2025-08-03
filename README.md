# CI/CD Demo – Node.js App with GitHub Actions

Prosty projekt demonstrujący automatyczny pipeline CI/CD przy użyciu **GitHub Actions**.  
Aplikacja napisana w Node.js (Express) z podstawowym testem jednostkowym uruchamianym automatycznie po każdym pushu.

---

## 📦 Technologie

- Node.js + Express
- Jest + Supertest (testowanie endpointów)
- GitHub Actions (CI)
- Git

---

## 🚀 Jak uruchomić lokalnie

1. Sklonuj repozytorium:

```bash
git clone https://github.com/opski05/ci-cd-demo.git
cd ci-cd-demo
Zainstaluj zależności:

bash
Kopiuj
Edytuj
npm install
Uruchom aplikację:

bash
Kopiuj
Edytuj
node index.js
Aplikacja będzie dostępna pod adresem http://localhost:3000.

🧪 Jak uruchomić testy
bash
Kopiuj
Edytuj
npm test
⚙️ CI/CD – GitHub Actions
Pipeline GitHub Actions uruchamia się automatycznie po każdym:

push na branch master

pull_request na branch master

Co robi pipeline?
Instaluje zależności (npm install)

Nadaje uprawnienia do jest

Uruchamia testy (jest)

Plik workflow znajduje się w:
.github/workflows/nodejs-ci.yml

📁 Struktura katalogów
bash
Kopiuj
Edytuj
.
├── index.js           # Główna aplikacja
├── index.test.js      # Test jednostkowy endpointu
├── package.json
└── .github/
    └── workflows/
        └── nodejs-ci.yml  # GitHub Actions workflow
📌 Uwagi
Folder node_modules/ jest ignorowany w repozytorium (zobacz .gitignore)

Projekt służy wyłącznie demonstracji pipeline CI, bez wdrożenia produkcyjnego

✍️ Autor
Oskar Pozorski
Junior DevOps Enthusiast
GitHub: https://github.com/opski05