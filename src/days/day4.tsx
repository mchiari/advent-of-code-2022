import fs from 'vite-plugin-fs/browser';

export const day4 = async () => {
    const d = await fs.readFile('public/day4.txt')
    const data = d.split('\r\n')



    console.log(data)
    let contains = 0;
    let doNotContain = 0;

    data.map((input, index) => {

        const elfPair = input.split(',')

        var range1 = elfPair[0].split('-')
        var range2 = elfPair[1].split('-')

        var range1Start = parseInt(range1[0])
        var range1End = parseInt(range1[1])
        var range2Start = parseInt(range2[0])
        var range2End = parseInt(range2[1])

        console.table({ 'range1': range1,'range2': range2})

        if (range1Start >= range2Start && range1End <= range2End) {
            console.log('contém')
            contains++
        } else if (range2Start >= range1Start && range2End <= range1End){
            console.log('contém')
            contains++
        } else doNotContain++

    })

    console.log('contains ', contains)
    console.log('doNotContain: ', doNotContain)

}

