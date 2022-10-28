function kilometer(){
    let meter = document.getElementById("inputMeter").value;
    const kilo = 1000;
    const ans = meter / kilo;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " kilometer(s)")

}
function hectometer(){
    let meter = document.getElementById("inputMeter").value;
    const hecto = 100;
    const ans = meter / hecto;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " hectometer(s)")
}
function decameter(){
    let meter = document.getElementById("inputMeter").value;
    const deca = 10;
    const ans = meter / deca;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " decameter(s)")
}
function decimeter(){
    let meter = document.getElementById("inputMeter").value;
    const deci = 10;
    const ans = meter * deci;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " decimeter(s)")
}
function centimeter(){
    let meter = document.getElementById("inputMeter").value;
    const centi = 100;
    const ans = meter * centi;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " centimeter(s)")
}
function millimeter(){
    let meter = document.getElementById("inputMeter").value;
    const milli = 1000;
    const ans = meter * milli;

    document.getElementById("result").innerHTML = (meter + " meter(s) is equal to " + ans + " millimeter(s)")
}