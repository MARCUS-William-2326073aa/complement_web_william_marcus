class WeatherSensor {
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.data = Array.from({ length: 20 }, () => Math.round(Math.random() * 50 - 10));
        this.index = 0;
    }

    start() {
        setInterval(() => {
            const temp = this.data[this.index];
            // On envoie l'événement 'tempUpdate' avec la valeur
            this.eventManager.notify('tempUpdate', temp);
            this.index = (this.index + 1) % this.data.length;
        }, 2000);
    }
}