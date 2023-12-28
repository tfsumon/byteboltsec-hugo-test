---
date: "2023-06-25"
title: "Equifax Data Breach - a case study"
image: "images/blog/equifax-case-study.png"
description: "The Equifax data breach case study covers how the breach occurred, the company's response, and the costs associated with the breach." 
author: "Breachsense"
h1: "Equifax data breach:  a case study"
intro1: "In 2017, Equifax suffered a massive data breach often considered one of the most significant and devastating cybersecurity incidents in history."
intro2: "As one of the major credit reporting agencies in the United States, Equifax held sensitive information on more than 800 million individuals and 88 million businesses worldwide."
intro3: "The breach exposed the personal data of over than 40 percent of the population of the United States (approximately 145 million people). The leaked data included names, birth dates, physical addresses as well as Social Security Numbers. A small subset of victims (around 200,000 people) had their credit card numbers exposed as well."
intro4: "In this case study, we'll explore how the Equifax data breach happened, the company's response, the [costs associated with the breach](https://www.breachsense.com/blog/cost-of-a-data-breach/), and lessons learned."
draft: false
---
## How Did the Equifax Data Breach Happen?
Based on a [report](https://www.warren.senate.gov/imo/media/doc/2018.09.06%20GAO%20Equifax%20report.pdf) from the U.S. General Accounting office, the Equifax [data breach was caused](https://www.breachsense.com/blog/data-breach-causes/) by a combination of issues. On March 10, 2017, initial access to their network was gained by exploiting the [CVE-2017-5638](https://nvd.nist.gov/vuln/detail/CVE-2017-5638) vulnerability on their online dispute portal. 

This flaw let malicious users send code within a specially crafted HTTP *content-type* header which was subsequently executed on the Apache Struts server. Although a patch existed for this vulnerability it was not applied in time.

On May 13, 2017, the attackers pivoted to other servers within the network due to a lack of proper network segmentation. Once on the other machines, the attackers found plaintext credentials which gave them access to even more servers.

During the period of May - July 2017, the data theives gained access to multiple databases containing sensitive information on hundreds of millions of people. When exfiltrating data, a very common technique among cybercriminals is to encrypt data in transit in order to make it more difficult for their victim to discover the attack. 

While Equifax had network monitoring tools in place that were supposed to decrypt, analyze and then re-encrypt the data, the monitoring tools didn't work because of an expired TLS certificate. In other words, because Equifax didn't renew their cert, encrypted traffic wasn't being inspected. As a result, they had zero visibility into the type of data that was leaving their network.

On July 29, 2017, the expired certificate was renewed, at which point the administrators immediately noticed the suspicious activity. At this point the breach was discovered and an internal investigation was started. On September 8, 2017, more than a month into the investigation, Equifax publicized the breach. 

During the interim month of August, several Equifax executives sold company stock. This led to suspicions that they sold their stock ahead of an impending price decline due to the breach. In the end, only the (former) [chief information officer was charged with insider trading](https://www.sec.gov/news/press-release/2018-40).

![Equifax how it happened illustration](../equifax-how-it-happened.png)

## Who attacked Equifax
Despite the large amount of data stolen, it never leaked onto the darkweb. Another clue is that despite the initial access gained on March 10, 2017, it wasn't until May 13, 2017, over two months later, that the attackers pivoted and started exfiltrating data.

Investigators believe that the first attack was carried out by initial access brokers exploiting the recent Struts vulnerability. Eventually they sold their access to more experienced attackers. In what the GAO report referred to as a “separate incident”, a different [threat actor](https://www.breachsense.com/ransomware-gangs/) gained access to the online dispute portal on May 13, 2017 and used a number of techniques to retrieve the PII residing on other systems and exfiltrated that data.

On February 10, 2020, the United Stated Department of Justice [charged four members of the Chinese military with the attack](https://www.justice.gov/opa/pr/chinese-military-personnel-charged-computer-fraud-economic-espionage-and-wire-fraud-hacking). Why would the Chinese government be interested in the data? In 2015, the [U.S. Office of Personnel Management](https://en.wikipedia.org/wiki/Office_of_Personnel_Management_data_breach) was hacked leaking over 22.1 million records. In 2018, [ Marriott's Starwood hotel chain](https://www.reuters.com/article/uk-marriott-intnl-cyber-idUKKCN1NZ1AG/) was breached leaking approximately 500 million records as well. In both of these incidents, the highly sensitive data was never sold or traded on the dark web. This led investigators to connect the three breaches. 

The attacks are assumed to be an attempt by the Chinese government to build a dossier on millions of Americans with the intent to learn about U.S. government officials and intelligence officers. Specifically, the data leaked would shed light on individuals who could be manipulated due to financial trouble or blackmail attempts.

## Equifax's response to the data breach
Equifax's response to the breach was widely criticized for several reasons. Initially they created a standalone domain titled *equifaxsecurity2017.com*, to host information for the people affected by the breach. The domain name looked very suspicious as it's the same style that's often used in phishing attacks. To make matters worse, Equifax social media accounts pointed users to a domain titled h*securityequifax2017.com* by mistake.

What perhaps outraged people the most was that the original language used on the site required victims to [ waive their lawsuit rights ](https://www.businessinsider.com/equifax-help-site-mandatory-arbitration-clause-waive-right-to-class-action-lawsuit-2017-9)in order to check whether they were affected. This was eventually updated. However, it's certainly a good lesson in how not to respond to an incident.

Eventually a new domain, with yet another confusing name, was created where you can check if you were affected:

[https://eligibility.equifaxbreachsettlement.com/en/Eligibility](https://eligibility.equifaxbreachsettlement.com/en/Eligibility).

FWIW, this website is run by the FTC, not Equifax.
## Equifax data breach costs
Equifax had a $125 million cybersecurity insurance policy, with a $7.5 million deductible at the time of the breach. "We have received the maximum reimbursement under the insurance policy of $125 million, all of which was received prior to 2019," they said.

In 2019, Equifax reached a settelment with the FTC. While the breach was entirely preventable, the incident cost them [$1.38 billion](https://www.darkreading.com/cyberattacks-data-breaches/2017-data-breach-will-cost-equifax-at-least-1-38-billion). The agreement reached required Equifax to set aside a minimum of $380.5 million for breach compensation and spend another $1 billion on improving its information security practices. As a direct result of the breach, the CEO, CSO and CIO all parted ways with the company. Then in June 2019, Moody’s downgraded Equifax's financial rating due to the escalating litigation and regulatory costs associated with the breach.

## The Equifax data breach settlement
The settlement reached offered free credit monitoring or up to $125 cash payment. Claimants who submitted a valid claim for credit monitoring services received an email with information on how to activate credit monitoring services with Experian. Victims were also eligible for at least 7 years of free identity restoration services to help them with the effects of identity theft and fraud.

Victims had the option of claiming out-of-pocket losses (excluding losses of money and time spent freezing or unfreezing credit reports or purchasing credit monitoring or identity theft protection) by providing documentation but depending on the number of claims filed, the amount paid out is normally reduced.

After the breach, U.S. lawmakers passed a law allowing consumers to freeze their credit reports at no cost. Until then, in some states, consumers had to pay for a credit freeze, which restricts access to a person’s credit file. A credit freeze makes it harder for identity thieves to open accounts in someone else’s name which can damage their credit score.

![Equifax settlement website](../equifax-settlement.png)
## Lessons learned
- **Focus on the basics**: The breach was successful due to an unpatched vulnerability and an expired security certificate. Despite having both a patching process in place and security tools to detect the data exfiltration, neither were implemented and managed properly.
- **Segment your network**: The attackers were able to pivot and access additional services due to a lack of network segmentation. By isolating systems you reduce the attack surface making containing a breach significantly easier.
- **Implement Zero Trust:** Access to sensitive data should only be given to those who need it. By it's very nature, Zero Trust architecture requires aggresive monitoring which not only prevents privilage escalation issues but also enables security teams to identify unusual data access or exfiltration attempts quickly.


