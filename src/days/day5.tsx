import fs from 'vite-plugin-fs/browser';

export const day5 = async () => {
    const d = await fs.readFile('public/day5.txt')
    const data = d.split('\r\n')

    console.log(data)
    console.log(data[9])

    console.log(data[1].charAt(1))

    let stacks: [][] = [[]]

    for (let i = 0; i <= 8; i++) {
        stacks[i] = [...stacks[i], data[i].charAt(1)]
    }
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