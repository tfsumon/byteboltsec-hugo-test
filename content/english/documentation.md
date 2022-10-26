---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Creds** - focuses on 3rd party breaches that contain credentials<br>
**Darkweb** - focuses on company data being leaked or sold on the darkweb<br>
**Sessions** - focuses on credentials sniffed from malware infected computers<br>
**Stealer** - focuses on credentials sniffed from malware infected computers
{{< tabs >}}
  {{< tab "Creds API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /creds      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **action**      | manage monitored domains<br> must be set to add, del or list      |
| **attr**      | display a short description of the breach      |
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **dom**      | add/delete the domain you wish to monitor<br>must be used in conjunction with the action parameter      |
| **hash**      |  return a 0 if the password is in hashed format and a 1 if the password has been decrypted     |
| **import**      | display the date the breach was imported into the database      |
| **json**      |  display results in JSON format (default is CSV)     |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **list**      | list the breaches and dates they were imported      |
| **notify**      | add/delete the email address you wish to receive alerts on<br>must be used in conjunction with the action parameter      |
| **p**      | results are limited to 500 credentials per request<br>when an HTTP 206 response status is returned, pagination is required to view the remaining results.<br>p is a numeric page value      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | accepts a domain name or email address      | 
| **update**      | return the Unix timestamp the creds database was last updated      |
| **uniq**      | return a list of all unique email addresses and plaintext passwords      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| eml      | The email address used to authenticate      |
| pwd      | The password used to authenticate      |
| src      | The name of the breached website or collection      |
| atr      | The attribution data associated with the breach     |
| imp      | The date (in YYYYMMDD format) the breach was found      |
  {{< /tab >}}

  {{< tab "Darkweb API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.io      | /darkweb      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **notify**      | add/delete the email address you wish to receive alerts on<br>must be used in conjunction with the action parameter      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name      | 
| **update**      | return the Unix timestamp the darkweb database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| src      | A URL containing data associated with the target      |
| site      | The name of the threat actor      |
| data      | The domain name associated with the victim      |
| found      | The date the data was indexed (in YYYYMMDD format)      |
 
  {{< /tab >}}

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
| **notify**      | add/delete the email address you wish to receive alerts on<br>must be used in conjunction with the action parameter      |
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
| **notify**      | add/delete the email address you wish to receive alerts on<br>must be used in conjunction with the action parameter      |
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
