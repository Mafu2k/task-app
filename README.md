# task-app

Lista zadań zrobiona na laboratorium z pracy w zespole na GitHubie. Projekt robiliśmy
we dwójkę: ja frontend, kolega backend. Każdy pracował na swojej gałęzi (`frontend`,
`Backend`), a zmiany trafiały do `main` przez pull requesty z code review. Notatki z tego,
jak dzieliliśmy pracę, są w [NOTATKI.md](NOTATKI.md).

Backend to Spring Boot z REST API i bazą H2 w pamięci. Frontend to zwykły HTML, CSS
i JavaScript serwowany przez Springa z `src/main/resources/static`. Zadania można dodawać,
odhaczać, usuwać, wyszukiwać i filtrować po statusie.

## Uruchomienie

Potrzebna jest Java 17+.

```bash
./mvnw spring-boot:run
```

Aplikacja wstaje na http://localhost:8080. Konsola bazy jest pod `/h2-console`
(JDBC URL `jdbc:h2:mem:tododb`, użytkownik `sa`, bez hasła). Dane znikają po restarcie.

## API

| Metoda | Ścieżka | Opis |
|--------|---------|------|
| GET | `/api/todos` | wszystkie zadania |
| GET | `/api/todos/{id}` | jedno zadanie |
| GET | `/api/todos/completed` | zrobione |
| GET | `/api/todos/incomplete` | do zrobienia |
| GET | `/api/todos/search?keyword=...` | szukanie w tytule i opisie |
| POST | `/api/todos` | nowe zadanie |
| PUT | `/api/todos/{id}` | edycja |
| PATCH | `/api/todos/{id}/toggle` | zmiana statusu |
| DELETE | `/api/todos/{id}` | usunięcie |

## Licencja

MIT
