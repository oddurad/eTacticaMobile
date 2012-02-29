function Location(name, cost, cab) {
    var self = this;
    self.name = name;
    self.cost = ko.observable(cost);
    self.cab = ko.observable(cab);
    self.nameCost = name + " " + cost + "$";
}
function LocationsViewModel() {
    var self = this;
    self.allLocs = ko.observable({ "locations": [{"locName": "Walmart29A", "cabinets": [{"cabName": "WalMartCab1A", "cabCost": 273, "wattUsage": 90}, {"cabName": "WalMartCab1B", "cabCost": 750, "wattUsage": 230}], "locCost": 1023, "wattUsage": 320}, {"locName": "Walmart29B", "cabinets": [{"cabName": "WalMartCab2A", "cabCost": 510, "wattUsage": 12}, {"cabName": "WalMartCab2B", "cabCost": 1020, "wattUsage": 172}, {"cabName": "WalMartCab2C", "cabCost": 1000, "wattUsage": 90}], "locCost": 2530, "wattUsage": 274}]});
    self.locations = ko.observableArray([
        new Location(self.allLocs().locations[0].locName, self.allLocs().locations[0].locCost, self.allLocs().locations[0].cabinets),
        new Location(self.allLocs().locations[1].locName, self.allLocs().locations[1].locCost, self.allLocs().locations[1].cabinets)
    ]);
}
ko.applyBindings(new LocationsViewModel());

