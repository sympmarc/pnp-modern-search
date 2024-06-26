declare interface ISearchVerticalsWebPartStrings {
  General: {
    WebPartDefaultTitle: string;
    PlaceHolder: {
      EditLabel: string;
      IconText: string;
      Description: string;
      ConfigureBtnLabel: string;
    }
  },
  PropertyPane: {
    SearchVerticalsGroupName: string;
    Verticals: {
      PropertyLabel: string;
      PanelHeader: string;
      PanelDescription: string;
      ButtonLabel: string;
      DefaultVerticalQueryStringParamLabel: string;
      DefaultVerticalQueryStringParamDescription: string;
      Fields: {
        TabName: string;
        TabValue: string;
        IconName: string;
        IsLink: string;
        LinkUrl: string;
        ShowLinkIcon: string;
        OpenBehavior: string;
        Audience: string;
      },
      AudienceInputPlaceholderText: string;
      AudienceNoResultsFound: string;
      AudienceLoading: string;
    }
  }
}

declare module 'SearchVerticalsWebPartStrings' {
  const strings: ISearchVerticalsWebPartStrings;
  export = strings;
}
