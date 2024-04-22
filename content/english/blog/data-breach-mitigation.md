---
date: "2024-04-13"
title: "Data Breach Mitigation: Five Strategies to Take Right Now"
image: "images/blog/data-breach-mitigation.png"
description: "Discover how to mitigate data breach. Learn five strategies that will help you mitigate the risk of a data breach." 
author: "Breachsense"
h1: "Data breach mitigation"
intro1: "Do you have a plan for when your organization suffers a data breach? Looking for advice on what needs to be in your incident response plan?"
intro2: "According to a study by [IT Governance](https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-2023), over 8.2 billion records were breached in 2023 just in [third-party data breaches](https://www.breachsense.com/blog/third-party-data-breach/) alone."
intro3: "According to the IBM [Cost of a Data Breach 2023 Report](https://www.ibm.com/reports/data-breach), the average data breach cost reached a record high of USD 4.45 million."
intro4: "No matter how you do the math, data breaches are expensive, and the longer it takes to mitigate them, the more expensive they become."
intro5: "In this article, you'll learn the five steps you need to take to mitigate a data breach."
draft: false
---
## What Is Data Breach Mitigation?

First, let\'s define the term data breach. A data breach is a security incident where sensitive data has been accessed, modified, or deleted without authorization. Data breach mitigation is the process of identifying and remediating the security vulnerabilities that allow unauthorized access to sensitive data. The goal of data breach mitigation is to minimize the impact and damage caused by the breach.

## How can data breaches be prevented?

Before we discuss what to do *after* a breach, let's talk about how to prevent one in the first place.

According to the [Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/T34b/reports/2023-data-breach-investigations-report-dbir.pdf), the three primary initial attack vectors to access an organization are stolen credentials, phishing attacks, and exploitation of vulnerabilities.

The report also found that 86% of breaches involve the use of stolen credentials.

Credentials are typically stolen when:

