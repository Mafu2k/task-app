# Notatki do projektu

## Jak zacząć pracę

### 1. Tworzenie repozytorium (leader robi)

```bash
git init
git add .
git commit -m "pierwszy commit - podstawowa aplikacja todo"
git remote add origin https://github.com/twojnick/todoapp.git
git push -u origin main
```

### 2. Dodanie współpracowników
- Settings -> Collaborators -> dodaj kolegę

### 3. Każdy robi swojego brancha

Frontend (ja):
```bash
git checkout -b frontend-dev
```

Backend (kolega):
```bash
git checkout -b backend-dev
```

## Praca nad projektem

### Jak pracuję (frontend):

1. Robię zmiany w plikach:
   - index.html
   - style.css
   - app.js

2. Jak skończę:
```bash
git add .
git commit -m "zmieniłem style w css"
git push origin frontend-dev
```

3. Jak chcę wrzucić do maina:
   - Wchodzę na GitHub
   - Pull Request z frontend-dev do main
   - Czekam aż kolega/leader sprawdzi
   - Merge

### Jak pracuje kolega (backend):

To samo ale na swoich plikach:
- TodoController.java
- TodoService.java
- Todo.java
- itp.

```bash
git add .
git commit -m "dodałem metodę do usuwania"
git push origin backend-dev
```

## Przydatne komendy

Sprawdź na jakim branchu jesteś:
```bash
git branch
```

Pobierz zmiany z githa:
```bash
git pull
```

Zobacz co zmieniłeś:
```bash
git status
git diff
```

Cofnij zmiany (jak coś zepsułeś):
```bash
git checkout -- nazwa_pliku
```

## Issues - pomysły co zrobić

Backend:
- [ ] Dodać walidację (min 3 znaki w tytule)
- [ ] Lepsze obsługiwanie błędów
- [ ] Jakieś testy może

Frontend:
- [ ] Zrobić żeby działało na telefonie
- [ ] Dodać jakiś ładny spinner jak ładuje
- [ ] Poprawić kolory
- [ ] Dark mode?

## Problemy które były

1. Problem: Nie działało połączenie z API
   Rozwiązanie: backend musi działać na localhost:8080

2. Problem: Git nie chciał pushować
   Rozwiązanie: trzeba było zrobić git pull najpierw

3. Problem: CSS się nie ładował
   Rozwiązanie: zła ścieżka w linku, poprawiłem na "css/style.css"

## Co się nauczyłem

- Jak używać git branchy
- Jak robić pull requesty
- Fetch API w JavaScript
- Spring Boot podstawy (kolega mi pokazał)

## Do zrobienia na prezentację

- [ ] Sprawdzić czy wszystko działa
- [ ] Zrobić parę przykładowych zadań w aplikacji
- [ ] Przygotować co powiedzieć
- [ ] Może jakieś slajdy?

## Linki

GitHub repo: [tutaj wpisać link jak zrobimy]
Jak uruchomić: mvnw.cmd spring-boot:run
Aplikacja: http://localhost:8080/index.html
