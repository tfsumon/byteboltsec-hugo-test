---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Radar** - focuses on domains that threat actors have announced as targets<br>

{{< tabs >}}
  {{< tab "Radar API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /radar      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name      | 
| **update**      | return the Unix timestamp the darkweb database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| src      | A URL containing data associated with the target      |
| data      | The domain name associated with the victim      |
| found      | The date the data was indexed (in YYYYMMDD format)      |
 
  {{< /tab >}}
{{< /tabs >}}
