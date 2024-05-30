---
date: "2024-04-14"
title: "The Definitive Guide to Creating a Ransomware Response Plan"
image: "images/blog/ransomware-attack-response-plan.webp"
description: "Discover the best practices for responding to a ransomware attack. Learn the six steps to mitigate the impact of a ransomware attack."
author: "Breachsense"
tags: ["Ransomware", "Incident Response"]
h1: "The Definitive Guide to Creating a Ransomware Response Plan"
intro1: "FACT: There's been a 53% increase in ransomware attacks compared to last year. ([GuidePoint](https://www.guidepointsecurity.com/blog/grit-ransomware-report-february-2024/))"
intro2: "Over the last 12 months, the number of active ransomware gangs has surged by 58%."
intro3: "According to a [Veeam](https://www.veeam.com/ransomware-trends-report-2023) study, 85% of organizations were affected by at least one ransomware attack over the last 12 months."
intro4: "While 80% of organizations paid the ransom, 25% could still not recover their data even after paying."
intro5: "Clearly, having a comprehensive response plan in place is critical."
intro6: "In this article, you'll learn everything you need to know about how to respond effectively to a ransomware attack."
draft: false
---
## Why Create a Ransomware Response Plan?

A ransomware response plan provides an organized, systematic approach for quickly detecting, analyzing, containing, and recovering from a ransomware attack to minimize downtime and data loss. Having a well-defined incident response process allows organizations to make pragmatic decisions during an extremely high-pressure situation and ensures all stakeholders understand their roles and responsibilities.

## Who Needs a Ransomware Response Plan?

