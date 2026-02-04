// Gère l'affichage des degrés et la couleur
class DisplayListener {
    constructor(id) {
        this.el = document.getElementById(id);
    }
    update(temp) {
        this.el.textContent = temp + "°C";
        this.el.className = ""; // Reset
        if (temp < 0) this.el.classList.add("blue");
        else if (temp < 20) this.el.classList.add("green");
        else if (temp < 30) this.el.classList.add("orange");
        else this.el.classList.add("red");
    }
}

// Gère le message d'alerte
class AlertListener {
    constructor(id) {
        this.el = document.getElementById(id);
    }
    update(temp) {
        if (temp < 0) this.el.textContent = "Brrrrrrr, mets ta cagoule !";
        else if (temp > 30) this.el.textContent = "Caliente ! Vamos a la playa !";
        else this.el.textContent = "";
    }
}

// Gère le tableau d'historique
class HistoryListener {
    constructor(id) {
        this.tbody = document.getElementById(id);
        this.count = 0;
    }
    update(temp) {
        this.count++;
        let row = `<tr><td>Mesure ${this.count}</td><td>${temp}°C</td></tr>`;
        this.tbody.insertAdjacentHTML('afterbegin', row);
    }
}