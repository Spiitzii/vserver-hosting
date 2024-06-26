import React from 'react';
import cloudServerImage from '../assets/images/cloud-virtual-dedicated-server.png';
import windowsServer2016Logo from '../assets/logos/windows2016.png';
import windowsServer2019Logo from '../assets/logos/windows2019.png';
import windowsServer2022Logo from '../assets/logos/windows2022.png';
import ubuntuLogo from '../assets/logos/ubuntu.png';
import redHatLogo from '../assets/logos/redhat.png';
import debianLogo from '../assets/logos/debian.png';
import suseLogo from '../assets/logos/suse.png';
import amazonLogo from '../assets/logos/amazon.png';
import '../index.css'

function Home() {
  return (
    <div className="container">
      <header className="header">
        <h3> Willkommen bei v-Hosting</h3>
      </header>
      <div className="welcome-text">
        <p>
          <br />
          Bei v-Hosting bieten wir Ihnen maßgeschneiderte virtuelle Serverlösungen, die perfekt auf Ihre individuellen Geschäftsanforderungen zugeschnitten sind. Unsere vServer zeichnen sich durch hohe Leistung, Flexibilität und Zuverlässigkeit aus und sind ideal für anspruchsvolle Business-Anwendungen, die dedizierte, garantierte Rechenressourcen erfordern.
        </p>
      </div>
      <hr />
      <section id="description">
        <div className="container description-container">
          <div className="description-text">
            <h3>Warum v-Hosting?</h3>
            <hr />
            <p>
              <strong>Hochleistungsfähige Infrastruktur:</strong> Unsere vServer laufen auf der erstklassigen AWS-Infrastruktur, um Ihnen maximale Leistung und Zuverlässigkeit zu bieten. Sie profitieren von dedizierten Ressourcen wie CPU, RAM und SSD-Speicher, die exklusiv für Ihre Anwendungen reserviert sind.
            </p>
            <hr />
            <p>
              <strong>Flexibilität und Skalierbarkeit:</strong> Unsere Cloud VDS wächst mit Ihren Anforderungen. Egal ob Sie einen kleinen Online-Shop betreiben oder ein komplexes Intranet-System verwalten, wir bieten Ihnen die Flexibilität, Ihre Ressourcen jederzeit anzupassen.
            </p>
            <hr />
            <p>
              <strong>Schnelle Bereitstellung:</strong> Ihr vServer steht Ihnen innerhalb von nur 5 Minuten nach der Buchung zur Verfügung. So können Sie Ihre Projekte sofort starten, ohne lange Wartezeiten.
            </p>
            <hr />
            <p>
              <strong>Vielfältige Betriebssysteme:</strong> Wählen Sie aus einer Vielzahl von Betriebssystemen, einschließlich Windows Server 2016, 2019 und 2022 sowie Ubuntu, Red Hat Enterprise Linux, Debian, Suse und Amazon Linux 2. So können Sie sicherstellen, dass Ihr vServer perfekt zu Ihrer IT-Umgebung passt.
            </p>
            <hr />
            <p>
              <strong>Kundenorientierter Support:</strong> Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei allen Fragen und Problemen schnell und kompetent zu helfen. Nutzen Sie unseren Live-Chat oder kontaktieren Sie uns per E-Mail.
            </p>
          </div>
          <div className="description-image">
            <img src={cloudServerImage} alt="Cloud Virtual Dedicated Server" className="image smaller-image" />
          </div>
        </div>
      </section>
      <br />
      <h3>vServer Angebote</h3>
      <hr />
      <section id="servers">
        <div className="container server-grid">
          <div className="server-container">
            <h3>vServer 1 - t2.micro</h3>
            <p2>Betriebssystem:</p2> <span>Windows/Linux</span>
            <p />
            <p2>CPU:</p2> <span>1 CPU</span>
            <p />
            <p2>RAM:</p2> <span>1GB</span>
            <p />
            <p2>Speicher:</p2> <span>30GB (SSD)</span>
            <p />
            <p1>
              <span>ab 20,00€ pro Monat</span>
            </p1>
          </div>
          <div className="server-container">
            <h3>vServer 2 - t3.small</h3>
            <p2>Betriebssystem:</p2> <span>Windows/Linux</span>
            <p />
            <p2>CPU:</p2> <span>2 CPUs</span>
            <p />
            <p2>RAM:</p2> <span>2GB</span>
            <p />
            <p2>Speicher:</p2> <span>50GB (SSD)</span>
            <p />
            <p1>
              <span>ab 30,00€ pro Monat</span>
            </p1>
          </div>
          <div className="server-container">
            <h3>vServer 3 - t3.medium</h3>
            <p2>Betriebssystem:</p2> <span>Windows/Linux</span>
            <p />
            <p2>CPU:</p2> <span>2 CPUs</span>
            <p />
            <p2>RAM:</p2> <span>4GB</span>
            <p />
            <p2>Speicher:</p2> <span>100GB (SSD)</span>
            <p />
            <p1>
              <span>ab 40,00€ pro Monat</span>
            </p1>
          </div>
          <div className="server-container">
            <h3>vServer 4 - c5.xlarge</h3>
            <p2>Betriebssystem:</p2> <span>Windows/Linux</span>
            <p />
            <p2>CPU:</p2> <span>4 CPUs</span>
            <p />
            <p2>RAM:</p2> <span>8GB</span>
            <p />
            <p2>Speicher:</p2> <span>200GB (SSD)</span>
            <p />
            <p1>
              <span>ab 59,00€ pro Monat</span>
            </p1>
          </div>
        </div>
      </section>
      <section id="operating-systems">
        <div className="container">
          <h3>Betriebssysteme</h3>
          <hr />
          <div className="os-section">
            <h4>Linux</h4>
            <div className="os-container">
              <div className="os-item">
                <img src={ubuntuLogo} alt="Ubuntu 20.04 LTS" className="os-logo" />
                <p>Ubuntu 20.04 LTS</p>
              </div>
              <div className="os-item">
                <img src={redHatLogo} alt="Red Hat Enterprise Linux 8" className="os-logo" />
                <p>Red Hat Enterprise Linux 8</p>
              </div>
              <div className="os-item">
                <img src={debianLogo} alt="Debian 10" className="os-logo" />
                <p>Debian 10</p>
              </div>
              <div className="os-item">
                <img src={suseLogo} alt="SUSE Linux Enterprise Server 15 SP5" className="os-logo" />
                <p>SUSE Linux Enterprise Server 15 SP5</p>
              </div>
              <div className="os-item">
                <img src={amazonLogo} alt="Amazon Linux 2" className="os-logo" />
                <p>Amazon Linux 2</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="os-section">
            <h4>Windows</h4>
            <div className="os-container">
              <div className="os-item">
                <img src={windowsServer2016Logo} alt="Windows Server 2016" className="os-logo windows-logo" />
                <p>Windows Server 2016</p>
              </div>
              <div className="os-item">
                <img src={windowsServer2019Logo} alt="Windows Server 2019" className="os-logo windows-logo" />
                <p>Windows Server 2019</p>
              </div>
              <div className="os-item">
                <img src={windowsServer2022Logo} alt="Windows Server 2022" className="os-logo windows-logo" />
                <p>Windows Server 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Home;
