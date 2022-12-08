import fs from 'vite-plugin-fs/browser';


export const day6 = async () => {
    const txt = await fs.readFile('public/day6.txt')
    const data = txt.split('')

    console.log(data)

    let a: string;
    let b: string;
    let c: string;
    let d: string;

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
