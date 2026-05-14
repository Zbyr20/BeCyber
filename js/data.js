// BeCyber müfredat verisi
// Yapı: Sertifika -> Domain -> Konu -> Alt konu
//
// Associate / Professional / Expert müfredatları resmi Cisco sınav
// blueprint'leri ile senkronize edildi (verbatim):
//   - Associate    : 200-201 CBROPS v1.2 (2024-10-01)
//   - Professional : 350-701 SCOR  v1.1
//   - Expert       : CCIE Security v6.1 lab blueprint
// Foundational, NetAcad eğitim içeriğidir; resmi bir sınav blueprint'i
// olmadığı için kurs taslağı olarak bırakıldı.
//
// Konu numaraları ve metinleri Cisco'nun blueprint'indeki numaralandırma
// ve ifadelerle birebir aynıdır. Alt madde içermeyen konularda, konunun
// kendisi tek bir wiki sayfası (alt konu) olarak ele alınır.

const CERTIFICATIONS = [
  {
    id: "foundational",
    title: "Foundational",
    subtitle: "Temel Siber Güvenlik",
    code: "NetAcad",
    level: 0,
    color: "#9aa0a6",
    gradient: "linear-gradient(135deg, #2a2a2e, #3d3d44)",
    icon: "🌱",
    description: "Siber güvenliğe giriş. Hiç bilgi gerekmez, buradan başlanır.",
    badge: "Başlangıç",
    domains: [
      {
        id: "world-of-cybersec",
        title: "1. Siber Güvenlik Dünyası",
        topics: [
          {
            id: "what-is-cybersec",
            title: "Siber Güvenlik Nedir?",
            subtopics: [
              { id: "definition", title: "Tanım ve Kapsam" },
              { id: "why-matters", title: "Neden Önemli?" },
              { id: "career-paths", title: "Kariyer Yolları" }
            ]
          },
          {
            id: "cyber-threats",
            title: "Siber Tehditler",
            subtopics: [
              { id: "malware-types", title: "Zararlı Yazılım Türleri" },
              { id: "social-engineering", title: "Sosyal Mühendislik" },
              { id: "attack-types", title: "Saldırı Türleri" }
            ]
          },
          {
            id: "cyber-attacks",
            title: "Siber Saldırılar",
            subtopics: [
              { id: "dos-ddos", title: "DoS ve DDoS Saldırıları" },
              { id: "mitm", title: "Man-in-the-Middle" },
              { id: "injection", title: "Injection Saldırıları" }
            ]
          }
        ]
      },
      {
        id: "org-data",
        title: "2. Kurumsal Veriler",
        topics: [
          {
            id: "data-types",
            title: "Veri Türleri ve Sınıflandırma",
            subtopics: [
              { id: "pii", title: "Kişisel Tanımlayıcı Bilgi (PII)" },
              { id: "phi", title: "Korunan Sağlık Bilgisi (PHI)" },
              { id: "classified", title: "Gizli Veriler" }
            ]
          },
          {
            id: "security-measures",
            title: "Güvenlik Önlemleri",
            subtopics: [
              { id: "cia-triad-f", title: "CIA Üçgeni" },
              { id: "authentication", title: "Kimlik Doğrulama" },
              { id: "access-control-f", title: "Erişim Kontrolü" }
            ]
          }
        ]
      },
      {
        id: "protecting-yourself",
        title: "3. Kendinizi Koruyun",
        topics: [
          {
            id: "personal-data",
            title: "Kişisel Veri Güvenliği",
            subtopics: [
              { id: "password-tips", title: "Güçlü Parola Oluşturma" },
              { id: "2fa", title: "İki Faktörlü Doğrulama" },
              { id: "privacy-settings", title: "Gizlilik Ayarları" }
            ]
          },
          {
            id: "org-security",
            title: "Kurumsal Güvenlik",
            subtopics: [
              { id: "policies", title: "Güvenlik Politikaları" },
              { id: "incident-response-f", title: "Olay Müdahalesi" },
              { id: "security-culture", title: "Güvenlik Kültürü" }
            ]
          }
        ]
      },
      {
        id: "cybersec-principles",
        title: "4. Siber Güvenlik İlkeleri",
        topics: [
          {
            id: "states-of-data",
            title: "Veri Durumları",
            subtopics: [
              { id: "data-at-rest", title: "Durağan Veri" },
              { id: "data-in-transit", title: "İletim Halindeki Veri" },
              { id: "data-in-process", title: "İşlem Halindeki Veri" }
            ]
          },
          {
            id: "cybersec-cube",
            title: "Siber Güvenlik Küpü (McCumber)",
            subtopics: [
              { id: "cube-dimensions", title: "Küp Boyutları" },
              { id: "security-principles", title: "Güvenlik İlkeleri" }
            ]
          }
        ]
      },
      {
        id: "network-security-f",
        title: "5. Ağ Güvenliği",
        topics: [
          {
            id: "network-protocols-f",
            title: "Ağ Protokolleri",
            subtopics: [
              { id: "tcp-ip", title: "TCP/IP Modeli" },
              { id: "common-protocols", title: "Yaygın Protokoller" },
              { id: "protocol-attacks", title: "Protokol Saldırıları" }
            ]
          },
          {
            id: "network-devices",
            title: "Ağ Cihazları",
            subtopics: [
              { id: "routers-switches", title: "Router ve Switch'ler" },
              { id: "firewalls", title: "Güvenlik Duvarları" },
              { id: "ids-ips", title: "IDS/IPS Sistemleri" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "associate",
    title: "Associate",
    subtitle: "CyberOps Associate",
    code: "200-201 CBROPS v1.2",
    level: 1,
    color: "#5eb3c4",
    gradient: "linear-gradient(135deg, #173a45, #1f5563)",
    icon: "🔵",
    description: "SOC analist kariyerine hazırlık. Resmi 200-201 CBROPS v1.2 blueprint'i.",
    badge: "Associate",
    domains: [
      {
        id: "cbr-d1",
        title: "1.0 Security Concepts (%20)",
        topics: [
          {
            id: "cbr-1-1",
            title: "1.1 Describe the CIA triad",
            subtopics: [
              { id: "cbr-1-1-x", title: "Describe the CIA triad" }
            ]
          },
          {
            id: "cbr-1-2",
            title: "1.2 Compare security deployments",
            subtopics: [
              { id: "cbr-1-2-a", title: "Network, endpoint, and application security systems" },
              { id: "cbr-1-2-b", title: "Agentless and agent-based protections" },
              { id: "cbr-1-2-c", title: "Legacy antivirus and antimalware" },
              { id: "cbr-1-2-d", title: "SIEM, SOAR, and log management" },
              { id: "cbr-1-2-e", title: "Container and virtual environments" },
              { id: "cbr-1-2-f", title: "Cloud security deployments" }
            ]
          },
          {
            id: "cbr-1-3",
            title: "1.3 Describe security terms",
            subtopics: [
              { id: "cbr-1-3-a", title: "Threat intelligence (TI)" },
              { id: "cbr-1-3-b", title: "Threat hunting" },
              { id: "cbr-1-3-c", title: "Malware analysis" },
              { id: "cbr-1-3-d", title: "Threat actor" },
              { id: "cbr-1-3-e", title: "Run book automation (RBA)" },
              { id: "cbr-1-3-f", title: "Reverse engineering" },
              { id: "cbr-1-3-g", title: "Sliding window anomaly detection" },
              { id: "cbr-1-3-h", title: "Threat modeling" },
              { id: "cbr-1-3-i", title: "DevSecOps" }
            ]
          },
          {
            id: "cbr-1-4",
            title: "1.4 Compare security concepts",
            subtopics: [
              { id: "cbr-1-4-a", title: "Risk (risk scoring/risk weighting, risk reduction, risk assessment)" },
              { id: "cbr-1-4-b", title: "Threat" },
              { id: "cbr-1-4-c", title: "Vulnerability" },
              { id: "cbr-1-4-d", title: "Exploit" }
            ]
          },
          {
            id: "cbr-1-5",
            title: "1.5 Describe the principles of the defense-in-depth strategy",
            subtopics: [
              { id: "cbr-1-5-x", title: "Describe the principles of the defense-in-depth strategy" }
            ]
          },
          {
            id: "cbr-1-6",
            title: "1.6 Compare access control models",
            subtopics: [
              { id: "cbr-1-6-a", title: "Discretionary access control" },
              { id: "cbr-1-6-b", title: "Mandatory access control" },
              { id: "cbr-1-6-c", title: "Nondiscretionary access control" },
              { id: "cbr-1-6-d", title: "Authentication, authorization, accounting" },
              { id: "cbr-1-6-e", title: "Rule-based access control" },
              { id: "cbr-1-6-f", title: "Time-based access control" },
              { id: "cbr-1-6-g", title: "Role-based access control" },
              { id: "cbr-1-6-h", title: "Attribute-based access control" }
            ]
          },
          {
            id: "cbr-1-7",
            title: "1.7 Describe terms as defined in CVSS",
            subtopics: [
              { id: "cbr-1-7-a", title: "Attack vector" },
              { id: "cbr-1-7-b", title: "Attack complexity" },
              { id: "cbr-1-7-c", title: "Privileges required" },
              { id: "cbr-1-7-d", title: "User interaction" },
              { id: "cbr-1-7-e", title: "Scope" },
              { id: "cbr-1-7-f", title: "Temporal metrics" },
              { id: "cbr-1-7-g", title: "Environmental metrics" }
            ]
          },
          {
            id: "cbr-1-8",
            title: "1.8 Identify the challenges of data visibility (network, host, and cloud) in detection",
            subtopics: [
              { id: "cbr-1-8-x", title: "Identify the challenges of data visibility (network, host, and cloud) in detection" }
            ]
          },
          {
            id: "cbr-1-9",
            title: "1.9 Identify potential data loss from traffic profiles",
            subtopics: [
              { id: "cbr-1-9-x", title: "Identify potential data loss from traffic profiles" }
            ]
          },
          {
            id: "cbr-1-10",
            title: "1.10 Interpret the 5-tuple approach to isolate a compromised host in a grouped set of logs",
            subtopics: [
              { id: "cbr-1-10-x", title: "Interpret the 5-tuple approach to isolate a compromised host in a grouped set of logs" }
            ]
          },
          {
            id: "cbr-1-11",
            title: "1.11 Compare rule-based detection vs. behavioral and statistical detection",
            subtopics: [
              { id: "cbr-1-11-x", title: "Compare rule-based detection vs. behavioral and statistical detection" }
            ]
          }
        ]
      },
      {
        id: "cbr-d2",
        title: "2.0 Security Monitoring (%25)",
        topics: [
          {
            id: "cbr-2-1",
            title: "2.1 Compare attack surface and vulnerability",
            subtopics: [
              { id: "cbr-2-1-x", title: "Compare attack surface and vulnerability" }
            ]
          },
          {
            id: "cbr-2-2",
            title: "2.2 Identify the types of data provided by these technologies",
            subtopics: [
              { id: "cbr-2-2-a", title: "TCP dump" },
              { id: "cbr-2-2-b", title: "NetFlow" },
              { id: "cbr-2-2-c", title: "Next-gen firewall" },
              { id: "cbr-2-2-d", title: "Traditional stateful firewall" },
              { id: "cbr-2-2-e", title: "Application visibility and control" },
              { id: "cbr-2-2-f", title: "Web content filtering" },
              { id: "cbr-2-2-g", title: "Email content filtering" }
            ]
          },
          {
            id: "cbr-2-3",
            title: "2.3 Describe the impact of these technologies on data visibility",
            subtopics: [
              { id: "cbr-2-3-a", title: "Access control list" },
              { id: "cbr-2-3-b", title: "NAT/PAT" },
              { id: "cbr-2-3-c", title: "Tunneling" },
              { id: "cbr-2-3-d", title: "TOR" },
              { id: "cbr-2-3-e", title: "Encryption" },
              { id: "cbr-2-3-f", title: "P2P" },
              { id: "cbr-2-3-g", title: "Encapsulation" },
              { id: "cbr-2-3-h", title: "Load balancing" }
            ]
          },
          {
            id: "cbr-2-4",
            title: "2.4 Describe the uses of these data types in security monitoring",
            subtopics: [
              { id: "cbr-2-4-a", title: "Full packet capture" },
              { id: "cbr-2-4-b", title: "Session data" },
              { id: "cbr-2-4-c", title: "Transaction data" },
              { id: "cbr-2-4-d", title: "Statistical data" },
              { id: "cbr-2-4-e", title: "Metadata" },
              { id: "cbr-2-4-f", title: "Alert data" }
            ]
          },
          {
            id: "cbr-2-5",
            title: "2.5 Describe network attacks, such as protocol-based, denial of service, distributed denial of service, and man-in-the-middle",
            subtopics: [
              { id: "cbr-2-5-x", title: "Describe network attacks, such as protocol-based, denial of service, distributed denial of service, and man-in-the-middle" }
            ]
          },
          {
            id: "cbr-2-6",
            title: "2.6 Describe web application attacks, such as SQL injection, command injections, and cross-site scripting",
            subtopics: [
              { id: "cbr-2-6-x", title: "Describe web application attacks, such as SQL injection, command injections, and cross-site scripting" }
            ]
          },
          {
            id: "cbr-2-7",
            title: "2.7 Describe social engineering attacks (manual and generative AI)",
            subtopics: [
              { id: "cbr-2-7-x", title: "Describe social engineering attacks (manual and generative AI)" }
            ]
          },
          {
            id: "cbr-2-8",
            title: "2.8 Describe endpoint-based attacks, such as buffer overflows, command and control (C2), malware, and ransomware",
            subtopics: [
              { id: "cbr-2-8-x", title: "Describe endpoint-based attacks, such as buffer overflows, command and control (C2), malware, and ransomware" }
            ]
          },
          {
            id: "cbr-2-9",
            title: "2.9 Describe evasion and obfuscation techniques, such as tunneling, encryption, and proxies",
            subtopics: [
              { id: "cbr-2-9-x", title: "Describe evasion and obfuscation techniques, such as tunneling, encryption, and proxies" }
            ]
          },
          {
            id: "cbr-2-10",
            title: "2.10 Describe the impact of certificates on security (includes PKI, public/private crossing the network, asymmetric/symmetric)",
            subtopics: [
              { id: "cbr-2-10-x", title: "Describe the impact of certificates on security (includes PKI, public/private crossing the network, asymmetric/symmetric)" }
            ]
          },
          {
            id: "cbr-2-11",
            title: "2.11 Identify the certificate components in a given scenario",
            subtopics: [
              { id: "cbr-2-11-a", title: "Cipher-suite" },
              { id: "cbr-2-11-b", title: "X.509 certificates" },
              { id: "cbr-2-11-c", title: "Key exchange" },
              { id: "cbr-2-11-d", title: "Protocol version" },
              { id: "cbr-2-11-e", title: "PKCS" }
            ]
          }
        ]
      },
      {
        id: "cbr-d3",
        title: "3.0 Host-Based Analysis (%20)",
        topics: [
          {
            id: "cbr-3-1",
            title: "3.1 Describe the functionality of these endpoint technologies in regard to security monitoring utilizing rules, signatures, and predictive AI",
            subtopics: [
              { id: "cbr-3-1-a", title: "Host-based intrusion detection" },
              { id: "cbr-3-1-b", title: "Antimalware and antivirus" },
              { id: "cbr-3-1-c", title: "Host-based firewall" }
            ]
          },
          {
            id: "cbr-3-2",
            title: "3.2 Identify components of an operating system (such as Windows and Linux) in a given scenario",
            subtopics: [
              { id: "cbr-3-2-x", title: "Identify components of an operating system (such as Windows and Linux) in a given scenario" }
            ]
          },
          {
            id: "cbr-3-3",
            title: "3.3 Describe the role of attribution in an investigation",
            subtopics: [
              { id: "cbr-3-3-a", title: "Assets" },
              { id: "cbr-3-3-b", title: "Threat actor" },
              { id: "cbr-3-3-c", title: "Indicators of compromise" },
              { id: "cbr-3-3-d", title: "Indicators of attack" },
              { id: "cbr-3-3-e", title: "Chain of custody" }
            ]
          },
          {
            id: "cbr-3-4",
            title: "3.4 Identify type of evidence used based on provided logs",
            subtopics: [
              { id: "cbr-3-4-a", title: "Best evidence" },
              { id: "cbr-3-4-b", title: "Corroborative evidence" },
              { id: "cbr-3-4-c", title: "Indirect evidence" }
            ]
          },
          {
            id: "cbr-3-5",
            title: "3.5 Interpret operating system, SIEM, SOAR platform, application, or command line logs to identify an event",
            subtopics: [
              { id: "cbr-3-5-x", title: "Interpret operating system, SIEM, SOAR platform, application, or command line logs to identify an event" }
            ]
          },
          {
            id: "cbr-3-6",
            title: "3.6 Interpret the output report of malware analysis tools such as a detonation chamber or sandbox",
            subtopics: [
              { id: "cbr-3-6-a", title: "Hashes" },
              { id: "cbr-3-6-b", title: "URLs" },
              { id: "cbr-3-6-c", title: "Systems, events, and networking" }
            ]
          }
        ]
      },
      {
        id: "cbr-d4",
        title: "4.0 Network Intrusion Analysis (%20)",
        topics: [
          {
            id: "cbr-4-1",
            title: "4.1 Map the provided events to source technologies",
            subtopics: [
              { id: "cbr-4-1-a", title: "IDS/IPS" },
              { id: "cbr-4-1-b", title: "Firewall" },
              { id: "cbr-4-1-c", title: "Network application control" },
              { id: "cbr-4-1-d", title: "Proxy logs" },
              { id: "cbr-4-1-e", title: "Antivirus" },
              { id: "cbr-4-1-f", title: "Transaction data (NetFlow)" }
            ]
          },
          {
            id: "cbr-4-2",
            title: "4.2 Compare impact and no impact for these items",
            subtopics: [
              { id: "cbr-4-2-a", title: "False positive" },
              { id: "cbr-4-2-b", title: "False negative" },
              { id: "cbr-4-2-c", title: "True positive" },
              { id: "cbr-4-2-d", title: "True negative" },
              { id: "cbr-4-2-e", title: "Benign" }
            ]
          },
          {
            id: "cbr-4-3",
            title: "4.3 Compare deep packet inspection with packet filtering and stateful firewall operation",
            subtopics: [
              { id: "cbr-4-3-x", title: "Compare deep packet inspection with packet filtering and stateful firewall operation" }
            ]
          },
          {
            id: "cbr-4-4",
            title: "4.4 Compare inline traffic interrogation and taps or traffic monitoring",
            subtopics: [
              { id: "cbr-4-4-x", title: "Compare inline traffic interrogation and taps or traffic monitoring" }
            ]
          },
          {
            id: "cbr-4-5",
            title: "4.5 Compare the characteristics of data obtained from taps or traffic monitoring and transactional data (NetFlow) in the analysis of network traffic",
            subtopics: [
              { id: "cbr-4-5-x", title: "Compare the characteristics of data obtained from taps or traffic monitoring and transactional data (NetFlow) in the analysis of network traffic" }
            ]
          },
          {
            id: "cbr-4-6",
            title: "4.6 Extract files from a TCP stream when given a PCAP file and Wireshark",
            subtopics: [
              { id: "cbr-4-6-x", title: "Extract files from a TCP stream when given a PCAP file and Wireshark" }
            ]
          },
          {
            id: "cbr-4-7",
            title: "4.7 Identify key elements in an intrusion from a given PCAP file",
            subtopics: [
              { id: "cbr-4-7-a", title: "Source address" },
              { id: "cbr-4-7-b", title: "Destination address" },
              { id: "cbr-4-7-c", title: "Source port" },
              { id: "cbr-4-7-d", title: "Destination port" },
              { id: "cbr-4-7-e", title: "Protocols" },
              { id: "cbr-4-7-f", title: "Payloads" }
            ]
          },
          {
            id: "cbr-4-8",
            title: "4.8 Interpret the fields in protocol headers as related to intrusion analysis",
            subtopics: [
              { id: "cbr-4-8-a", title: "Ethernet frame" },
              { id: "cbr-4-8-b", title: "IPv4" },
              { id: "cbr-4-8-c", title: "IPv6" },
              { id: "cbr-4-8-d", title: "TCP" },
              { id: "cbr-4-8-e", title: "UDP" },
              { id: "cbr-4-8-f", title: "ICMP" },
              { id: "cbr-4-8-g", title: "DNS" },
              { id: "cbr-4-8-h", title: "SMTP/POP3/IMAP" },
              { id: "cbr-4-8-i", title: "HTTP/HTTPS/HTTP2" },
              { id: "cbr-4-8-j", title: "ARP" }
            ]
          },
          {
            id: "cbr-4-9",
            title: "4.9 Interpret common artifact elements from an event to identify an alert",
            subtopics: [
              { id: "cbr-4-9-a", title: "IP address (source / destination)" },
              { id: "cbr-4-9-b", title: "Client and server port identity" },
              { id: "cbr-4-9-c", title: "Process (file or registry)" },
              { id: "cbr-4-9-d", title: "System (API calls)" },
              { id: "cbr-4-9-e", title: "Hashes" },
              { id: "cbr-4-9-f", title: "URI / URL" }
            ]
          },
          {
            id: "cbr-4-10",
            title: "4.10 Interpret basic regular expressions",
            subtopics: [
              { id: "cbr-4-10-x", title: "Interpret basic regular expressions" }
            ]
          }
        ]
      },
      {
        id: "cbr-d5",
        title: "5.0 Security Policies and Procedures (%15)",
        topics: [
          {
            id: "cbr-5-1",
            title: "5.1 Describe management concepts",
            subtopics: [
              { id: "cbr-5-1-a", title: "Asset management" },
              { id: "cbr-5-1-b", title: "Configuration management" },
              { id: "cbr-5-1-c", title: "Mobile device management" },
              { id: "cbr-5-1-d", title: "Patch management" },
              { id: "cbr-5-1-e", title: "Vulnerability management" }
            ]
          },
          {
            id: "cbr-5-2",
            title: "5.2 Describe the elements in an incident response plan as stated in NIST.SP800-61",
            subtopics: [
              { id: "cbr-5-2-x", title: "Describe the elements in an incident response plan as stated in NIST.SP800-61" }
            ]
          },
          {
            id: "cbr-5-3",
            title: "5.3 Apply the incident handling process such as NIST.SP800-61 to an event",
            subtopics: [
              { id: "cbr-5-3-x", title: "Apply the incident handling process such as NIST.SP800-61 to an event" }
            ]
          },
          {
            id: "cbr-5-4",
            title: "5.4 Map elements to these steps of analysis based on the NIST.SP800-61",
            subtopics: [
              { id: "cbr-5-4-a", title: "Preparation" },
              { id: "cbr-5-4-b", title: "Detection and analysis" },
              { id: "cbr-5-4-c", title: "Containment, eradication, and recovery" },
              { id: "cbr-5-4-d", title: "Post-incident analysis (lessons learned)" }
            ]
          },
          {
            id: "cbr-5-5",
            title: "5.5 Map the organization stakeholders against the NIST IR categories (CMMC, NIST.SP800-61)",
            subtopics: [
              { id: "cbr-5-5-a", title: "Preparation" },
              { id: "cbr-5-5-b", title: "Detection and analysis" },
              { id: "cbr-5-5-c", title: "Containment, eradication, and recovery" },
              { id: "cbr-5-5-d", title: "Post-incident analysis (lessons learned)" }
            ]
          },
          {
            id: "cbr-5-6",
            title: "5.6 Describe concepts as documented in NIST.SP800-86",
            subtopics: [
              { id: "cbr-5-6-a", title: "Evidence collection order" },
              { id: "cbr-5-6-b", title: "Data integrity" },
              { id: "cbr-5-6-c", title: "Data preservation" },
              { id: "cbr-5-6-d", title: "Volatile data collection" }
            ]
          },
          {
            id: "cbr-5-7",
            title: "5.7 Identify these elements used for network profiling",
            subtopics: [
              { id: "cbr-5-7-a", title: "Total throughput" },
              { id: "cbr-5-7-b", title: "Session duration" },
              { id: "cbr-5-7-c", title: "Ports used" },
              { id: "cbr-5-7-d", title: "Critical asset address space" }
            ]
          },
          {
            id: "cbr-5-8",
            title: "5.8 Identify these elements used for server profiling",
            subtopics: [
              { id: "cbr-5-8-a", title: "Listening ports" },
              { id: "cbr-5-8-b", title: "Logged in users/service accounts" },
              { id: "cbr-5-8-c", title: "Running processes" },
              { id: "cbr-5-8-d", title: "Running tasks" },
              { id: "cbr-5-8-e", title: "Applications" }
            ]
          },
          {
            id: "cbr-5-9",
            title: "5.9 Identify protected data in a network",
            subtopics: [
              { id: "cbr-5-9-a", title: "PII" },
              { id: "cbr-5-9-b", title: "PSI" },
              { id: "cbr-5-9-c", title: "PHI" },
              { id: "cbr-5-9-d", title: "Intellectual property" }
            ]
          },
          {
            id: "cbr-5-10",
            title: "5.10 Classify intrusion events into categories as defined by security models, such as Cyber Kill Chain Model and Diamond Model of Intrusion",
            subtopics: [
              { id: "cbr-5-10-x", title: "Classify intrusion events into categories as defined by security models, such as Cyber Kill Chain Model and Diamond Model of Intrusion" }
            ]
          },
          {
            id: "cbr-5-11",
            title: "5.11 Describe the relationship of SOC metrics to scope analysis (time to detect, time to contain, time to respond, time to control)",
            subtopics: [
              { id: "cbr-5-11-x", title: "Describe the relationship of SOC metrics to scope analysis (time to detect, time to contain, time to respond, time to control)" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "professional",
    title: "Professional",
    subtitle: "CCNP Security Core",
    code: "350-701 SCOR v1.1",
    level: 2,
    color: "#a98fd6",
    gradient: "linear-gradient(135deg, #2e1f47, #4a3475)",
    icon: "🟣",
    description: "İleri düzey çekirdek güvenlik teknolojileri. Resmi 350-701 SCOR v1.1 blueprint'i.",
    badge: "Professional",
    domains: [
      {
        id: "scor-d1",
        title: "1.0 Security Concepts (%25)",
        topics: [
          {
            id: "scor-1-1",
            title: "1.1 Explain common threats against on-premises, hybrid, and cloud environments",
            subtopics: [
              { id: "scor-1-1-a", title: "On-premises: viruses, trojans, DoS/DDoS attacks, phishing, rootkits, man-in-the-middle attacks, SQL injection, cross-site scripting, malware" },
              { id: "scor-1-1-b", title: "Cloud: data breaches, insecure APIs, DoS/DDoS, compromised credentials" }
            ]
          },
          {
            id: "scor-1-2",
            title: "1.2 Compare common security vulnerabilities such as software bugs, weak and/or hardcoded passwords, OWASP top ten, missing encryption ciphers, buffer overflow, path traversal, cross-site scripting/forgery",
            subtopics: [
              { id: "scor-1-2-x", title: "Compare common security vulnerabilities such as software bugs, weak and/or hardcoded passwords, OWASP top ten, missing encryption ciphers, buffer overflow, path traversal, cross-site scripting/forgery" }
            ]
          },
          {
            id: "scor-1-3",
            title: "1.3 Describe functions of the cryptography components such as hashing, encryption, PKI, SSL, IPsec, NAT-T IPv4 for IPsec, preshared key, and certificate-based authorization",
            subtopics: [
              { id: "scor-1-3-x", title: "Describe functions of the cryptography components such as hashing, encryption, PKI, SSL, IPsec, NAT-T IPv4 for IPsec, preshared key, and certificate-based authorization" }
            ]
          },
          {
            id: "scor-1-4",
            title: "1.4 Compare site-to-site and remote access VPN deployment types and components such as virtual tunnel interfaces, standards-based IPsec, DMVPN, FlexVPN, and Cisco Secure Client including high availability considerations",
            subtopics: [
              { id: "scor-1-4-x", title: "Compare site-to-site and remote access VPN deployment types and components such as virtual tunnel interfaces, standards-based IPsec, DMVPN, FlexVPN, and Cisco Secure Client including high availability considerations" }
            ]
          },
          {
            id: "scor-1-5",
            title: "1.5 Describe security intelligence authoring, sharing, and consumption",
            subtopics: [
              { id: "scor-1-5-x", title: "Describe security intelligence authoring, sharing, and consumption" }
            ]
          },
          {
            id: "scor-1-6",
            title: "1.6 Describe the controls used to protect against phishing and social engineering attacks",
            subtopics: [
              { id: "scor-1-6-x", title: "Describe the controls used to protect against phishing and social engineering attacks" }
            ]
          },
          {
            id: "scor-1-7",
            title: "1.7 Explain North Bound and South Bound APIs in the SDN architecture",
            subtopics: [
              { id: "scor-1-7-x", title: "Explain North Bound and South Bound APIs in the SDN architecture" }
            ]
          },
          {
            id: "scor-1-8",
            title: "1.8 Explain Cisco DNA Center APIs for network provisioning, optimization, monitoring, and troubleshooting",
            subtopics: [
              { id: "scor-1-8-x", title: "Explain Cisco DNA Center APIs for network provisioning, optimization, monitoring, and troubleshooting" }
            ]
          },
          {
            id: "scor-1-9",
            title: "1.9 Interpret basic Python scripts used to call Cisco Security appliances APIs",
            subtopics: [
              { id: "scor-1-9-x", title: "Interpret basic Python scripts used to call Cisco Security appliances APIs" }
            ]
          }
        ]
      },
      {
        id: "scor-d2",
        title: "2.0 Network Security (%20)",
        topics: [
          {
            id: "scor-2-1",
            title: "2.1 Compare network security solutions that provide intrusion prevention and firewall capabilities",
            subtopics: [
              { id: "scor-2-1-x", title: "Compare network security solutions that provide intrusion prevention and firewall capabilities" }
            ]
          },
          {
            id: "scor-2-2",
            title: "2.2 Describe deployment models of network security solutions and architectures that provide intrusion prevention and firewall capabilities",
            subtopics: [
              { id: "scor-2-2-x", title: "Describe deployment models of network security solutions and architectures that provide intrusion prevention and firewall capabilities" }
            ]
          },
          {
            id: "scor-2-3",
            title: "2.3 Describe the components, capabilities, and benefits of NetFlow and Flexible NetFlow records",
            subtopics: [
              { id: "scor-2-3-x", title: "Describe the components, capabilities, and benefits of NetFlow and Flexible NetFlow records" }
            ]
          },
          {
            id: "scor-2-4",
            title: "2.4 Configure and verify network infrastructure security methods",
            subtopics: [
              { id: "scor-2-4-a", title: "Layer 2 methods (network segmentation using VLANs; Layer 2 and port security; DHCP snooping; Dynamic ARP inspection; storm control; PVLANs to segregate network traffic; and defenses against MAC, ARP, VLAN hopping, STP, and DHCP rogue attacks)" },
              { id: "scor-2-4-b", title: "Device hardening of network infrastructure security devices (control plane, data plane, and management plane)" }
            ]
          },
          {
            id: "scor-2-5",
            title: "2.5 Implement segmentation, access control policies, AVC, URL filtering, malware protection, and intrusion policies",
            subtopics: [
              { id: "scor-2-5-x", title: "Implement segmentation, access control policies, AVC, URL filtering, malware protection, and intrusion policies" }
            ]
          },
          {
            id: "scor-2-6",
            title: "2.6 Implement management options for network security solutions (single vs. multidevice manager, in-band vs. out-of-band, cloud vs. on-premises)",
            subtopics: [
              { id: "scor-2-6-x", title: "Implement management options for network security solutions (single vs. multidevice manager, in-band vs. out-of-band, cloud vs. on-premises)" }
            ]
          },
          {
            id: "scor-2-7",
            title: "2.7 Configure AAA for device and network access such as TACACS+ and RADIUS",
            subtopics: [
              { id: "scor-2-7-x", title: "Configure AAA for device and network access such as TACACS+ and RADIUS" }
            ]
          },
          {
            id: "scor-2-8",
            title: "2.8 Configure secure network management of perimeter security and infrastructure devices such as SNMPv3, NetConf, RestConf, APIs, secure syslog, and NTP with authentication",
            subtopics: [
              { id: "scor-2-8-x", title: "Configure secure network management of perimeter security and infrastructure devices such as SNMPv3, NetConf, RestConf, APIs, secure syslog, and NTP with authentication" }
            ]
          },
          {
            id: "scor-2-9",
            title: "2.9 Configure and verify site-to-site and remote access VPN",
            subtopics: [
              { id: "scor-2-9-a", title: "Site-to-site VPN using Cisco routers and IOS" },
              { id: "scor-2-9-b", title: "Remote access VPN using Cisco AnyConnect Secure Mobility client" },
              { id: "scor-2-9-c", title: "Debug commands to view IPsec tunnel establishment and troubleshooting" }
            ]
          }
        ]
      },
      {
        id: "scor-d3",
        title: "3.0 Securing the Cloud (%15)",
        topics: [
          {
            id: "scor-3-1",
            title: "3.1 Identify security solutions for cloud environments",
            subtopics: [
              { id: "scor-3-1-a", title: "Public, private, hybrid, and community clouds" },
              { id: "scor-3-1-b", title: "Cloud service models: SaaS, PaaS, IaaS (NIST 800-145)" }
            ]
          },
          {
            id: "scor-3-2",
            title: "3.2 Compare security responsibility for the different cloud service models",
            subtopics: [
              { id: "scor-3-2-a", title: "Patch management in the cloud" },
              { id: "scor-3-2-b", title: "Security assessment in the cloud" }
            ]
          },
          {
            id: "scor-3-3",
            title: "3.3 Describe the concept of DevSecOps (CI/CD pipeline, container orchestration, and secure software development)",
            subtopics: [
              { id: "scor-3-3-x", title: "Describe the concept of DevSecOps (CI/CD pipeline, container orchestration, and secure software development)" }
            ]
          },
          {
            id: "scor-3-4",
            title: "3.4 Implement application and data security in cloud environments",
            subtopics: [
              { id: "scor-3-4-x", title: "Implement application and data security in cloud environments" }
            ]
          },
          {
            id: "scor-3-5",
            title: "3.5 Identify security capabilities, deployment models, and policy management to secure the cloud",
            subtopics: [
              { id: "scor-3-5-x", title: "Identify security capabilities, deployment models, and policy management to secure the cloud" }
            ]
          },
          {
            id: "scor-3-6",
            title: "3.6 Configure cloud logging and monitoring methodologies",
            subtopics: [
              { id: "scor-3-6-x", title: "Configure cloud logging and monitoring methodologies" }
            ]
          },
          {
            id: "scor-3-7",
            title: "3.7 Describe application and workload security concepts",
            subtopics: [
              { id: "scor-3-7-x", title: "Describe application and workload security concepts" }
            ]
          }
        ]
      },
      {
        id: "scor-d4",
        title: "4.0 Content Security (%15)",
        topics: [
          {
            id: "scor-4-1",
            title: "4.1 Implement traffic redirection and capture methods for web proxy",
            subtopics: [
              { id: "scor-4-1-x", title: "Implement traffic redirection and capture methods for web proxy" }
            ]
          },
          {
            id: "scor-4-2",
            title: "4.2 Describe web proxy identity and authentication including transparent user identification",
            subtopics: [
              { id: "scor-4-2-x", title: "Describe web proxy identity and authentication including transparent user identification" }
            ]
          },
          {
            id: "scor-4-3",
            title: "4.3 Compare the components, capabilities, and benefits of on-premises, hybrid, and cloud-based email and web solutions (Cisco Secure Email Gateway, Cisco Secure Email Cloud Gateway, and Cisco Secure Web Appliance)",
            subtopics: [
              { id: "scor-4-3-x", title: "Compare the components, capabilities, and benefits of on-premises, hybrid, and cloud-based email and web solutions (Cisco Secure Email Gateway, Cisco Secure Email Cloud Gateway, and Cisco Secure Web Appliance)" }
            ]
          },
          {
            id: "scor-4-4",
            title: "4.4 Configure and verify web and email security deployment methods to protect on-premises, hybrid, and remote users",
            subtopics: [
              { id: "scor-4-4-x", title: "Configure and verify web and email security deployment methods to protect on-premises, hybrid, and remote users" }
            ]
          },
          {
            id: "scor-4-5",
            title: "4.5 Configure and verify email security features such as SPAM filtering, antimalware filtering, DLP, blocklisting, and email encryption",
            subtopics: [
              { id: "scor-4-5-x", title: "Configure and verify email security features such as SPAM filtering, antimalware filtering, DLP, blocklisting, and email encryption" }
            ]
          },
          {
            id: "scor-4-6",
            title: "4.6 Configure and verify Cisco Umbrella Secure Internet Gateway and web security features such as blocklisting, URL filtering, malware scanning, URL categorization, web application filtering, and TLS decryption",
            subtopics: [
              { id: "scor-4-6-x", title: "Configure and verify Cisco Umbrella Secure Internet Gateway and web security features such as blocklisting, URL filtering, malware scanning, URL categorization, web application filtering, and TLS decryption" }
            ]
          },
          {
            id: "scor-4-7",
            title: "4.7 Describe the components, capabilities, and benefits of Cisco Umbrella",
            subtopics: [
              { id: "scor-4-7-x", title: "Describe the components, capabilities, and benefits of Cisco Umbrella" }
            ]
          },
          {
            id: "scor-4-8",
            title: "4.8 Configure and verify web security controls on Cisco Umbrella (identities, URL content settings, destination lists, and reporting)",
            subtopics: [
              { id: "scor-4-8-x", title: "Configure and verify web security controls on Cisco Umbrella (identities, URL content settings, destination lists, and reporting)" }
            ]
          }
        ]
      },
      {
        id: "scor-d5",
        title: "5.0 Endpoint Protection and Detection (%10)",
        topics: [
          {
            id: "scor-5-1",
            title: "5.1 Compare Endpoint Protection Platforms (EPP) and Endpoint Detection & Response (EDR) solutions",
            subtopics: [
              { id: "scor-5-1-x", title: "Compare Endpoint Protection Platforms (EPP) and Endpoint Detection & Response (EDR) solutions" }
            ]
          },
          {
            id: "scor-5-2",
            title: "5.2 Configure endpoint antimalware protection using Cisco Secure Endpoint",
            subtopics: [
              { id: "scor-5-2-x", title: "Configure endpoint antimalware protection using Cisco Secure Endpoint" }
            ]
          },
          {
            id: "scor-5-3",
            title: "5.3 Configure and verify outbreak control and quarantines to limit infection",
            subtopics: [
              { id: "scor-5-3-x", title: "Configure and verify outbreak control and quarantines to limit infection" }
            ]
          },
          {
            id: "scor-5-4",
            title: "5.4 Describe justifications for endpoint-based security",
            subtopics: [
              { id: "scor-5-4-x", title: "Describe justifications for endpoint-based security" }
            ]
          },
          {
            id: "scor-5-5",
            title: "5.5 Describe the value of endpoint device management and asset inventory systems such as MDM",
            subtopics: [
              { id: "scor-5-5-x", title: "Describe the value of endpoint device management and asset inventory systems such as MDM" }
            ]
          },
          {
            id: "scor-5-6",
            title: "5.6 Describe the uses and importance of a multifactor authentication (MFA) strategy",
            subtopics: [
              { id: "scor-5-6-x", title: "Describe the uses and importance of a multifactor authentication (MFA) strategy" }
            ]
          },
          {
            id: "scor-5-7",
            title: "5.7 Describe endpoint posture assessment solutions to ensure endpoint security",
            subtopics: [
              { id: "scor-5-7-x", title: "Describe endpoint posture assessment solutions to ensure endpoint security" }
            ]
          },
          {
            id: "scor-5-8",
            title: "5.8 Explain the importance of an endpoint patching strategy",
            subtopics: [
              { id: "scor-5-8-x", title: "Explain the importance of an endpoint patching strategy" }
            ]
          }
        ]
      },
      {
        id: "scor-d6",
        title: "6.0 Secure Network Access, Visibility, and Enforcement (%15)",
        topics: [
          {
            id: "scor-6-1",
            title: "6.1 Describe identity management and secure network access concepts such as guest services, profiling, posture assessment and BYOD",
            subtopics: [
              { id: "scor-6-1-x", title: "Describe identity management and secure network access concepts such as guest services, profiling, posture assessment and BYOD" }
            ]
          },
          {
            id: "scor-6-2",
            title: "6.2 Configure and verify network access control mechanisms such as 802.1X, MAB, WebAuth",
            subtopics: [
              { id: "scor-6-2-x", title: "Configure and verify network access control mechanisms such as 802.1X, MAB, WebAuth" }
            ]
          },
          {
            id: "scor-6-3",
            title: "6.3 Describe network access with CoA",
            subtopics: [
              { id: "scor-6-3-x", title: "Describe network access with CoA" }
            ]
          },
          {
            id: "scor-6-4",
            title: "6.4 Describe the benefits of device compliance and application control",
            subtopics: [
              { id: "scor-6-4-x", title: "Describe the benefits of device compliance and application control" }
            ]
          },
          {
            id: "scor-6-5",
            title: "6.5 Explain exfiltration techniques (DNS tunneling, HTTPS, email, FTP/SSH/SCP/SFTP, ICMP, Messenger, IRC, NTP)",
            subtopics: [
              { id: "scor-6-5-x", title: "Explain exfiltration techniques (DNS tunneling, HTTPS, email, FTP/SSH/SCP/SFTP, ICMP, Messenger, IRC, NTP)" }
            ]
          },
          {
            id: "scor-6-6",
            title: "6.6 Describe the benefits of network telemetry",
            subtopics: [
              { id: "scor-6-6-x", title: "Describe the benefits of network telemetry" }
            ]
          },
          {
            id: "scor-6-7",
            title: "6.7 Describe the components, capabilities, and benefits of these security products and solutions",
            subtopics: [
              { id: "scor-6-7-a", title: "Cisco Secure Network Analytics" },
              { id: "scor-6-7-b", title: "Cisco Secure Cloud Analytics" },
              { id: "scor-6-7-c", title: "Cisco pxGrid" },
              { id: "scor-6-7-d", title: "Cisco Umbrella Investigate" },
              { id: "scor-6-7-e", title: "Cisco Cognitive Intelligence" },
              { id: "scor-6-7-f", title: "Cisco Encrypted Traffic Analytics" },
              { id: "scor-6-7-g", title: "Cisco Secure Client Network Visibility Module (NVM)" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "expert",
    title: "Expert",
    subtitle: "CCIE Security",
    code: "CCIE Security v6.1",
    level: 3,
    color: "#e0736b",
    gradient: "linear-gradient(135deg, #4a1f1c, #7a322c)",
    icon: "🔴",
    description: "En üst düzey güvenlik uzmanlığı. Resmi CCIE Security v6.1 lab blueprint'i.",
    badge: "Expert",
    domains: [
      {
        id: "ccie-d1",
        title: "1.0 Perimeter Security and Intrusion Prevention (%20)",
        topics: [
          {
            id: "ccie-1-1",
            title: "1.1 Deployment modes on Cisco ASA and Cisco FTD",
            subtopics: [
              { id: "ccie-1-1-a", title: "Routed" },
              { id: "ccie-1-1-b", title: "Transparent" },
              { id: "ccie-1-1-c", title: "Single" },
              { id: "ccie-1-1-d", title: "Multi-context" },
              { id: "ccie-1-1-e", title: "Multi-instance" }
            ]
          },
          {
            id: "ccie-1-2",
            title: "1.2 Firewall features on Cisco ASA and FTD",
            subtopics: [
              { id: "ccie-1-2-a", title: "NAT" },
              { id: "ccie-1-2-b", title: "Application inspection" },
              { id: "ccie-1-2-c", title: "Traffic zones" },
              { id: "ccie-1-2-d", title: "Policy-based routing" },
              { id: "ccie-1-2-e", title: "Traffic redirection to service modules" },
              { id: "ccie-1-2-f", title: "Identity firewall" }
            ]
          },
          {
            id: "ccie-1-3",
            title: "1.3 Security features on Cisco IOS/IOS XE",
            subtopics: [
              { id: "ccie-1-3-a", title: "Application awareness" },
              { id: "ccie-1-3-b", title: "Zone-based firewall" },
              { id: "ccie-1-3-c", title: "NAT" }
            ]
          },
          {
            id: "ccie-1-4",
            title: "1.4 Cisco FMC features",
            subtopics: [
              { id: "ccie-1-4-a", title: "Alerting" },
              { id: "ccie-1-4-b", title: "Logging" },
              { id: "ccie-1-4-c", title: "Reporting" },
              { id: "ccie-1-4-d", title: "Dynamic objects" }
            ]
          },
          {
            id: "ccie-1-5",
            title: "1.5 Cisco NGIPS deployment modes",
            subtopics: [
              { id: "ccie-1-5-a", title: "In-line" },
              { id: "ccie-1-5-b", title: "Passive" },
              { id: "ccie-1-5-c", title: "TAP" }
            ]
          },
          {
            id: "ccie-1-6",
            title: "1.6 Cisco NGFW features",
            subtopics: [
              { id: "ccie-1-6-a", title: "SSL inspection" },
              { id: "ccie-1-6-b", title: "User identity" },
              { id: "ccie-1-6-c", title: "Geolocation" },
              { id: "ccie-1-6-d", title: "AVC" }
            ]
          },
          {
            id: "ccie-1-7",
            title: "1.7 Detect and mitigate common types of attacks",
            subtopics: [
              { id: "ccie-1-7-a", title: "DoS/DDoS" },
              { id: "ccie-1-7-b", title: "Evasion techniques" },
              { id: "ccie-1-7-c", title: "Spoofing" },
              { id: "ccie-1-7-d", title: "Man-in-the-middle" },
              { id: "ccie-1-7-e", title: "Botnet" }
            ]
          },
          {
            id: "ccie-1-8",
            title: "1.8 Clustering and high availability features on Cisco ASA and Cisco FTD",
            subtopics: [
              { id: "ccie-1-8-x", title: "Clustering and high availability features on Cisco ASA and Cisco FTD" }
            ]
          },
          {
            id: "ccie-1-9",
            title: "1.9 Policies and rules for traffic control on Cisco ASA and Cisco FTD",
            subtopics: [
              { id: "ccie-1-9-x", title: "Policies and rules for traffic control on Cisco ASA and Cisco FTD" }
            ]
          },
          {
            id: "ccie-1-10",
            title: "1.10 Routing protocols security on Cisco IOS, Cisco ASA, and Cisco FTD",
            subtopics: [
              { id: "ccie-1-10-x", title: "Routing protocols security on Cisco IOS, Cisco ASA, and Cisco FTD" }
            ]
          },
          {
            id: "ccie-1-11",
            title: "1.11 Network connectivity through Cisco ASA and Cisco FTD",
            subtopics: [
              { id: "ccie-1-11-x", title: "Network connectivity through Cisco ASA and Cisco FTD" }
            ]
          },
          {
            id: "ccie-1-12",
            title: "1.12 Correlation and remediation rules on Cisco FMC",
            subtopics: [
              { id: "ccie-1-12-x", title: "Correlation and remediation rules on Cisco FMC" }
            ]
          }
        ]
      },
      {
        id: "ccie-d2",
        title: "2.0 Secure Connectivity and Segmentation (%20)",
        topics: [
          {
            id: "ccie-2-1",
            title: "2.1 Cisco AnyConnect client-based, remote-access VPN technologies on Cisco ASA, Cisco FTD, and Cisco routers",
            subtopics: [
              { id: "ccie-2-1-x", title: "Cisco AnyConnect client-based, remote-access VPN technologies on Cisco ASA, Cisco FTD, and Cisco routers" }
            ]
          },
          {
            id: "ccie-2-2",
            title: "2.2 Cisco IOS CA for VPN authentication",
            subtopics: [
              { id: "ccie-2-2-x", title: "Cisco IOS CA for VPN authentication" }
            ]
          },
          {
            id: "ccie-2-3",
            title: "2.3 FlexVPN, DMVPN, and IPsec L2L tunnels",
            subtopics: [
              { id: "ccie-2-3-x", title: "FlexVPN, DMVPN, and IPsec L2L tunnels" }
            ]
          },
          {
            id: "ccie-2-4",
            title: "2.4 VPN high availability methods",
            subtopics: [
              { id: "ccie-2-4-a", title: "Cisco ASA VPN clustering" },
              { id: "ccie-2-4-b", title: "Dual-hub DMVPN deployments" }
            ]
          },
          {
            id: "ccie-2-5",
            title: "2.5 Infrastructure segmentation methods",
            subtopics: [
              { id: "ccie-2-5-a", title: "VLAN" },
              { id: "ccie-2-5-b", title: "PVLAN" },
              { id: "ccie-2-5-c", title: "GRE" },
              { id: "ccie-2-5-d", title: "VRF-Lite" }
            ]
          },
          {
            id: "ccie-2-6",
            title: "2.6 Microsegmentation with Cisco TrustSec using SFT and SXP",
            subtopics: [
              { id: "ccie-2-6-x", title: "Microsegmentation with Cisco TrustSec using SFT and SXP" }
            ]
          }
        ]
      },
      {
        id: "ccie-d3",
        title: "3.0 Security Infrastructure (%15)",
        topics: [
          {
            id: "ccie-3-1",
            title: "3.1 Device hardening techniques and control plane protection methods",
            subtopics: [
              { id: "ccie-3-1-a", title: "CoPP" },
              { id: "ccie-3-1-b", title: "IP source routing" },
              { id: "ccie-3-1-c", title: "iACLs" }
            ]
          },
          {
            id: "ccie-3-2",
            title: "3.2 Management plane protection techniques",
            subtopics: [
              { id: "ccie-3-2-a", title: "CPU" },
              { id: "ccie-3-2-b", title: "Memory thresholding" },
              { id: "ccie-3-2-c", title: "Securing device access" }
            ]
          },
          {
            id: "ccie-3-3",
            title: "3.3 Data plane protection techniques",
            subtopics: [
              { id: "ccie-3-3-a", title: "uRPF" },
              { id: "ccie-3-3-b", title: "QoS" },
              { id: "ccie-3-3-c", title: "RTBH" }
            ]
          },
          {
            id: "ccie-3-4",
            title: "3.4 Layer 2 security techniques",
            subtopics: [
              { id: "ccie-3-4-a", title: "DAI" },
              { id: "ccie-3-4-b", title: "IPDT" },
              { id: "ccie-3-4-c", title: "STP security" },
              { id: "ccie-3-4-d", title: "Port security" },
              { id: "ccie-3-4-e", title: "DHCP snooping" },
              { id: "ccie-3-4-f", title: "RA Guard" },
              { id: "ccie-3-4-g", title: "VACL" }
            ]
          },
          {
            id: "ccie-3-5",
            title: "3.5 Wireless security technologies",
            subtopics: [
              { id: "ccie-3-5-a", title: "WPA" },
              { id: "ccie-3-5-b", title: "WPA2" },
              { id: "ccie-3-5-c", title: "WPA3" },
              { id: "ccie-3-5-d", title: "TKIP" },
              { id: "ccie-3-5-e", title: "AES" }
            ]
          },
          {
            id: "ccie-3-6",
            title: "3.6 Monitoring protocols",
            subtopics: [
              { id: "ccie-3-6-a", title: "NetFlow/IPFIX/NSEL" },
              { id: "ccie-3-6-b", title: "SNMP" },
              { id: "ccie-3-6-c", title: "SYSLOG" },
              { id: "ccie-3-6-d", title: "RMON" },
              { id: "ccie-3-6-e", title: "eStreamer" }
            ]
          },
          {
            id: "ccie-3-7",
            title: "3.7 Security features to comply with organizational security policies, procedures, and standards BCP 38",
            subtopics: [
              { id: "ccie-3-7-a", title: "ISO 27001" },
              { id: "ccie-3-7-b", title: "RFC 2827" },
              { id: "ccie-3-7-c", title: "PCI-DSS" }
            ]
          },
          {
            id: "ccie-3-8",
            title: "3.8 Cisco SAFE model to validate network security design and to identify threats to different PINs",
            subtopics: [
              { id: "ccie-3-8-x", title: "Cisco SAFE model to validate network security design and to identify threats to different PINs" }
            ]
          },
          {
            id: "ccie-3-9",
            title: "3.9 Interaction with network devices through APIs using basic Python scripts",
            subtopics: [
              { id: "ccie-3-9-a", title: "REST API requests and responses (HTTP action verbs, error codes, cookies, headers; JSON or XML payload; authentication)" },
              { id: "ccie-3-9-b", title: "Data encoding formats (JSON, XML, YAML)" }
            ]
          },
          {
            id: "ccie-3-10",
            title: "3.10 Cisco DNAC Northbound APIs use cases",
            subtopics: [
              { id: "ccie-3-10-a", title: "Authentication and authorization" },
              { id: "ccie-3-10-b", title: "Network discovery" },
              { id: "ccie-3-10-c", title: "Network device" },
              { id: "ccie-3-10-d", title: "Network host" }
            ]
          }
        ]
      },
      {
        id: "ccie-d4",
        title: "4.0 Identity Management, Information Exchange, and Access Control (%25)",
        topics: [
          {
            id: "ccie-4-1",
            title: "4.1 Cisco ISE scalability using multiple nodes and personas",
            subtopics: [
              { id: "ccie-4-1-x", title: "Cisco ISE scalability using multiple nodes and personas" }
            ]
          },
          {
            id: "ccie-4-2",
            title: "4.2 Cisco switches and Cisco Wireless LAN Controllers for network access AAA with Cisco ISE",
            subtopics: [
              { id: "ccie-4-2-x", title: "Cisco switches and Cisco Wireless LAN Controllers for network access AAA with Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-3",
            title: "4.3 Cisco devices for administrative access with Cisco ISE",
            subtopics: [
              { id: "ccie-4-3-x", title: "Cisco devices for administrative access with Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-4",
            title: "4.4 AAA for network access with 802.1X and MAB using Cisco ISE",
            subtopics: [
              { id: "ccie-4-4-x", title: "AAA for network access with 802.1X and MAB using Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-5",
            title: "4.5 Guest lifecycle management using Cisco ISE and Cisco WLC",
            subtopics: [
              { id: "ccie-4-5-x", title: "Guest lifecycle management using Cisco ISE and Cisco WLC" }
            ]
          },
          {
            id: "ccie-4-6",
            title: "4.6 BYOD on-boarding and network access flows",
            subtopics: [
              { id: "ccie-4-6-x", title: "BYOD on-boarding and network access flows" }
            ]
          },
          {
            id: "ccie-4-7",
            title: "4.7 Cisco ISE integration with external identity sources",
            subtopics: [
              { id: "ccie-4-7-a", title: "LDAP" },
              { id: "ccie-4-7-b", title: "AD" },
              { id: "ccie-4-7-c", title: "External RADIUS" }
            ]
          },
          {
            id: "ccie-4-8",
            title: "4.8 Provisioning Cisco AnyConnect with Cisco ISE and Cisco ASA",
            subtopics: [
              { id: "ccie-4-8-x", title: "Provisioning Cisco AnyConnect with Cisco ISE and Cisco ASA" }
            ]
          },
          {
            id: "ccie-4-9",
            title: "4.9 Posture assessment with Cisco ISE",
            subtopics: [
              { id: "ccie-4-9-x", title: "Posture assessment with Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-10",
            title: "4.10 Endpoint profiling using Cisco ISE and Cisco network infrastructure including device sensor",
            subtopics: [
              { id: "ccie-4-10-x", title: "Endpoint profiling using Cisco ISE and Cisco network infrastructure including device sensor" }
            ]
          },
          {
            id: "ccie-4-11",
            title: "4.11 Integration of MDM with Cisco ISE",
            subtopics: [
              { id: "ccie-4-11-x", title: "Integration of MDM with Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-12",
            title: "4.12 Certification-based authentication using Cisco ISE",
            subtopics: [
              { id: "ccie-4-12-x", title: "Certification-based authentication using Cisco ISE" }
            ]
          },
          {
            id: "ccie-4-13",
            title: "4.13 Authentication methods",
            subtopics: [
              { id: "ccie-4-13-a", title: "EAP Chaining and TEAP" },
              { id: "ccie-4-13-b", title: "MAR" }
            ]
          },
          {
            id: "ccie-4-14",
            title: "4.14 Identity mapping on Cisco ASA, Cisco ISE, Cisco WSA, and Cisco FTD",
            subtopics: [
              { id: "ccie-4-14-x", title: "Identity mapping on Cisco ASA, Cisco ISE, Cisco WSA, and Cisco FTD" }
            ]
          },
          {
            id: "ccie-4-15",
            title: "4.15 pxGrid integration between security devices Cisco WSA, Cisco ISE, and Cisco FMC",
            subtopics: [
              { id: "ccie-4-15-x", title: "pxGrid integration between security devices Cisco WSA, Cisco ISE, and Cisco FMC" }
            ]
          },
          {
            id: "ccie-4-16",
            title: "4.16 Integration of Cisco ISE with multifactor authentication",
            subtopics: [
              { id: "ccie-4-16-x", title: "Integration of Cisco ISE with multifactor authentication" }
            ]
          },
          {
            id: "ccie-4-17",
            title: "4.17 Access control and single sign-on using Cisco DUO security technology",
            subtopics: [
              { id: "ccie-4-17-x", title: "Access control and single sign-on using Cisco DUO security technology" }
            ]
          },
          {
            id: "ccie-4-18",
            title: "4.18 Cisco IBNS 2.0 (C3PL) for authentication, access control, and user policy enforcement",
            subtopics: [
              { id: "ccie-4-18-x", title: "Cisco IBNS 2.0 (C3PL) for authentication, access control, and user policy enforcement" }
            ]
          }
        ]
      },
      {
        id: "ccie-d5",
        title: "5.0 Advanced Threat Protection and Content Security (%20)",
        topics: [
          {
            id: "ccie-5-1",
            title: "5.1 Cisco AMP for networks, Cisco AMP for endpoints, and Cisco AMP for content security (Cisco ESA, and Cisco WSA)",
            subtopics: [
              { id: "ccie-5-1-x", title: "Cisco AMP for networks, Cisco AMP for endpoints, and Cisco AMP for content security (Cisco ESA, and Cisco WSA)" }
            ]
          },
          {
            id: "ccie-5-2",
            title: "5.2 Detect, analyze, and mitigate malware incidents",
            subtopics: [
              { id: "ccie-5-2-x", title: "Detect, analyze, and mitigate malware incidents" }
            ]
          },
          {
            id: "ccie-5-3",
            title: "5.3 Perform packet capture and analysis using Wireshark, tcpdump, SPAN, ERSPAN, and RSPAN",
            subtopics: [
              { id: "ccie-5-3-x", title: "Perform packet capture and analysis using Wireshark, tcpdump, SPAN, ERSPAN, and RSPAN" }
            ]
          },
          {
            id: "ccie-5-4",
            title: "5.4 Cloud security",
            subtopics: [
              { id: "ccie-5-4-a", title: "DNS proxy through Cisco Umbrella virtual appliance" },
              { id: "ccie-5-4-b", title: "DNS security policies in Cisco Umbrella" },
              { id: "ccie-5-4-c", title: "RBI policies in Cisco Umbrella" },
              { id: "ccie-5-4-d", title: "CASB policies in Cisco Umbrella" },
              { id: "ccie-5-4-e", title: "DLP policies in Cisco Umbrella" }
            ]
          },
          {
            id: "ccie-5-5",
            title: "5.5 Web filtering, user identification, and Application Visibility and Control (AVC) on Cisco FTD and Cisco WSA",
            subtopics: [
              { id: "ccie-5-5-x", title: "Web filtering, user identification, and Application Visibility and Control (AVC) on Cisco FTD and Cisco WSA" }
            ]
          },
          {
            id: "ccie-5-6",
            title: "5.6 WCCP redirection on Cisco devices",
            subtopics: [
              { id: "ccie-5-6-x", title: "WCCP redirection on Cisco devices" }
            ]
          },
          {
            id: "ccie-5-7",
            title: "5.7 Email security features",
            subtopics: [
              { id: "ccie-5-7-a", title: "Mail policies" },
              { id: "ccie-5-7-b", title: "DLP" },
              { id: "ccie-5-7-c", title: "Quarantine" },
              { id: "ccie-5-7-d", title: "Authentication" },
              { id: "ccie-5-7-e", title: "Encryption" }
            ]
          },
          {
            id: "ccie-5-8",
            title: "5.8 HTTP decryption and inspection on Cisco FTD, Cisco WSA, and Cisco Umbrella",
            subtopics: [
              { id: "ccie-5-8-x", title: "HTTP decryption and inspection on Cisco FTD, Cisco WSA, and Cisco Umbrella" }
            ]
          },
          {
            id: "ccie-5-9",
            title: "5.9 Cisco SMA for centralized content security management",
            subtopics: [
              { id: "ccie-5-9-x", title: "Cisco SMA for centralized content security management" }
            ]
          },
          {
            id: "ccie-5-10",
            title: "5.10 Cisco advanced threat solutions and their integration: Cisco Stealthwatch, Cisco FMC, Cisco AMP, Cisco CTA, Threat Grid, ETA, Cisco WSA, Cisco SMA, Cisco Threat Response, and Cisco Umbrella",
            subtopics: [
              { id: "ccie-5-10-x", title: "Cisco advanced threat solutions and their integration: Cisco Stealthwatch, Cisco FMC, Cisco AMP, Cisco CTA, Threat Grid, ETA, Cisco WSA, Cisco SMA, Cisco Threat Response, and Cisco Umbrella" }
            ]
          }
        ]
      }
    ]
  }
];
