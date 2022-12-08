import fs from 'vite-plugin-fs/browser';


export const day6 = async () => {
    const txt = await fs.readFile('public/day6.txt')
    const data = txt.split('')

    console.log(data)

    let a: string;
    let b: string;
    let c: string;
    let d: string;
    let e: string;
    let f: string;
    let g: string;
    let h: string;
    let l: string;
    let m: string;
    let n: string;
    let o: string;
    let p: string;
    let q: string;



    const part1 = () => {

        for (let i = 3; i <= data.length; i++) {
            a = data[i - 3]
            b = data[i - 2]
            c = data[i - 1]
            d = data[i]

            if (a !== b && a !== c && a !== d) {
                if (b !== c && b !== d) {
                    if (c !== d) {
                        console.log(a, b, c, d)
                        console.log(i + 1)
                        return
                    }
                }

            }


        }
    }

    const part2 = () => {

        for (let i = 13; i <= data.length; i++) {
            a = data[i - 13]
            b = data[i - 12]
            c = data[i - 11]
            d = data[i - 10]
            e = data[i - 9]
            f = data[i - 8]
            g = data[i - 7]
            h = data[i - 6]
            l = data[i - 5]
            m = data[i - 4]
            n = data[i - 3]
            o = data[i - 2]
            p = data[i - 1]
            q = data[i]

            let set = [a, b, c, d, e, f, g, h, l, m, n, o, p, q]

            let count = 0

            for (let j = 0; j < set.length; j++) {
                for (let k = 0; k < set.length; k++) {
                    if (set[j] === set[k]) {
                        count++
                    }
                } 
            }

            if (count === 14) {
                console.log(set)
                console.log(i + 1)
                return
            }

        }
    }



    part2()
}
