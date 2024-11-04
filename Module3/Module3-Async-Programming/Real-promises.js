function textFile(filename) {
    const data = {
      "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
      "log1.txt": "1695709940692\n1695701068331\n1695701189163",
      "log2.txt": "1695809940692\n1695801068331\n1695801189163",
      "log3.txt": "1695909940692\n1695901068331\n1695901189163"
    };
    return new Promise((resolve, reject) => {
      if (data[filename]) {
        resolve(data[filename]);
      } else {
        reject(new Error(`File ${filename} not found`));
      }
    });
  }
  
  function activityTable(day) {
    let table = Array(24).fill(0);
  
    return textFile("camera_logs.txt")
      .then(files => {
        return Promise.all(
          files.split("\n").map(file => 
            textFile(file).then(log => {
              log.split("\n").map(Number).forEach(timestamp => {
                let date = new Date(timestamp);
                if (date.getDay() === day) {
                  table[date.getHours()]++;
                }
              });
            })
          )
        );
      })
      .then(() => table)
      .catch(error => {
        console.error("Error reading log files:", error);
        throw error;
      });
  }
  
  activityTable(2)
    .then(table => console.log("Activity Table:", table))
    .catch(error => console.error("Failed to generate activity table:", error));
  