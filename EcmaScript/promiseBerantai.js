const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80,
    },
};

const { isCoffeeMakerReady, seedStocks } = state

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (seedStocks[type] >= miligrams) {
            seedStocks[type] -= miligrams;
            resolve('Biji kopi didapatkan!');
        } else {
            reject('Maaf stock kopi habis!');
        }
    });
};

const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if (isCoffeeMakerReady) {
            resolve('Kopi berhasil dibuat!');
        } else {
            reject('Maaf mesin tidak dapat digunakan!');
        }
    });
};

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve('Pesanan kopi sudah selesai!');
    });
};

const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Kopi arabika selesai!');
        }, 4000);
    });
};

const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Kopi robusta selesai!');
        }, 2000);
    });
};

const libericaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Kopi liberica selesai!');
        }, 3000);
    });
};

// function reserveACoffee(type, miligrams) {
//     getSeeds(type, miligrams)
//         .then(makeCoffee)
//         .then(servingToTable)
//         .then(resolvedValue => {
//             console.log(resolvedValue);
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//         });
// }

// /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
// reserveACoffee('liberica', 70);



// Promise Berantai Menggunakan async / await
async function reserveACoffee(type, miligrams) {
    try {
      const seeds = await getSeeds(type, miligrams);
      const coffee = await makeCoffee(seeds);
      const result = await servingToTable(coffee);
      console.log(result);
    } catch (rejectionReason) {
      console.log(rejectionReason);
    }
  }
   
  reserveACoffee('liberica', 80);
   
  /* Output:
  Pesanan kopi sudah selesai!
  */