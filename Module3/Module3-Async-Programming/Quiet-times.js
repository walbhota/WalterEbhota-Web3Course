async function textFile(filename) {
  const data = {
    "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
    "log1.txt": "1695709940692\n1695701068331\n1695701189163",
    "log2.txt": "1695809940692\n1695801068331\n1695801189163",
    "log3.txt": "1695909940692\n1695901068331\n1695901189163"
  };
  return data[filename];
}

async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  let files = logFileList.split("\n");
  let table = Array(24).fill(0);

  for (let file of files) {
    let logData = await textFile(file);
    let timestamps = logData.split("\n").map(Number);

    for (let timestamp of timestamps) {
      let date = new Date(timestamp);
      let timestampDay = date.getDay();
      let timestampHour = date.getHours();

      if (timestampDay === day) {
        table[timestampHour]++;
      }
    }
  }
  
  return table;
}

activityTable(2)
  .then(table => console.log("Activity Table:", table));
