export interface Mission {
  id: string;
  name: string;
  date_utc: string;
  details: string;

  links: {
    patch: {
      small: string;
    };
    wikipedia: string;
    article: string;
    webcast: string;
  };
}