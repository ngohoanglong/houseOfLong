let source = {
  updated: null,
  data: []
};
export const getUpdated = json => json.feed.updated.$t;
export const getProperty = (item, name) => item[name] && item[name].$t;
export const propertyList = ["id", "updated", "title"];
export const customPropertyList1 = [
  "country",
  "location",
  "locationid",
  "latitude",
  "longitude"
];
export const mapData = json => {
  return json.feed.entry.map(entry => {
    const result = Object.keys(entry).reduce(
      (result, key) => {
        switch (true) {
          case propertyList.includes(key):
            result[key] = getProperty(entry, key);
            break;
          case key.includes("confirmedcases"):
            const splitString = key.split("confirmedcases");
            result.data.push({
              type: "confirmedcases",
              date: splitString[1],
              value: getProperty(entry, key)
            });
            break;
          case key.includes("deaths"):
            const splitdeathsString = key.split("deaths");
            result.data.push({
              type: "deaths",
              date: splitdeathsString[1],
              value: getProperty(entry, key)
            });
            break;
          default:
            result[key] = getProperty(entry, key);
            break;
        }

        return result;
      },
      { data: [] }
    );
    return result;
  });
};

export const getData = cb =>
  fetch(
    "https://spreadsheets.google.com/feeds/list/18X1VM1671d99V_yd-cnUI1j8oSG2ZgfU_q1HfOizErA/od6/public/values?alt=json"
  )
    .then(res => res.json())
    .then(json => {
      console.log(json);
      source = {
        updated: getUpdated(json),
        data: mapData(json)
      };
      return cb(source);
    });
