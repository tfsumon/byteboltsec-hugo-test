---
title: "Documentation"
description: "API Documentation"
draft: false
layout: "elements"
---

### API Documentation
**Combo** - focuses on combo lists that contain plaintext credentials<br>
**Creds** - focuses on 3rd party breaches that contain credentials<br>
**Darkweb** - focuses on company data being leaked or sold on the darkweb<br>
**Monitor** - manages monitored assets<br>
**Radar** - focuses on domains that threat actors have announced as targets<br>
**Sessions** - focuses on session tokens sniffed from malware infected devices<br>
**Stealer** - focuses on credentials sniffed from malware infected devices

{{< tabs >}}
  {{< tab "Combo API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /combo      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | accepts a domain name or email address      | 
| **update**      | return the Unix timestamp the combo database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output* :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| fnd      | The date (in YYYYMMDD or unixtime format) the credentials were found      |
| fle      | The file name the credential was found in      |
| pwd      | The password used to authenticate      |
| src      | The target URL or IP that the victim authenticated to      |
| usr      | The username used to authenticate      |
\* Output dependant on which values were present in the original leak.

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | ignore@example.com             |

  {{< /tab >}}

  {{< tab "Creds API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /creds      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **attr**      | display a short description of the breach      |
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **hash**      |  return a 0 if the password is in hashed format and a 1 if the password has been decrypted     |
| **import**      | display the date the breach was imported into the database      |
| **json**      |  display results in JSON format (default is CSV)     |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **list**      | list the breaches and dates they were imported      |
| **limit**      | increase / decrease the number of records returned in the response      |
| **p**      | results are limited to 500 credentials per request (by default)<br>when an HTTP 206 response status is returned, pagination is required to view the remaining results.<br>p is a numeric page value      |
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

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | ignore@example.com             |

  {{< /tab >}}

  {{< tab "Darkweb API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /darkweb      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **range**      | range - accepts a date range in YYYYMMDD-YYYYMMDD format (60 day limit)     | 
| **search**      | search term - accepts a domain name      | 
| **update**      | return the Unix timestamp the darkweb database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>)      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| src      | A URL containing data associated with the target      |
| site      | The name of the threat actor      |
| data      | The domain name associated with the victim      |
| found      | The date the data was indexed (in YYYYMMDD format)      |

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | example.com             |
 
  {{< /tab >}}
  {{< tab "Monitor API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /monitor      | 

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
| api.breachsense.com      | /radar      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name      | 
| **update**      | return the Unix timestamp the radar database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| data      | The domain name associated with the victim      |
| found      | The date the data was indexed (in YYYYMMDD format)      |
| src      | A URL containing data associated with the target      |

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | example.com             |
  
  {{< /tab >}}
  {{< tab "Sessions API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /sessions      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name, email address or IP address     | 
| **update**      | return the Unix timestamp the sessions database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| dom      | The domain name associated with the victim      |
| expires      | The date (in unixtime) that the cookie is set to expire      |
| fnd      | The date the data was found (in YYYYMMDD format)      |
| name      | The name of the cookie      |
| path      | The cookie path     |
| val      | The value of the cookie      |

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | example.com             |
 
  {{< /tab >}}

  {{< tab "Stealer API" >}}
### Endpoint :
| Domain Name           | Path             | 
| :-----------: | :-------------:     |:-------------:    | :-----:|
| api.breachsense.com      | /stealer      | 

### Supported Parameters :
| Parameter           | Description             |
| :-----------: | :-------------:     |:-------------:   
| **date**      | only display results newer that this value. Value set in YYYYMMDD or unixtime formats      |
| **lic**      | license key<br>can be sent via a GET parameter or request header      |
| **r**      | return the number of remaining monthly queries allowed      |
| **search**      | search term - accepts a domain name, email address or IP address     | 
| **update**      | return the Unix timestamp the stealer database was last updated      |
| **unixtime**      | display the import date in unixtime (aliases: <i>unix</i>,<i>epoch</i>      |

### Output* :
| JSON Key           | Value             |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| fle      | The file name the credential was found in      |
| fnd      | The date the credential was found      |
| hid      | The hardware ID of the infected device     |
| iip      | The IP address of the infected device      |
| inf      | The date the machine was infected on (in unixtime)      |
| mal      | The type of malware infected on the device      |
| pwd      | The password used to authenticate      |
| src      | The target URL or IP that the victim authenticated to      |
| usr      | The username used to authenticate      |
\* Output dependant on which values were present in the original leak.

### Test Data :
|   Parameter                 |   String                |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| search            | ignore@example.com             |
 
  {{< /tab >}}

{{< /tabs >}}
