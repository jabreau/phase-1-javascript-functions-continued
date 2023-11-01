function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workPlace = 'go to the office') {
    return `This Monday, I will ${workPlace}.`
}

function wrapAdjective(character = '*', msg = 'You are') {
    return function (compliment = 'special') {
        return `${msg} ${character}${compliment}${character}!`
    }
}

wrapAdjective("%")("a dedicated programmer");