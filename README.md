# Fitness Tracker

## Opis projektu

**Fitness Tracker** to aplikacja webowa oraz desktopowa, która pozwala użytkownikowi zarządzać swoimi treningami. Użytkownik może dodawać, edytować, usuwać oraz przeglądać zaplanowane i przeszłe treningi, a także generować statystyki dla wybranych dat.

Celem projektu jest umożliwienie łatwego śledzenia postępów w aktywności fizycznej oraz planowania przyszłych treningów.

## Funkcjonalności

- Dodawanie nowych treningów (typ, intensywność, czas trwania, data i godzina)
- Edytowanie oraz usuwanie istniejących treningów
- Automatyczne oznaczanie przeszłych treningów (wizualne przyciemnienie)
- Generowanie statystyk treningów w wybranym zakresie dat
- Wersja desktopowa aplikacji dzięki Electron

## Instrukcja uruchomienia aplikacji

### Wersja desktopowa (Electron)

1. **Instalacja zależności**

```bash
npm install
npm install electron --save-dev
```

2. **Dodanie skryptu do `package.json`**

```json
"scripts": {
  "start": "node server.js",
  "electron": "electron main.js"
}
```

3. **Uruchomienie aplikacji jako desktop**

```bash
npm run electron
```

## Wykorzystane biblioteki zewnętrzne

- **Express** – framework do obsługi serwera HTTP
- **Mongoose** – ODM do komunikacji z MongoDB
- **EJS** – silnik szablonów HTML
- **Electron** – framework do tworzenia aplikacji desktopowych

## Struktura aplikacji

```
Fitness-Tracker/
    models/
        trainingModel.js      # Model danych treningu
    controllers/
        trainingController.js # Logika aplikacji (dodawanie, edycja, statystyki)
    views/
        index.ejs            # Widok główny z podziałem na przyszłe i przeszłe treningi
        layout.ejs           # Szablon główny
        add.ejs              # Formularz dodawania treningu
        edit.ejs             # Formularz edytowania treningu
        stats.ejs            # Statystyki treningów  
    public/
        styles.css           # Style CSS aplikacji
    app.js                   # Główny plik aplikacji
    main.js                  # Plik uruchamiający aplikację desktopową
    .env                     # Plik konfiguracyjny
    package.json             # Informacje o projekcie i zależnościach
```

## Przykładowe dane wejściowe

- **Typ:** `Cardio`, `Strength`, `Flexibility`, `Other`
- **Intensywność:** `Low`, `Medium`, `High`
- **Czas trwania:** np. `30` minut
- **Data i godzina:** np. `2025-06-05 18:00`


