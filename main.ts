let User : UserType = {
FirstName : "Taimoor",
LastName : "Bahoo",
RollNo : 12345,
IsMonitor : true,
Subjects : ["English, Physics, MathaMatics, Urdu"],
StudentId : 12345,
Percentage : {
    MathaMatics : "60%",
    English : "70%",
    Urdu : "80%",
    Physics : "90%",
    }
}

type UserType = {
FirstName : string;
LastName : string;
RollNo : Number;
IsMonitor : Boolean;
Subjects : string[];
StudentId : Number;
Percentage : PercentageType
}

console.log(User);

interface PercentageType {
MathaMatics : string;
English : string;
Urdu : string;
Physics : string
}

console.log(User);
