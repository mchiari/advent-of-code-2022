import fs from 'vite-plugin-fs/browser';

export const day3 = async () => {

    const d = await fs.readFile('public/day3.txt')
    const data = d.split('\r\n')

    // part1(data)
    part2(data)


}
// GwrhJPDJCZFRcwfZWV
// GwrhJPDJC
//          ZFRcwfZWV

const part2 = (data: string[]) => {

    console.log(data)

    let items: string[][] = [[]]

    for (let i = 0; i < data.length; i = i + 3) {
        items.push([data[i], data[i + 1], data[i + 2]])
    }

    items.shift()
    console.log(items)

    let results: string[] = []


    items.forEach(item => {
        for (let item1 of item[0]) {
            for (let item2 of item[1]) {
                if (item1 === item2) {
                    for (let item3 of item[2]) {
                        if (item1 === item3) {
                            results.push(item1)
                            return
                        }
                    }
                }
            }
        }

    })

    console.log(results)

    const priorities = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52 }

    let sum = 0

    results.map((item) => {
        // @ts-ignore
        sum = sum + priorities[item]
    })

    console.log(sum)

}




const part1 = (data: string[]) => {
    const items: string[] = []
    let sum = 0;

    data.map((o) => {
        const pocket1 = o.slice(0, o.length / 2)
        const pocket2 = o.slice(o.length / 2)

        for (let item1 of pocket1.split("")) {
            for (let item2 of pocket2.split("")) {
                if (item1 === item2) {
                    items.push(item1)
                    return
                }
            }
        }
    })

    const priorities = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52 }

    items.map((item) => {
        // @ts-ignore
        sum = sum + priorities[item]
    })

    console.log(sum)
}