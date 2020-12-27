const sevenYears: any = [];

// Add years
for (let year: number = 0; year <= 6; year += 1) {
  sevenYears.push([]);
  // Add trimestre
  for (let tri: number = 0; tri < 4; tri += 1) {
    sevenYears[year].push([]);
    // Add months
    for (let month: number = 0; month < 3; month += 1) {
      sevenYears[year][tri].push([]);
      // Add weeks
      for (let week: number = 0; week < 4; week += 1) {
        sevenYears[year][tri][month].push([]);
        // Add days
        if (week === 3) {
          // Add Here
          /* eslint-disable no-lonely-if */
          if (tri === 2) {
            // for months of jully and august
            if (month % 2 === 0) {
              if (tri === 2 && month === 0) {
                for (let day: number = 0; day < 10; day += 1) {
                  sevenYears[year][tri][month][week].push([]);
                }
              } else {
                for (let day: number = 0; day < 9; day += 1) {
                  sevenYears[year][tri][month][week].push([]);
                }
              }
            } else {
              for (let day: number = 0; day < 10; day += 1) {
                sevenYears[year][tri][month][week].push([]);
              }
            }
          } else {
            if (tri % 2 === 0 && month % 2 === 0) {
              // tri is par and month is par
              for (let day: number = 0; day < 10; day += 1) {
                sevenYears[year][tri][month][week].push([]);
              }
            } else {
              if (tri === 0 && month === 1) {
                // fev
                if (year % 4) {
                  for (let day: number = 0; day < 7; day += 1) {
                    sevenYears[year][tri][month][week].push([]);
                  }
                } else {
                  for (let day: number = 0; day < 8; day += 1) {
                    sevenYears[year][tri][month][week].push([]);
                  }
                }
              } else {
                // tri is inpar and month is inpar
                if (tri === 3) {
                  if (month % 2 === 0) {
                    for (let day: number = 0; day < 10; day += 1) {
                      sevenYears[year][tri][month][week].push([]);
                    }
                  } else {
                    for (let day: number = 0; day < 9; day += 1) {
                      sevenYears[year][tri][month][week].push([]);
                    }
                  }
                } else {
                  if (month % 2 === 0) {
                    for (let day: number = 0; day < 9; day += 1) {
                      sevenYears[year][tri][month][week].push([]);
                    }
                  } else {
                    for (let day: number = 0; day < 10; day += 1) {
                      sevenYears[year][tri][month][week].push([]);
                    }
                  }
                }
              }
            }
          }
        } else {
          for (let day: number = 0; day < 7; day += 1) {
            sevenYears[year][tri][month][week].push([]);
          }
        }
      }
    }
  }
}
