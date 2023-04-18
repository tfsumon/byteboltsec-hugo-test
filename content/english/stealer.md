---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Stealer** - focuses on credentials sniffed from malware infected devices

{{< tabs >}}
  {{< tab "Stealer API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /stealer      | 

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
| usr      | The username used to authenticate      |
| pwd      | The password used to authenticate      |
| src      | The target URL or IP that the victim authenticated to      |
| hid      | The hardware ID of the infected device     |
| iip      | The IP address of the infected device      |
| inf      | The date the machine was infected on (in unixtime)      |
| mal      | The type of malware infected on the device      |
| fnd      | The date the credential was found      |
  {{< /tab >}}
{{< /tabs >}}
