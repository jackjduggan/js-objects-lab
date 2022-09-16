const aCar = {
    owner : "Joe Bloggs",
    type : { 
        make: 'Toyota', 
        model: 'Corolla 1.8',
},
    registration : {
        year: '20',
        stage: '1',
        countyCode: 'WD',
        regNumber: 1058,
},
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make);
  console.log(aCar.registration.year + aCar.registration.stage
    +'-'+ aCar.registration.countyCode +'-'+ aCar.registration.regNumber);