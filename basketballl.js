//for home increment
let count1 = 0
console.log(count1)

function increaseHomeBy1() {
    count1 += + 1
    // console.log(count1)
    let counted1 = document.getElementById("home").textContent = count1

    //   counted.innerText = count
}
function increaseHomeBy2() {
    count1 += +2
    document.getElementById("home").textContent = count1
}

function increaseHomeBy3() {
    count1 += +3
    document.getElementById("home").textContent = count1
}

//for guest increment
let count2 = 0
function increaseGuestBy1() {
    count2 =count2 + 1
     let counted2 = document.getElementById("guest").textContent = count2
    //  counted2.innerText = count
}

function increaseGuestBy2() {
    count2 += +2
    document.getElementById("guest").textContent = count2
}

function increaseGuestBy3() {
    count2 += +3
    document.getElementById("guest").textContent = count2
}