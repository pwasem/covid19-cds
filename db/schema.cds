using {sap} from '@sap/cds/common';

namespace covid19;

entity CountriesAggregated {
  key Date      : Date;
  key Country   : String;
      Confirmed : Integer;
      Recovered : Integer;
      Deaths    : Integer;
}
