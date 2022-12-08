import fs from 'vite-plugin-fs/browser';

export const day5 = async () => {
    const d = await fs.readFile('public/day5.txt')
    const data = d.split('\r\n')
    let stacks: [string[]] = [[' ']]
    let index = 1;
    let result = '';
    // console.log(data)

    console.log(stacks)

    //arrange stacks
    for (let j = 0; j <= 8; j++) {
        stacks[j] = [' ']
        for (let i = 0; i <= 7; i++) {
            stacks[j].push(data[i].charAt(index))
        }
        stacks[j] = stacks[j].filter(item => item !== ' ')
        stacks[j] = stacks[j].reverse()
        index = index + 4
    }


    const part1 = () => {
        for (let row = 10; row < data.length; row++) {
            let qttyToMove = parseInt(data[row].substring(5, data[row].charAt(6) !== ' ' ? 7 : 6))
            let indexToMove = parseInt(data[row].charAt(data[row].charAt(6) !== ' ' ? 13 : 12))
            let indexToReceive = parseInt(data[row].charAt(data[row].charAt(6) !== ' ' ? 18 : 17))


            for (let i = 1; i <= qttyToMove; i++) {
                let removed = stacks[indexToMove - 1].pop()!
                console.log(removed)
                stacks[indexToReceive - 1].push(removed)
            }

            // console.log('row', row)
            // console.log('qttyToMove', qttyToMove)
            // console.log('indexToMove', indexToMove)
            // console.log('indexToReceive', indexToReceive)
        }

        // final answer: JRVNHHCSJ
    }


    const part2 = () => {
        for (let row = 10; row < data.length; row++) {
        // for (let row = 10; row < 15; row++) {
            let qttyToMove = parseInt(data[row].substring(5, data[row].charAt(6) !== ' ' ? 7 : 6))
            let indexToMove = parseInt(data[row].charAt(data[row].charAt(6) !== ' ' ? 13 : 12))
            let indexToReceive = parseInt(data[row].charAt(data[row].charAt(6) !== ' ' ? 18 : 17))


            // for (let i = 1; i <= qttyToMove; i++) {
            // let removedArray = stacks[indexToMove].slice(stacks[indexToMove].length - qttyToMove)
            // console.log(removedArray)
            // console.log('from ', indexToMove + 1)
            // console.log('to ', indexToReceive + 1)
            // stacks[indexToReceive].push(removed)
            // }

            // for (let i = 0; i < qttyToMove; i++) {
            // stacks[indexToReceive].push(removedArray[i])
            // console.log(removedArray[i])
            // }



            let removedArray = []
            for (let i = 1; i <= qttyToMove; i++) {
                removedArray.push(stacks[indexToMove - 1].pop())
            }
            console.log(removedArray)

            stacks[indexToReceive-1] = stacks[indexToReceive-1].concat(removedArray.reverse())

            // console.log(stacks)
        }
    }

    // part1()
    part2()
    console.log(stacks)
    stacks.map((stack) => {
        result = result + stack[stack.length - 1]
    })
    console.log('answer:', result)
}




//  0. "                [V]     [C]     [M]"
//  1. "[V]     [J]     [N]     [H]     [V]"
//  2. "[R] [F] [N]     [W]     [Z]     [N]"
//  3. "[H] [R] [D]     [Q] [M] [L]     [B]"
//  4. "[B] [C] [H] [V] [R] [C] [G]     [R]"
//  5. "[G] [G] [F] [S] [D] [H] [B] [R] [S]"
//  6. "[D] [N] [S] [D] [H] [G] [J] [J] [G]"
//  7. "[W] [J] [L] [J] [S] [P] [F] [S] [L]"
//  8. " 1   2   3   4   5   6   7   8   9 "
//  9.
//  10. move 2 from 2 to 7
//  11. move 8 from 5 to 6
//  12. move 2 from 4 to 5
//  13. move 1 from 4 to 5
//  14. move 1 from 5 to 8