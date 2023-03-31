function registerForHeroes(input) {
    let heroesData = [];

    for (let i = 0; i < input.length; i++) {

        let [name, level, items] = input[i].split(' / ');
        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }
        heroesData.push(currentHero);

    }
    heroesData.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    });

}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);