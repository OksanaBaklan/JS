### JS-Klassen

Erstelle die Instanzeigenschaften `fullname` und `email` in der Klasse `Employee`. Gegeben sind der Vor- und Nachname einer Person:

Bilde den `fullname`, indem du den Vor- und Nachnamen durch ein Leerzeichen getrennt zusammenfügst.
Bilde die `email`, indem du den Vor- und Nachnamen zusammenfügst, mit einem `.` dazwischen und mit `@company.com` am Ende. Achte darauf, dass die gesamte E-Mail in Kleinbuchstaben geschrieben ist.
Beispiele

```
emp1 = new Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = new Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
emp3.firstname ➞ "Antony"

```
* Hinweis :- Die Eigenschaften vorname und nachname sind bereits für dich erstellt.

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Classes-Exercise-1/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Classes-Exercise-1/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Classes-Exercise-1/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
