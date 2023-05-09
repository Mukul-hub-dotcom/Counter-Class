class Counter {
    constructor() {
      this.count = 0;
      this.intervalId = null;
      this.isRunning = false;
  
      this.counterValueElement = document.getElementById('counter-value');
      this.startStopButton = document.getElementById('start-stop-btn');
      this.incrementButton = document.getElementById('increment-btn');
      this.decrementButton = document.getElementById('decrement-btn');
  
      this.startStopButton.addEventListener('click', this.toggleCounter.bind(this));
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  
    toggleCounter() {
      if (this.isRunning) {
        this.stopCounter();
      } else {
        this.startCounter();
      }
    }
  
    startCounter() {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.increment();
      }, 1000);
      this.startStopButton.textContent = 'Stop';
    }
  
    stopCounter() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.startStopButton.textContent = 'Start';
    }
  
    increment() {
      this.count++;
      this.updateCounterDisplay();
    }
  
    decrement() {
      this.count--;
      this.updateCounterDisplay();
    }
  
    updateCounterDisplay() {
      this.counterValueElement.textContent = this.count;
    }
  }
  
  const counter = new Counter();
  