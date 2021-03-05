const randomDice = (nb_throw) => {

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const dices = (nb_dices) => {
        const arrayDices = [];

        for (let i = 0; i < nb_dices; i++) {
            arrayDices.push(Math.round(getRandomArbitrary(1,6)));
        }

        return arrayDices
    }

    const result = [];

    for (let index = 0; index < nb_throw; index++) {
        result.push(dices(5))
    }

    return (
        result
    )

}

export default randomDice;