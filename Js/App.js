// On garde la classe TabsManual ici ou dans un autre fichier
class TabsManual {
    constructor(groupNode) {
        this.tabs = Array.from(groupNode.querySelectorAll('[role=tab]'));
        this.panels = this.tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
        this.tabs.forEach(t => t.addEventListener('click', () => this.show(t)));
        this.show(this.tabs[0]);
    }
    show(tab) {
        this.tabs.forEach((t, i) => {
            const sel = t === tab;
            t.setAttribute('aria-selected', sel);
            this.panels[i].classList.toggle('is-hidden', !sel);
        });
    }
}

window.addEventListener('load', () => {
    // 1. Initialiser les Onglets
    document.querySelectorAll('[role=tablist]').forEach(el => new TabsManual(el));

    // 2. Créer le Hub (EventManager)
    const em = new EventManager();

    // 3. Créer les Listeners (Vérifiez bien les IDs de votre HTML !)
    const display = new DisplayListener("block");
    const alert = new AlertListener("cagoule");
    const history = new HistoryListener("history-table-body");

    // 4. Abonner les listeners à l'événement 'tempUpdate'
    em.subscribe('tempUpdate', (t) => display.update(t));
    em.subscribe('tempUpdate', (t) => alert.update(t));
    em.subscribe('tempUpdate', (t) => history.update(t));

    // 5. Lancer le capteur
    const sensor = new WeatherSensor(em);
    sensor.start();
});