- A third-party service is compromised, leaking their customers' usernames &amp; passwords.
- A user's system (including mobile devices) is compromised with infostealer malware that logs their plaintext passwords before they're encrypted.
- A phishing site tricks a user into entering their credentials by pretending to be a different, legitimate site.
- A [credential stuffing](https://www.breachsense.com/blog/credential-stuffing-attack/) or brute force attack is used against a service to enumerate valid credentials.

To mitigate the risk of stolen credentials, organizations should mandate the use of password managers. The password manager should generate all passwords for users to prevent them from creating weak passwords. At the very minimum, using a password manager will ensure that employees don't reuse the same password in multiple apps. This prevents bad actors from using a password from one breached service to access the victim's account on another.

Enable MFA (multi-factor authentication) for all [remote access](https://www.breachsense.com/blog/remote-working-data-protection/) to business systems. MFA (or at least two-factor authentication) should be required for all users when accessing sensitive data or performing privileged actions.

Ensure you have an updated asset inventory and that all operating systems, browsers, and plugins are fully patched.

Finally, security teams need real-time visibility into their employees', customers', and vendors' breached credentials. This enables the team to reset the stolen credentials before criminals exploit them.

## Five steps to mitigate the risk after a data breach

You just learned that your organization suffered a data breach. Whether the attackers exfiltrated your database, exploited a remote code execution bug, or simply just logged into your VPN via leaked employee credentials, you're probably wondering what to do next.

Although the specifics are highly case-dependent, here's a list of five steps that provide a framework for data breach mitigation:
### 1. Identification and Analysis 

  The first step is to identify the breach as quickly as possible. Having early detection systems, like an IDS (Intrusion Detection System) or SIEM (Security Information and Event Management) in place makes identifying unusual or malicious activity easier.

  Once the breach has been identified, the next step is identifying which systems were affected, the type of data compromised, and the number of records exposed. Understanding the underlying cause and the attack methods used in the breach will help guide the containment and remediation efforts. The incident response team needs to determine the type of data compromised (personal data, social security numbers, credit card details, financial information, sensitive corporate data, etc.) to assess the severity of the breach, the potential impact, and possible notification requirements later on.   

  As part of the analysis step, preserve all evidence of the breach. Do not reboot any systems before a complete image (including memory dumps) has been taken. The forensics analysis team will examine the logs, systems, and network traffic to trace the attacker’s steps and identify the entry point.

### 2. Containment

  Once the breach is identified, immediate action is needed to contain it. This means stopping the unauthorized access or data exfiltration. Isolate the affected systems to prevent the spread of the breach. This can mean completely disconnecting the systems from the internet, disabling remote access, or simply segregating parts of the network. In some cases, it may be necessary to temporarily turn off certain services or operations to prevent the attacker's lateral movement.

  All passwords should be changed immediately, especially those with administrative privileges or access to sensitive systems. Reset security tokens and terminate session tokens where necessary. Review all access and security controls and ensure that only essential personnel can access critical systems and data.

  Remember to document every action taken during the containment stage. This documentation will be vital for post-incident analysis and for demonstrating compliance with regulatory requirements.

      
### 3. Remediation and Recovery 

  After containing the breach, the security team needs to determine the root cause of the breach. This includes the initial attack vector, possible vulnerabilities exploited, and the sequence of events that led to the breach. Once the complete picture is clearer, the team can begin the remediation process. This may involve removing malware, resetting credentials, or patching security vulnerabilities that were exploited.   
      
  Next, the team should restore infected systems and data from backups. Remember to verify that the backups were not compromised as well. Before bringing systems back online, validate the integrity of the data. Ensure that all systems are fully patched and properly secured. It's a good idea to determine your security posture by bringing in an external company to run a penetration test on the network before bringing it back online.

### 4. Notification and Communication 

  Based on your jurisdiction, it's important to understand your legal and regulatory requirements for breach notifications. This includes knowing who to notify (e.g., authorities, affected individuals), the timeline for notification, and the specific information that must be disclosed. Having a communication plan in place beforehand will make things easier in the heat of the moment. The plan should define the key messages, the modes of communication (e.g., email, letter, press release), and the spokesperson for the organization.  
      
  Provide clear, concise, and jargon-free information to help the victims understand what happened, what data was involved, the potential risks, and what they can do to protect themselves. Acknowledge the impact on those affected and take responsibility for the breach. Avoid any appearance of deflecting blame. It's important to keep on providing updates whenever more information becomes available. Creating a dedicated webpage or FAQ section addressing the breach can help with this.

### 5. Post-Incident Analysis and Improvement  

  After the immediate response, it's important to prepare a detailed incident report. This should include a timeline of events, the nature of the breach, the data affected, how the breach was discovered, steps taken to respond, and the impact on the organization and individuals.

  Next, conduct a post-incident analysis. This involves reviewing how the breach occurred, the effectiveness of the response, and identifying any lessons learned. This should also include an analysis of the effectiveness of your current security toolset, the speed of the response, and how well the containment and remediation measures worked. Determine if new solutions or upgrades are required to better protect against future breaches.

Based on the analysis, the security team should update its security policies and procedures. This includes revising incident response plans, access control policies, and data management practices to address any issues found. Implement regular testing to help ensure that both the network is secure and that the updated incident response plan is effective in case another breach happens. Remember that security is an ongoing process.

**RECOMMENDED READING:** [5-step Data Breach Response Checklist](https://www.breachsense.com/blog/data-breach-response-checklist/)

## Conclusion

Having an incident response plan prepared well before a breach is crucial. We've outlined five steps you should take after you've been breached. While knowing what to do is helpful, prevention is even better.

Leaked credentials are one of the primary ways threat actors gain access to their victims. Why break in when you can simply log in.

If your team needs ongoing visibility into your organization's leaked credentials, check out Breachsense, a powerful [data breach monitoring platform](https://www.breachsense.com/data-breach-monitoring/) that enables your security team to mitigate your breached data before it’s exploited.
