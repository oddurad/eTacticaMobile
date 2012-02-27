function Location(name, cost, cab) {
    var self = this;
    self.name = name;
    self.cost = cost;
    self.cab = ko.observable(cab);
    self.nameCost = name + " " + cost + "$";
}
function LocationsViewModel() {
    var self = this;
    self.jason = ko.observable({ "devicename": "7CDD90012E2B", "timestamp": 1329734426, "version": 1, "cbms": [[ 3584, 0.054000 ], [ 3585, 0.056000 ], [ 3586, 0.436000 ], [ 3587, 0.383000 ],[ 3588, 0.062000 ], [ 3589, 0.050000 ], [ 21504, 0.118000 ], [ 21505, 0.000000], [ 21506, 0.041000 ], [ 21507, 0.000000 ], [ 21508, 0.042000 ], [ 21509, 0.042000 ], [ 30208, 0.162000 ], [ 30209, 0.163500 ], [ 30210, 0.163500 ], [ 30211, 1.235000 ], [ 30212, 1.227500 ], [ 30213, 1.180500 ], [ 27904, 0.143500 ], [ 27905, 0.144000 ], [ 27906, 0.149000 ], [ 27907, 1.313000 ], [ 27908, 5.699500 ], [27909, 2.915000 ], [ 34304, 0.066000 ], [ 34305, 0.059000 ], [ 34306, 0.059000 ], [ 34307, 0.609000 ], [ 34308, 0.000000 ], [ 34309, 0.091000 ], [ 25600, 1.393000 ], [ 25601, 0.159000 ], [ 25602, 0.154000 ], [ 25603, 0.164000 ], [ 25604, 0.160000 ], [ 25605, 0.163000 ], [ 41984, 0.000000 ], [ 41985, 0.126000 ], [ 41986, 0.000000 ], [ 41987, 0.000000 ], [ 41988, 0.000000 ], [ 41989, 0.000000 ], [ 23808, 72.932000 ], [ 23809, 72.675000 ], [ 23810, 73.514000 ], [ 23811, 0.146000 ], [ 23812, 0.000000 ], [ 23813, 0.000000 ] ], "mains": [ { "id": "0004A342FF28", "readings": [ { "voltage": 224.714000, "current": 74.607000, "pf": 0.980000 }, { "voltage": 227.116000, "current": 71.727000, "pf": 0.980000 }, { "voltage":227.453000, "current": 72.183000, "pf": 0.980000 } ], "frequency": 50.000000, "cumulative_wh": 9527013.101000 } ] });
    self.cabinetName = [
        { cabinetName: "Cabinet 1 ", price: 100},
        { cabinetName: "Cabinet 2 ", price: 150},
        { cabinetName: "Cabinet 3 ", price: 50}
    ];  
    self.cabinetName2 = [
        { cabinetName: "Cabinet 4 ", price: 400},
        { cabinetName: "Cabinet 5 ", price: 190},
        { cabinetName: "Cabinet 6 ", price: 300}
    ]; 
    self.locations = ko.observableArray([
        new Location("Location 1", 300, self.cabinetName),
        new Location("Location 2", 890, self.cabinetName2)
    ]);
}
ko.applyBindings(new LocationsViewModel());

