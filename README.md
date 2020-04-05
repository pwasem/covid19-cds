[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# covid19-cds

[@sap/cds](https://cap.cloud.sap/docs/node.js/api) based service for providing Coronavirus disease 2019 (COVID-19) time series listing confirmed cases, reported deaths and reported recoveries.

The intention behind this service is just to provide an additional [OData v4](https://www.odata.org/documentation/) API to the already existing `csv` and `json` APIs, which might be helpful for others for consuming these time series.

## Data sources

Any time series being used by this service is taken from [DataHub.io](https://datahub.io/core/covid-19) providing normalized data from the original [upstream repository](https://github.com/CSSEGISandData/COVID-19) maintained by [Johns Hopkins University Center for Systems Science and Engineering (CSSE)](https://systems.jhu.edu/).

## Prerequisites

Please make sure to have

- [grunt-cli](https://github.com/gruntjs/grunt-cli)
- [@sap/cds-dk](https://cap.cloud.sap/docs/get-started/)

globally installed.

## Getting Started

Simply clone this repository and run

```shell
npm i
npm start
```

Afterwards you can browse to [localhost:4004](http://localhost:4004) and start retrieving time series from the service using [OData v4](https://www.odata.org/documentation/) requests.

## Behind the scenes

On every `npm start`:

- `grunt data` will download the latest time series as `.csv` files from [DataHub.io](https://datahub.io/core/covid-19) as docuemented [here](https://datahub.io/core/covid-19#javascript)
- `cds deploy` will [add these .csv files as initial data](https://cap.cloud.sap/docs/get-started/in-a-nutshell#adding-initial-data-in-csv-files) to a [sqlite3](https://github.com/mapbox/node-sqlite3) database.
- `cds run` will start the service 

## Acknowledgments

Many thanks to

- [Johns Hopkins University Center for Systems Science and Engineering (CSSE)](https://systems.jhu.edu/)
- [DataHub.io](https://datahub.io/core/covid-19)

for proving data on a daily basis!

## License
[MIT](https://github.com/pwasem/covid19-cds/blob/master/LICENSE.md)

Please [#StayHome](https://twitter.com/search?q=%23stayhome&src=typed_query) and feel free to contribute!