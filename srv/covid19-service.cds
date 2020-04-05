using {covid19} from '../db/schema';

service Covid19Service {
  @readonly
  entity CountriesAggregated as projection on covid19.CountriesAggregated;
}
