---
date: "2024-04-16"
title: "Data Breach Examples: 15 Biggest Data Breaches Explained"
image: "images/blog/data-breach-examples.png"
description: "Discover the 15 biggest data breach examples that occured recently. Learn what were the biggest data breaches lately."
author: "Breachsense"
tags: ["Data Breach", "Case Studies"]
h1: "The 15 biggest data breach examples in history"
intro1: "FACT: Data breaches continue to make headlines in 2024"
intro2: "Millions of sensitive records are [leaked or stolen daily](https://www.breachsense.com/breaches/), and cybercriminals exploit this data to commit fraud, steal data from their victims' networks, and launch ransomware attacks."
intro3: "Learning from past incidents is one of the most effective strategies to increase your organization's cyber defenses. For that reason, we've compiled a list of the biggest data breach examples in recent history."
intro4: "Before we begin, a quick disclaimer: The list was calculated based on the estimated number of records exposed, accounts affected, or users impacted."
draft: false
---
## 1. CAM4

**Date:** March 2020  
**Impact:** 10.88 billion accounts

The cam4.com is a popular adult streaming site based in Ireland and owned by Granity Entertainment. Despite being the largest breach in history, Cam4 wasn't actually hacked. The mistake made wasn't particularly unique either. The attackers found an exposed ElasticSearch database that didn't require authentication. Seven terabytes of data leaked, which included names, sexual orientations, chat scripts, payment logs, device information, geolocations, usernames, and hashed passwords. The Shodan search result showing the exposed ElasticSearch database is shown below:

![Cam4 data breach example](../cam4.png)

Granity Entertainment took the database offline within 30 minutes of being notified. Despite the large amount of data that was publicly available, there's no evidence that the leaked data was indeed exploited. Criminals often exploit this type of data for blackmail, sextortion, and credential-stuffing attacks. Having an updated asset inventory is essential to ensure you haven't exposed any sensitive servers to the internet.

## 2. Yahoo

**Date:** August 2013  
**Impact:** 3 billion accounts

When Yahoo initially disclosed the breach, the news of 1 billion compromised users seemed staggering. Ten months later, they updated that number to 3 billion accounts, meaning every Yahoo account that existed at the time. The attackers were inside Yahoo's network for three years before being discovered. It then took almost four years for Yahoo to complete the investigation into the breach. Of course, this attack is completely separate from their 2014 breach that impacted 500 million accounts.

The breach couldn't have come at a worse time for Yahoo. At the time, they recently announced an agreement to sell their main business to Verizon for $4.8bn. After disclosing the breach, the sale price was reduced by $3 million. Despite the large number of accounts affected, other incidents like the [Equifax breach](https://www.breachsense.com/blog/equifax-data-breach/), which only impacted 145.5 million people, might have had a greater negative impact overall due to the highly sensitive data involved.

## 3.Alibaba (Taobao)

**Date:** November 2019  
**Impact:** 1.1 billion accounts

A software developer at a consulting company providing services to Alibaba's [Taobao shopping website](https://world.taobao.com/) scraped over 1.1 billion accounts, including usernames and phone numbers. The custom web crawler developed for this purpose scraped accounts for eight months until Alibaba noticed the activity. While the developer didn't access passwords, the scraped phone numbers have more significant consequences in China than in other parts of the world.

In China, people are required to register with valid identification using their real name before obtaining a mobile phone number. By law, mobile numbers are considered personal information. Mobile phone numbers are often used to sign up for Chinese internet services. Knowing a person’s cellphone number makes it easier for malicious users to track down Chinese user's social media accounts and other personal information.

## 4. Aadhaar

**Date:** September 2019  
**Impact:** 1.1 billion accounts

Aadhaar is a 12-digit unique ID number issued to citizens in India. The numbers are treated as private information, similar to social security numbers. More than 90% of the Indian population have Aadhaar numbers. People use their Aadhaar number to open a bank account, buy a SIM card, sign up for utilities, apply for welfare, and vote. Enrolling in Aadhaar isn't mandatory, but without it, Indian citizens can't access basic government services. In 2019, Indane, a state-owned gas and energy company, left an insecure API with access to the Aadhaar database online. Anyone could access the API without authentication. The leak exposed names, Aadhaar numbers, addresses, bank details, and services they are signed up to.

