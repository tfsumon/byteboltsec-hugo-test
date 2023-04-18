---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Sessions** - focuses on session tokens sniffed from malware infected devices<br>

{{< tabs >}}
  {{< tab "Sessions API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /sessions      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name, email address or IP address     | 
| **update**      | return the Unix timestamp the stealer database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| dom      | The domain name associated with the victim      |
| name      | The name of the cookie      |
| val      | The value of the cookie      |
| path      | The cookie path     |
| expires      | The date (in unixtime) that the cookie is set to expire      |
| fnd      | The date the data was found (in YYYYMMDD format)      |
 
  {{< /tab >}}
{{< /tabs >}}
