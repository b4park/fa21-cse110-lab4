let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2 
};

for (const value in statistics) {
    if(value[0] == 'r' || statistics[value] % 2 == 1) {
      console.log(statistics[value]);
    }
  }