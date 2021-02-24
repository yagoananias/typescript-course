const site: unknown = "https://yagoanananias.com.br/";

let sitesFavoritos: string[] = [];

sitesFavoritos.push(site as string);

//Still valid
sitesFavoritos.push(<string> site);