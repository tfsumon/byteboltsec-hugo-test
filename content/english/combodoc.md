---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Combo** - focuses on combo lists that contain plaintext credentials<br>

{{< tabs >}}
  {{< tab "Combo API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /combo      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | accepts a domain name or email address      | 
| **update**      | return the Unix timestamp the creds database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| usr      | The username used to authenticate      |
| pwd      | The password used to authenticate      |
| fnd      | The date (in YYYYMMDD or unixtime format) the credentials were found      |
  {{< /tab >}}
{{< /tabs >}}
