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
  {{< /tab >}}

{{< /tabs >}}
