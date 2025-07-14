
# 👥 Gestione Persone - Full Stack App con Keycloak

Un'applicazione completa per la gestione di persone, progetti e competenze.  
Realizzata con **Spring Boot** per il back-end, **Angular** per il front-end e autenticazione gestita da **Keycloak**.

---

## 🚀 Tecnologie usate

| Stack        | Tecnologie                        |
|--------------|-----------------------------------|
| Back-end     | Java 17, Spring Boot, Spring Data JPA, Keycloak |
| Front-end    | Angular 16+, TypeScript, PrimeNG, angular-auth-oidc-client |
| Build tools  | Maven (back-end), Angular CLI     |
| Sicurezza    | Autenticazione Keycloak (OpenID Connect) |

---

## 🗂 Struttura del progetto

```
.
├── PersoneProject-main/
│   ├── PersoneProject BE/        # Back-end (Spring Boot)
│   └── PersoneProject FE/        # Front-end (Angular)
```

---

## ⚙️ Come avviare il progetto in locale

### 1. Requisiti

- Node.js (v18 o superiore)
- Angular CLI (`npm install -g @angular/cli`)
- JDK 17
- Maven
- Server Keycloak (es. in Docker o installato localmente)

---

## 🛡 Autenticazione con Keycloak

L'applicazione utilizza **Keycloak** per autenticare gli utenti.

### ▶️ Configurazione richiesta

1. **Avvia Keycloak** (versione 21+)
2. Crea un nuovo **Realm**, ad esempio `persone-realm`
3. Crea due client:
   - `frontend` (tipo: public, URL redirect: `http://localhost:4200`)
   - `backend` (tipo: confidential, abilitare client credentials)
4. Crea un utente test:
   - Username: `admin`
   - Password: `admin`
   - Assegna un ruolo (es. `user`) e abilitalo nei token

### 🛠 Configurazione nel progetto

- **Back-end** (`application.properties` o `application.yml`):
  - Imposta issuer-uri, client-id e client-secret del client `backend`
- **Front-end** (`environment.ts`):
  - Imposta `issuer`, `clientId` e `redirectUrl` del client `frontend`

---

### 2. Avvio del Back-End

```bash
cd PersoneProject\ BE
./mvnw spring-boot:run
```

> Il server sarà avviato su `http://localhost:8080`

---

### 3. Avvio del Front-End

```bash
cd PersoneProject\ FE
npm install
ng serve
```

> Il front-end sarà accessibile su `http://localhost:4200`

---

## 📦 Funzionalità implementate

- Login utente tramite Keycloak
- Visualizzazione e gestione di:
  - Persone
  - Progetti
  - Competenze (Skill)
- Associazione progetti ↔ persone e skill ↔ persone
- UI responsive con PrimeNG
- Logout e gestione token automatici

---

## 📝 Autore

Progetto realizzato da **Alessandro Federico**.

---

## 📄 Licenza

Questo progetto è open source per scopi educativi. Nessuna licenza applicata.
