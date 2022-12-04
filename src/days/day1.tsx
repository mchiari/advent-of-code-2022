import fs from 'vite-plugin-fs/browser';


export const day1 = async () => {
    const data = await fs.readFile('public/day1.txt')
    const d2 = data.split('\r\n')

    let totals: number[] = []
    let sum = 0

    d2.map((food) => {
      if (food !== '')
        sum = sum + Number(food)

      if (food === '') {
        totals.push(sum)
        sum = 0
      }
    })
    totals.sort()
    console.log('Total calories by elf: ', totals)
    console.log('How much calories the top elf was carrying?', totals[totals.length - 1])
    console.log('How much calories the top three elves were carrying?', totals[totals.length - 1] + totals[totals.length - 2] + totals[totals.length - 3])

  }