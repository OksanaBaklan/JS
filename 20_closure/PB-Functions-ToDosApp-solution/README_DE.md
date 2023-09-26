### ToDos List App

* "Shopping"
* "Home work"
* "Go to the gym"

### TODOs erstellen App

#### Funktion erstellen
Gegeben das Array 'toDosStore=["Shopping","Home work","Go to the gym"]'
##### 1. Element hinzufügen
* Erstelle eine Funktion mit dem Namen 'insertTodo', die 2 Argumente annimmt, das erste ist ein Array, das zweite ist ein String, die Funktion muss den String zum Array hinzufügen.

##### 2. Elemente hinzufügen
* Erstelle eine Funktion mit dem Namen "insertTodosArr", die 2 Argumente annimmt, beide sind Arrays, die Funktion muss das zweite Array zum ersten hinzufügen.

##### 3. Artikel entfernen
* Das erste ist ein Array, das zweite eine Zahl, die die Nummer der Todo-Aufgabe in der Liste angibt (beachte, dass diese Zahl nicht mit der Indexnummer identisch ist). Die Funktion muss eine Aufgabe aus dem Array löschen, die der angegebenen Nummer entspricht.

##### 4. Aufgabe bearbeiten
* Erstelle eine Funktion mit dem Namen 'editTodo', um einen beliebigen Posten nach Auftragsnummer zu bearbeiten.
* die Funktion benötigt 3 Argumente ==> das erste Argument ist das Ziel-Array, das zweite ist die Auftragsnummer der Aufgabe und das dritte Argument ist der neue Wert der Aufgabe

##### 5. Artikel bearbeiten
* Erstelle eine Funktion namens 'updateTodos', um die Artikel zu bearbeiten, indem du ein Array mit den Bestellnummern der Artikel übergibst.
* die Funktion benötigt 3 Argumente ==> das erste Argument ist das Ziel-Array, das zweite ist ein Array mit den Bestellnummern der Artikel und das dritte Argument ist ein Array mit den Werten der neuen Artikel
##### 6. TodosList lesen
* RenderToDosListTemplate-Funktion
* Diese Funktion nimmt ein Array als Argument und gibt das Endergebnis als String-Vorlage aus.
* prüft, ob das angegebene Array leer ist, und gibt eine Meldung zurück (To do list store is empty)
* sonst gib die ToDo-Vorlage zurück


##### Aufrufstapel (Call stack)
```js
insertTodo(toDosStore,"test1");
insertTodo(toDosStore,"test2");
insertTodo(toDosStore,"test4");
insertTodo(toDosStore,"test5");
removeTodo(toDosStore,3);
removeTodo(toDosStore,5);
insertTodo(toDosStore,"Call Alex");
editTodo(toDosStore,3, "Pay bills");
editTodo(toDosStore,5, "Visiting Tommy");
insertTodosArr(toDosStore,["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(toDosStore,
  [2, 4, 6],
  ["Meet with PR department", "Buy milk", "Check the internet connection"]
);
```

* Todo-Vorlage rendern
```js
console.log(RenderToDosListTemplate(toDosStore));
// toDosStore is empty ==> To do list is empty


/* expected result in the terminal: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- Buy milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test
 */
```

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Functions-ToDosApp/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Functions-ToDosApp/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Functions-ToDosApp/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
