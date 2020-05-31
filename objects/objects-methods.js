let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailibility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailibility(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailibility(4))