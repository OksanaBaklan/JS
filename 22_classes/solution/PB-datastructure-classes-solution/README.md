# Classy

#### 1. Person Class
* Create a class named `Person` the construcror of which accepts the name of a person as a string and his/her age as a number.
* The `Person` class should have the properties `name` and `age`.
* The `Person` class should have a method named `describe` which returns a string in the following format: "[name], [age] years old". So, for example, if John is 19 years old, then the `describe` method of his instance will return "John, 19 years old".

#### 2. Volume
* Create a class named `Cylinder` the constructor of which accepts a height number and a radius number.
* Add a method named `getVolume` to the class which returns the volume of the cylinder based on height and radius. 

* **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

#### 3. Tick Tock
Rewrite the following code to use the "class" syntax. The name of the class should remain `Clock`.
```javascript
  function Clock({ template }) {
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.start = function() {
      render();
    };

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
```
#### 4. TV Class
* Create a class named `TV` with the properties `brand`, `channel` and `volume`.
* Specify `brand` as a constructor parameter.
* The value of `channel` should be `1` by default. `volume` should be `50` by default.
* Add methods `increaseVolume` and `decreaseVolume`. Volume can't be below 0 or above 100.
* Add a method `getNewChannel` to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method `resetTV` to reset the TV back to channel 1 and volume 50. 
* Add a merhod `getTVstatus` that returns info about the TV status in the format: "Panasonic at channel 8, volume 75".
