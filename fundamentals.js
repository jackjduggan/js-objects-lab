const aCar = {
    mileage: 10000,
    colour: {
        exterior: "red",
        interiorFabric: {
            texture: "leather",
            shade: "cream",
        }
    },
    owner : "Joe Bloggs",
    previousOwners: [
        {name: "Pat Smith", address: "1 Main Street"},
        {name: "Sheila", address: "2 High Street"},
    ],
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
  console.log('It is a ' + aCar.colour.exterior + ' car, '
  + aCar.mileage + ' mileage, with ' + aCar.colour.interiorFabric.texture 
  + ' interior');
  console.log('First Owner : ' + aCar.previousOwners[0].name +', '+ aCar.previousOwners[0].address);
