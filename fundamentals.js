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
    address : "3 Walkers Lane",
    previousOwners: [
        {name: "Pat Smith", address: "1 Main Street"},
        {name: "Sheila", address: "2 High Street"},
    ],
    type : { 
        make: 'Toyota', 
        model: 'Corolla 1.8',
},
    features: ['Parking Assist', 'Alarm', 'Tow-bar'],
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
  console.log('-----')
  console.log('Features')
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
      console.log(aCar.features[i]) ;
  }
  console.log('-----')
  console.log('Previous Owners')
  for (let i = 0 ; i < aCar.previousOwners.length ; i += 1) {
    console.log(aCar.previousOwners[i].name +', '+ aCar.previousOwners[i].address) ;
}
for (let p in aCar.type)  {
console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}
  