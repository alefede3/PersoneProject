
# 👥 Gestione Persone - Full Stack App

Un'applicazione completa per la gestione di persone, progetti e competenze.  
Realizzata con **Spring Boot** per il back-end e **Angular** per il front-end.

---

## 🚀 Tecnologie usate

| Stack        | Tecnologie                        |
|--------------|-----------------------------------|
| Back-end     | Java 17, Spring Boot, Spring Data JPA, MySQLDB |
| Front-end    | Angular 16+, TypeScript, PrimeNG  |
| Build tools  | Maven (back-end), Angular CLI     |
| Sicurezza    | Login implementato con l'ausilio di Keycloak |

---

## 🗂 Struttura del progetto

```
.
├── PersoneProject/
│   ├── PersoneSpringBoot/        # Back-end (Spring Boot)
│   └── PersoneProject FE/        # Front-end (Angular)
```

---

## ⚙️ Come avviare il progetto in locale

### 1. Requisiti

- Node.js (v18 o superiore)
- Angular CLI (`npm install -g @angular/cli`)
- JDK 17
- Maven

---

### 2. Avvio del Back-End (Spring Boot)

```bash
cd PersoneSpringBoot
./mvnw spring-boot:run
```

> Il server sarà avviato su `http://localhost:8080`

---

### 3. Avvio del Front-End (Angular)

```bash
cd PersoneProject\ FE
npm install
ng serve
```

> L'applicazione sarà disponibile su `http://localhost:4200`

---

## 🔐 Login predefinito

Per bypassare il controllo sull'autenticazione basta non 

---

## 📦 Funzionalità implementate

- Autenticazione base con controllo credenziali
- CRUD su persone, progetti e skill
- Associazione skill ↔ persone e progetti ↔ persone
- Ricerca filtrata e paginazione
- UI responsive con PrimeNG

---


## 📝 Autore

Progetto realizzato da Alessandro Federico.

---

## 📄 Licenza

Questo progetto è open source per scopi educativi. Nessuna licenza applicata.