The Indian government department responsible for the database, The Unique Identification Authority (UIDAI), initially [denied the leak](https://twitter.com/UIDAI/status/977549605733679104). However, the security researcher who found the API endpoint noted that the API used a hardcoded token for access control. When translated, the token ironically was set to "INDAADHAARSECURESTATUS". This allowed anyone to query Aadhaar numbers against the database without any further authentication. Furthermore, the API had no rate limiting in place, allowing attackers to rotate numeric combinations enumerating all available Aadhaar IDs. Malicious users sold the data for approximately USD $7 on WhatsApp. Despite many notifications of the issue, it took the UIDAI months to take the API offline.

![Aadhaar data breach example](../Aadhaar.png)

## 5. LinkedIn

**Date:** June 2021  
**Impact:** 700 million accounts

A hacker using the moniker TomLiner advertised the sale of around 700 million LinkedIn users on a popular hacking forum. This represents approximately 90% of LinkedIn's total user base at the time. The same user leaked 500 million LinkedIn records three months earlier. The attacker exploited LinkedIn's API to collect the data. LinkedIn initially claimed this was not a breach and no private information was collected. However, the scraped data included full names, email addresses, phone numbers, physical locations, and more. Although no financial data or passwords were leaked, there was certainly enough information for identity theft and phishing attacks.

## 6. Siba Weibo

**Date:** March 2020  
**Impact:** 538 million accounts

A malicious user obtained part of Sina Weibo's database, impacting 538 million out of the 600 million total users they had at the time. Sina Weibo (now known as Weibo) is one of China's largest microblogging sites. Personal details data like names, usernames, genders, locations, and phone numbers were exposed. Passwords were not included, which is perhaps why the attacker sold the data for only ¥1,799 (USD 250). The ad selling the Weibo data is shown below:

![Weibo data breach example](../weibo.png)

Weibo initially [downplayed](https://weibo.com/2735327001/IzCMJioqC?from=page_1006062735327001_profile&wvr=6&mod=weibotime&type=comment) the severity of the attack. They said that no sensitive data like passwords were disclosed and that the information gathered was from publicly available data via a service that used phone numbers to locate Weibo accounts belonging to friends. However, they eventually admitted that if passwords were reused on other accounts, the data exposed could be used to associate accounts with those passwords.

## 7. Facebook

**Date:** April 2019  
**Impact:** 533 million accounts

Approximately 533 million Facebook users' data was leaked, including profile names, ID numbers, email addresses, and phone numbers. The attacker scraped people’s Facebook profiles using a version of the contact importer function available before September 2019. The function was designed to help people use their contact lists to find friends to connect with. The function allowed users to upload a large set of phone numbers to see which ones matched Facebook users. Once the matched Facebook users were identified, malicious users could query a set of user profiles to obtain information about those users.

Facebook didn't notify users about the leak because, at the time, there were [multiple](https://www.upguard.com/breaches/facebook-user-data-leak) [breaches](https://techcrunch.com/2019/09/04/facebook-phone-numbers-exposed/) [leaking](https://www.wired.com/story/cambridge-analytica-facebook-privacy-awakening/) [data](https://www.wired.com/story/how-facebook-hackers-compromised-30-million-accounts/) taken from Facebook itself as well as other companies circulating on various hacker forums. The vulnerability was [patched](https://twitter.com/Liz_Shepherd/status/1378398417450377222) in August of that year. While that specific avenue of attack was closed, Facebook recommends updating the [settings](https://www.facebook.com/help/131297846947406) that control who Facebook can suggest your profile to based on your email address or phone number.

## 8. Marriott (Starwood)

**Date: November 2018**  
**Impact:** 500 million accounts

According to the company statement: “On September 8, 2018, Marriott received an alert from an internal security tool regarding an attempt to access the Starwood guest reservation database. Marriott learned that there had been unauthorized access to the Starwood network since 2014. Marriott recently discovered that an unauthorized party had copied and encrypted information, and took steps towards removing it. On November 19, 2018, Marriott was able to decrypt the information and determined that the contents were from the Starwood guest reservation database."

The breached data included guests' names, phone numbers, dates of birth, genders, mailing addresses, email addresses, passport numbers, Starwood Preferred Guest account details, arrival and departure information, reservation dates, and communication preferences. Credit card details were included for a limited number of victims but were encrypted. Similar to the [Equifax breach](https://www.breachsense.com/blog/equifax-data-breach/)in 2017, the leaked data was never exploited or sold on the dark web. The attack was assumed to be perpetrated by the Chinese government in an attempt to build a dossier on American citizens.

## 9. Yahoo!

**Date:** 2014  
**Impact:** 500 million accounts

In a separate data breach from the 2013 security incident, hackers obtained data from over 500 million user accounts. The breached data included account names, telephone numbers, birth dates, email addresses, and hashed passwords. In some cases, security questions and answers were leaked as well. The attackers used manufactured session cookies to bypass authentication. The majority of the leaked passwords were hashed using bcrypt, which is quite difficult to crack. A small portion used the md5 hashing algorithm, which is quite easy to reverse into a plaintext password.

In July 2016, a seller known as "Peace\_of\_Mind" put up the data for sale on a popular hacking forum. Two years after the breach, On September 2022, 2016, Yahoo! reported the breach and said that it believed the breach was committed by [state-sponsored hackers](https://www.washingtonpost.com/news/the-switch/wp/2016/09/22/report-yahoo-to-confirm-data-breach-affecting-hundreds-of-millions-of-accounts/ "Cyberwarfare"). Yahoo! learned of the attack in July 2016, during the same month it announced its deal to sell to Verizon. The two breaches negatively affected their share price.

## 10. Adult Friend Finder

**Date:** October 2016  
**Impact:** 412 million accounts

Six databases owned by FriendFinder Networks were hacked. The breach included 20 years' worth of historical data from Adultfriendfinder.com, Cams.com, Penthouse.com, and Stripshow.com. iCams.com, as well as an unknown domain. The breach included over 15 million "deleted" accounts that weren't actually removed from the databases. The leaked data included usernames, email addresses, and SHA1 hashed passwords.

While we don't know who was behind the attack, the incident occurred around the same time that a hacker who goes by the handle Revolver disclosed a local file inclusion vulnerability on the AdultFriendFinder website. The flaw allows malicious users to execute code on the web server if exploited. An example shared on Twitter is shown below:

![AdultFriendFinder data breach example](../AFF.jpg)

## 11. MySpace

**Date:** August 2013  
**Impact:** 360 million accounts

Shortly before the Memorial Day weekend in 2016, MySpace disclosed a breach that exposed usernames, email addresses, and SHA1 hashed passwords. However, the hash only included the first ten characters of the password and converted that to lowercase before hashing. Furthermore, no salt was used in the hash. The accounts were both leaked on LeakedSource.com and sold on the dark web market, The Real Deal, for six bitcoins, which was around USD 3000 at the time.

While the exact date of the breach is unknown, it appears that the data was from approximately 2008. The company [stated](https://myspace.com/pages/blog) that accounts created before June 11, 2013, on the old Myspace platform were affected. MySpace invalidated all passwords from those accounts and required users to reset their passwords to regain access.

## 12. NetEase

**Date:** October 2015  
**Impact:** 235 million user accounts

NetEase is a Chinese Internet technology company that provides various online services, including content, communications, and commerce. At the time, they operated one of China's most popular free email services. Attackers exploited unknown vulnerabilities in their 163.com and 126.com web applications and gained access to millions of email addresses and plaintext passwords. A dark web vendor who went by the handle “DoubleFlag” initially sold the data, which eventually became publicly available. While NetEase has denied the breach, numerous victims have [confirmed](https://haveibeenpwned.com/PwnedWebsites#NetEase) the password they used was in the breach.

## 13. Experian (Court Ventures)

**Date:** October 2013  
**Impact:** 200 million personal records

Hieu Minh Ngo, a Vietnamese national, posed as a private investigator operating out of Singapore. Ngo purchased consumer records from Court Ventures and paid via cash wire transfers sent from a Singaporean bank. Court Ventures had an agreement with another company called US Info Search, whereby each company had access to the other's data. Ngo used his contract with Court Ventures to siphon data from US Info Search's database. The data included Social Security Numbers, dates of birth, phone numbers, addresses, previous addresses, email addresses as well as other sensitive data. By Ngo's arrest, his identity theft business had profited around USD 2 million and attracted more than 1,300 customers.

## 14. LinkedIn

**Date:** June 2012  
**Impact:** 164 million users

After the initial breach in 2012, LinkedIn estimated that a hacker stole 6.5 million user's login credentials. In 2016, LinkedIn [admitted](https://www.linkedin.com/blog/member/trust-and-safety/protecting-our-members) that it severely underestimated the number of affected users. The passwords were hashed using SHA1 without a salt. The data was put up for sale on a Russian hacker forum for a mere five bitcoins (around USD 2000 at that time). LinkedIn invalidated passwords for any account created prior to the 2012 breach​ that hadn’t updated​ their password since.

## 15. Dubsmash

**Date:** December 2018  
**Impact:** 162 million user accounts

Dubsmash, a popular video messaging service, suffered a data breach that leaked usernames, email addresses, PBKDF2 hashed passwords, geolocations, spoken languages, and phone numbers. The data was put up for sale along with 15 other hacked apps on the Dream Market. Although Dubsmash acknowledged the breach, they never disclosed how the breach happened. In the following year, Reddit purchased Dubsmash and subsequently shut it down.
