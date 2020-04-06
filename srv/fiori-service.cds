using Covid19Service from './covid19-service';

// header-level annotations
annotate Covid19Service.CountriesAggregated with @(
  Common : {SemanticKey : [Country]},
  UI     : {
    SelectionFields : [
    Date,
    Country,
    Confirmed,
    Recovered,
    Deaths
    ],
    LineItem        : [
    {
      $Type             : 'UI.DataField',
      Value             : Date,
      ![@UI.Importance] : #High
    },
    {
      $Type             : 'UI.DataField',
      Value             : Country,
      ![@UI.Importance] : #High
    },
    {
      $Type             : 'UI.DataField',
      Value             : Confirmed,
      ![@UI.Importance] : #Medium
    },
    {
      $Type             : 'UI.DataField',
      Value             : Recovered,
      ![@UI.Importance] : #Medium
    },
    {
      $Type             : 'UI.DataField',
      Value             : Deaths,
      ![@UI.Importance] : #Medium
    }
    ],
    Identification  : [
    {
      $Type             : 'UI.DataField',
      Value             : Date,
      ![@UI.Importance] : #High
    },
    {
      $Type             : 'UI.DataField',
      Value             : Country,
      ![@UI.Importance] : #High
    },
    {
      $Type             : 'UI.DataField',
      Value             : Confirmed,
      ![@UI.Importance] : #Medium
    },
    {
      $Type             : 'UI.DataField',
      Value             : Recovered,
      ![@UI.Importance] : #Medium
    },
    {
      $Type             : 'UI.DataField',
      Value             : Deaths,
      ![@UI.Importance] : #Medium
    }
    ],
    HeaderInfo      : {
      TypeName       : 'Country Aggregated',
      TypeNamePlural : 'Countries Aggregated',
      Title          : {Value : Country},
      Description    : {Value : Date}
    },
    Facets          : [{
      $Type  : 'UI.ReferenceFacet',
      Target : '@UI.Identification',
      Label  : 'Details'
    }]
  }
) {
  // element-level annotations
  @title : 'Date'
  Date;

  @title : 'Country'
  Country;

  @title : 'Confirmed'
  Confirmed;

  @title : 'Recovered'
  Recovered;

  @title : 'Deaths'
  Deaths;
}
