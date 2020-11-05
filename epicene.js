function myfunc() {
    var s = document.getElementById("nm").value;

    s = s.replace(/\bfemale\b/g, "individual");
    s = s.replace(/\bmale\b/g, "individual");

    s = s.replace(/\bboys\b/g, "young people");
    s = s.replace(/\bBoys\b/g, "Young people");
    s = s.replace(/\bboy\b/g, "young person");
    s = s.replace(/\bBoy\b/g, "Young person");
    s = s.replace(/\bgirls\b/g, "young people");
    s = s.replace(/\bGirls\b/g, "Young people");
    s = s.replace(/\bgirl\b/g, "young person");
    s = s.replace(/\bGirl\b/g, "Young person");

    s = s.replace(/father/g, "parent");
    s = s.replace(/Father/g, "Parent");
    s = s.replace(/mother/g, "parent");
    s = s.replace(/Mother/g, "Parent");
    s = s.replace(/brother/g, "sibling");
    s = s.replace(/Brother/g, "Sibling");
    s = s.replace(/(S|s)ister/g, "$1ibling");
    s = s.replace(/\b(aunt|uncle)/g, "auncle");
    s = s.replace(/\b(Aunt|Uncle)/g, "Auncle");
    s = s.replace(/\b(N|n)(iece|ephew)/g, "$1ibling");

    s = s.replace(/\ba (wo)?man\b/g, "an individual");
    s = s.replace(/\bA (wo)?man\b/g, "An individual");
    s = s.replace(/\bWoman\b/g, "Individual");
    s = s.replace(/\bMan\b/g, "Individual");
    s = s.replace(/woman\b/g, "person");
    s = s.replace(/\bman\b/g, "person");
    s = s.replace(/\b(wo)?men\b/g, "people");

    document.getElementById("print_p").innerHTML = text;

}