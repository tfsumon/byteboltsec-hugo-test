---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Monitor** - manages monitored assets<br>

{{< tabs >}}
  {{< tab "Monitor API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /monitor      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **action**      | manage monitored assets<br> must be set to add, del or list      |
| **ast**      | add/delete the asset you wish to monitor<br>must be used in conjunction with the action parameter      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **notify**      | add/delete the email address or webhook you wish to receive alerts at<br>must be used in conjunction with the action parameter      |
| **creds**      | add/delete the basic auth credentials you wish to use when sending an alert to a webhook<br>must be used in conjunction with the action parameter      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| notify      | email or webhook that will be notified      |
| ast      | asset that will be monitored      |
  {{< /tab >}}

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
