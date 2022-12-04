import fs from 'vite-plugin-fs/browser';

export const day2 = async () =>{

    const d = await fs.readFile('public/day2.txt')
    const data = d.split('\r\n')

    // console.log(data)
    let points = 0

    data.map((o)=>{
        points = points + handlePossiblePlaysRound2(o)
        console.log(points) 
    })

}


const handlePossiblePlaysRound1 = (play: string) => {
    const possiblePlay = {
        "A X": 1 + 3,
        "A Y": 2 + 6,
        "A Z": 3 + 0,
        "B X": 1 + 0,
        "B Y": 2 + 3,
        "B Z": 3 + 6,
        "C X": 1 + 6,
        "C Y": 2 + 0,
        "C Z": 3 + 3,
    }
    //@ts-ignore
    return possiblePlay[play] ?? 'Fail'
}

const handlePossiblePlaysRound2 = (play: string) => {
    const possiblePlay = {
        "A X": 3 + 0,
        "A Y": 1 + 3,
        "A Z": 2 + 6,
        "B X": 1 + 0,
        "B Y": 2 + 3,
        "B Z": 3 + 6,
        "C X": 2 + 0,
        "C Y": 3 + 3,
        "C Z": 1 + 6,
    }
    //@ts-ignore
    return possiblePlay[play] ?? 'Fail'
}

// 1.13930