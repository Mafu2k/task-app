# TODO List - Aplikacja do Zarządzania Zadaniami

Prosta aplikacja webowa do zarządzania listą zadań, stworzona w ramach laboratorium GitHub.

## 📋 Opis Projektu

Aplikacja TODO List umożliwia:
- ✅ Dodawanie nowych zadań z tytułem i opisem
- ✅ Oznaczanie zadań jako wykonane
- ✅ Usuwanie zadań
- ✅ Wyszukiwanie zadań po tytule i opisie
- ✅ Filtrowanie zadań (wszystkie / do zrobienia / zrobione)

## 🛠️ Technologie

### Backend
- **Java 17**
- **Spring Boot 4.0.1**
- **Spring Data JPA**
- **H2 Database** (baza danych in-memory)
- **Maven** (zarządzanie zależnościami)

### Frontend
- **HTML5**
- **CSS3**
- **Vanilla JavaScript** (bez frameworków)

## 👥 Zespół Projektowy

- **Frontend Developer**: [Twoje imię] - implementacja interfejsu użytkownika
- **Backend Developer**: [Imię kolegi] - architektura i logika serwera

## 🚀 Jak Uruchomić Projekt

### Wymagania
- Java 17 lub wyższa
- Maven 3.6+

### Instrukcja

1. Sklonuj repozytorium:
```bash
git clone [URL_REPOZYTORIUM]
cd todolistaproj
```

2. Zbuduj projekt:
```bash
./mvnw clean package
```

3. Uruchom aplikację:
```bash
java -jar target/todolistaproj-0.0.1-SNAPSHOT.jar
```

4. Otwórz przeglądarkę i wejdź na:
```
http://localhost:8080
```

## 📁 Struktura Projektu

```
todolistaproj/
├── src/
│   ├── main/
│   │   ├── java/pl/aac/app/
│   │   │   ├── controller/      # REST API endpoints
│   │   │   ├── model/           # Encje bazodanowe
│   │   │   ├── repository/      # Repozytoria JPA
│   │   │   ├── service/         # Logika biznesowa
│   │   │   └── TodolistaprojApplication.java
│   │   └── resources/
│   │       ├── static/          # Pliki frontend
│   │       │   ├── css/         # Stylizacja
│   │       │   ├── js/          # JavaScript
│   │       │   └── index.html   # Strona główna
│   │       └── application.properties
│   └── test/                    # Testy jednostkowe
├── pom.xml
└── README.md
```

## 🔌 API Endpoints

### Pobieranie zadań
- `GET /api/todos` - wszystkie zadania
- `GET /api/todos/{id}` - konkretne zadanie
- `GET /api/todos/completed` - zadania wykonane
- `GET /api/todos/incomplete` - zadania do zrobienia
- `GET /api/todos/search?keyword=...` - wyszukiwanie

### Zarządzanie zadaniami
- `POST /api/todos` - dodanie nowego zadania
- `PUT /api/todos/{id}` - aktualizacja zadania
- `PATCH /api/todos/{id}/toggle` - przełączenie statusu
- `DELETE /api/todos/{id}` - usunięcie zadania

## 📊 Baza Danych

Aplikacja używa H2 Database (in-memory), która jest automatycznie tworzona przy starcie.

### Konsola H2
Dostępna pod adresem: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:tododb`
- User: `sa`
- Password: (puste)

## 🧪 Testowanie

```bash
./mvnw test
```

## 📝 Proces Pracy

1. **Planowanie** - GitHub Issues i Project Board
2. **Implementacja** - praca na oddzielnych gałęziach (frontend/backend)
3. **Code Review** - Pull Requests z przeglądami kodu
4. **Integracja** - merge do głównej gałęzi po zatwierdzeniu

## 📄 Licencja

Projekt edukacyjny - Laboratorium GitHub
