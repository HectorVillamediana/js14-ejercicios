const articleInfo = document.getElementById("info")
const buttonPrice = articleInfo.lastElementChild.previousElementSibling
const citySelector = articleInfo.firstElementChild.nextElementSibling
const sectionDestin = document.getElementById("car")
const numOfNightsElm = sectionDestin.firstElementChild.nextElementSibling
const numOfDaysCarElm = sectionDestin.lastElementChild
const sectionCOstoTotal = document.getElementById("costoTotal")
const spanCosto = sectionCOstoTotal.firstElementChild.nextElementSibling
let costCity = 0

const costeHotel = function (numOfHotelNights) {
    numOfHotelNights = numOfNightsElm.value
    return numOfHotelNights * 140
}

const costeAvion = function (nameOfCity, numOfNights) {
    citySelector.addEventListener("click", function () {
        citySelector.addEventListener("change", function () {
            nameOfCity = citySelector.value
            switch (nameOfCity) {
                case "bcn":
                    costCity = 90;
                    break;
                case "md":
                    costCity = 90;
                    break;
                case "svl":
                    costCity = 50;
                    break;
                default:
                    costCity = 40;
                    break;
            }
        })
    })
    numOfNights = numOfNightsElm.value
    if (numOfNights > 3) {
        return costCity - (costCity * 0.10)
    } else {
        return costCity
    }
}

const costeCoche = function (numOfDaysCarRent) {
    numOfDaysCarRent = numOfDaysCarElm.value
    if (numOfDaysCarRent > 3 && numOfDaysCarRent < 7) {
        return (numOfDaysCarRent * 40) - 20
    } else if (numOfDaysCarRent > 7) {
        return (numOfDaysCarRent * 40) - 50
    } else {
        return numOfDaysCarRent *40
    }
}

const calcularCoste = function () {
    costeHotel()
    costeAvion()
    costeCoche()
    spanCosto.innerText = costeCoche() + costeHotel() + costeAvion()
}

buttonPrice.addEventListener("click", calcularCoste)