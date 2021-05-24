 
//  Merging Object to fill person information 
 const personInformation={
    Firstame:"Rebecca",
    Surname:"Anyangu",
    Nationality:"Kenya",
    City:"Nairobi",
    Postalcode:00100,
    Gender:"famale",
    Age:20,
    Status:"Student",
    PhoneNumber:"+254735350010",
    Institution:"AkiraChix studying Information Technology",
    Hobby:"I am interested in dramme,music and dancing"
    }
const heathInformation={
    BloodPresure:"Normal",
    BloodGroup:"A",
    Breathingproblem:"Have no breathing complication",
    Allergies:"Allergic to beef",
}


const newObj=Object.assign (personInformation,heathInformation);
console.log(newObj);

