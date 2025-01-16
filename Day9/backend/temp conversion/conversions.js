// local module

export function toCelsius(from, value) {
    if (from === "f") {
        return (value - 32) * 5 / 9
    }
    if (from === "k") {
        return value - 273.15
    }
}

export function toKelvin(from, value) {
    if (from === "f") {
        return (value - 32) * 5 / 9 + 273.15
    }
    if (from === "c") {
        return value + 273.15
    }
}

export function toFahrenheit(from, value) {
    if (from === "k") {
        return (value - 273.15) * 5 / 9 + 32
    }
    if (from === "c") {
        return (value * 9 / 5) + 32
    }
}