Every organization, regardless of size or industry, that relies on computer systems and data to operate needs to have a detailed ransomware [response plan](https://www.breachsense.com/blog/data-breach-response-checklist/) in place. Ransomware attacks are a growing threat that can cripple an organization's IT infrastructure, lead to costly downtime, data loss, and compliance issues. Certain industries like healthcare, finance, and critical infrastructure have an acute need for ransomware preparedness due to regulatory requirements and the criticality of their operations. It's important to note that even with strong preventative security controls, no organization is immune to ransomware.

## Key Components of a Ransomware Response Plan

Here are the six steps you need to take when responding to a ransomware attack:

### 1. Detection and Analysis
  - **Isolate Impacted Systems:** Determine which systems are impacted and immediately isolate them. If several subnets are infected, consider taking down those networks at the switch level.
  - **Priority Isolation:** Prioritize isolating critical systems essential to daily operations.
  - **Power Down Devices:** As a last resort, if you're unable to disconnect infected devices from the network, power them down to prevent further spread. Note this step will erase critical evidence required to investigate the incident and should only be used as a last resort.
  - **Cloud Resources:** Take snapshots of infected systems and volumes for forensic investigation.
  - **Plan Communications:**Bad actors may monitor your organization's activity and communications. Use out-of-band channels (e.g. mobile phones) to coordinate activities to help prevent the threat actors from compromising your efforts.

### 2. Triage Impacted Systems
  - **Identify Critical Systems:** Identify and prioritize restoring critical systems on a clean network. Having an up-to-date asset inventory and a predefined critical asset list will make this step easier in the event of an incident.
  - **Examine IDS/IPS Systems:** Use antivirus, EDR, intrusion detection and prevention systems, and system logs to identify additional systems or [malware involved in the attack](https://www.breachsense.com/blog/malware-incident-response/).
  - **Precursor “Dropper” Malware:** Droppers are often the first stage in multi-stage attack campaigns. Look for evidence of "dropper" malware, such as Dridex, Emotet, Hancitor, Smoke Loader, or Bazar Loader. It's critical to identify all malicious software installed before rebuilding a compromised machine in order to prevent reinfections

### 3. Initiate Threat Hunting
  - **Check for Signs of Compromise:** Look for newly created AD accounts, accounts with escalated privileges, anomalous logins or login attempts, endpoint modifications, changes to boot configurations, the presence of adversarial toolsets (e.g. Cobalt Strike, Mimikatz, NTDSutil.exe, etc.), and unexpected software usage.
  - **Look for commonly abused Windows tools:** Bad actors often exploit built-in Windows tools to avoid detection. Look for anomalous usage in the following tools: Powershell, Windows Script Host (WSH), Task Scheduler, BITSAdmin, CertUtil, MSBuild, WMIC (Windows Management Instrumentation Command-line), Netsh.
  - **Look for Data Exfiltration:** Check for signs of data being exfiltrated using tools like Rclone, Rsync, MegaSync, SCP, or FTP/SFTP. In addition, some attackers deploy web shells or use HTTP POST requests and even DNS to exfiltrate data.
  - **Look for cloud configuration changes:** Verify the configurations and security groups/rules within the cloud environment and IAM settings. Check for unauthorized changes to cloud accounts or policies. This includes unexpected new user accounts, changes to existing user roles, or modifications to security settings.

### 4. Reporting and Notification
  - **Engage Internal and External Teams:** Follow the notification procedure detailed in your ransomware [incident response plan](https://www.breachsense.com/blog/data-breach-response/). Engaging the right teams and relevant stakeholders can help you manage communications while mitigating the potential impact.
  - **Report to Authorities:** Depending on your jurisdiction and legal requirements, report the incident and request assistance from the relevant authorities.
  - **Use notification templates:** Leverage notification templates for each audience that needs to be notified (e.g., employees, vendors, customers, etc.). The templates should include an explanation of what happened, the type of data involved, the implications of the breach, what you’re doing in response, actions recipients can take to protect themselves, and contact information for further questions.

### 5. Containment and Eradication:
  - **Preserve Evidence:** Take system images and memory captures of affected devices. Preserve evidence to prevent loss or tampering. This includes relevant logs, "precursor" malware binaries, and any IOCs (Indicators of Compromise). These include C2 (command and control) IP addresses contacted, file changes, new or altered registry keys, network traffic patterns, web browser history, suspicious email attachments, running processes, memory dumps, and newly created or modified user accounts.
  - **Disable Ransomware Execution:** Kill or disable running ransomware binaries. Delete associated registry values and files.
  - **Identify and Contain Breach:** Identify systems and accounts involved in the breach. Contain any associated systems to prevent further unauthorized access.
  - **Disable Remote Access:** Secure the network from any unauthorized credential-based authentication. This includes VPNs, remote access servers, SSO resources and any public-facing assets.
  - **Identify Persistent Access Mechanisms:** Look for backdoors, web shells, scheduled tasks, registry changes, and unusual user account activities. These mechanisms can include anything from misused legitimate remote access tools and altered system configurations to unauthorized SSH keys and sophisticated living-off-the-land style tactics used to avoid detection.
  - **Research the malware:** Consult with law enforcement and security researchers to determine if there are any known encryption flaws or decryption tools available for the specific strain of ransomware affecting your system.
  - **Rebuild Systems:** Use preconfigured standard images or infrastructure as code templates to rebuild systems. Ensure that all systems are fully patched and are running the latest stable software versions.
  - **Reset Passwords:** After the environment is clean, issue password resets for any associated accounts. Terminate session tokens within any relevant web applications. Monitor the affected accounts for any suspicious activity following the password resets.
  - **Identify Server-Side Data Encryption:** Here are some steps to quickly identify server-side data encryption: 
      - **Check File Extensions**:
        - Look for unusual file extensions appended to files on the server. Many ransomware variants add specific extensions to encrypted files (e.g., .enc, .locked, .crypt, .ransom).
        - Perform a quick file system scan to identify files with these extensions.
      - **Access File Contents**:
        - Attempt to open various files from different server directories. Encrypted files will often fail to open with their standard applications or will display as corrupted or unreadable data.
      - **Review File Names and Icons**:
        - Check for any renamed files or changes in file icons that appear unusual or out of place. Some ransomware changes file icons to alert the user of the encryption.
      - **Monitor System and Application Logs**:
        - Look for error messages in system and application logs that indicate problems opening files, reading data, or unusual activity that could relate to encryption processes running in the background.
      - **Check for Ransom Notes**:
        - Search for ransom notes, which are typically text or HTML files left by the ransomware in directories containing encrypted files. These notes often contain details about the encryption and demands for payment.
      - **Analyze Disk and Network Activity**:
        - Monitor unexpected spikes in disk activity, such as extensive read/write operations, which could indicate that files are being encrypted.
        - Check network traffic for any unusual outbound connections or data flows, which might indicate data exfiltration or communication with command and control (C2) servers.
      - **Utilize Security and Forensic Tools**:
        - Deploy anti-ransomware tools or forensic utilities designed to detect encryption activity. These tools can help identify encryption algorithms or the presence of known ransomware signatures.
      - **Review User and Admin Activity**:
        - Check for any unauthorized or unusual login sessions, especially with administrative privileges. Unauthorized access can sometimes precede server-side encryption.

### 6. Recovery and Post-Incident Activity
  - **Reconnect and Restore:** Reconnect systems and restore data from offline, encrypted backups, prioritizing critical services first. Ensure that you don't reinfect a clean system during the recovery process.
  - **Document Lessons Learned:** Document the timeline of the attack, including initial entry points, affected systems, and the nature of the data compromised. Additionally, record all response actions taken, such as containment measures, communications with stakeholders, ransom demands, ransom payments, and negotiations held, as well as lessons learned. This should be used as the basis to improve your security defenses and future response strategies.

## How Breachsense Can Help

Stolen credentials play a significant role in ransomware attacks.

Last year, there was a significant increase in cybercriminals exploiting valid user accounts to access corporate networks.

This has become the preferred method of attack due to the ease of access and the difficulty in detection.

In fact, according to the [IBM Cost of a Data Breach report](https://www.ibm.com/reports/data-breach), breaches caused by stolen credentials took roughly 11 months to detect and recover from.

This was the longest response lifecycle compared to any other infection vector.

If your team needs visibility into your organization's leaked credentials, [book a demo](https://www.breachsense.com/book-demo/) to learn how Breachsense can help.
