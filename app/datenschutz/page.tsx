import React from "react"
import getLegalData from "@/lib/legal"

export const metadata = {
  title: "Datenschutz | AIO Consulting",
  description: "Datenschutzerklärung der AIO Consulting",
}

export default function Datenschutz() {
  const legal = getLegalData();
  const { company, dataProtection } = legal;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <div className="prose max-w-3xl">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
          Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
        <h4 className="text-lg font-semibold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Impressum dieser Website entnehmen.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p className="mt-2">
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
          Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
          Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p className="mt-2">
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
          Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
          die über eine Website generiert werden, handeln.
        </p>
        <p className="mt-2">
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-2">
          Unser Hoster ist {dataProtection.hostingProvider.name}. Weitere Informationen finden Sie auf der Website 
          unseres Hosters unter <a href={dataProtection.hostingProvider.website} className="text-primary hover:underline">
            {dataProtection.hostingProvider.website}
          </a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
          dieser Datenschutzerklärung.
        </p>
        <p className="mt-2">
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
          und zu welchem Zweck das geschieht.
        </p>
        <p className="mt-2">
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="mt-2">
          {company.name}<br />
          {company.street}<br />
          {company.zipCode} {company.city}<br />
          <br />
          Telefon: {company.phone}<br />
          E-Mail: {company.email}
        </p>
        <p className="mt-2">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
          die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
          entscheidet.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutzbeauftragter</h3>
        <p>
          Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt:
        </p>
        <p className="mt-2">
          {dataProtection.officer.name}<br />
          E-Mail: {dataProtection.officer.email}<br />
          Telefon: {dataProtection.officer.phone}
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Cookies und Trackingtools</h3>
        <h4 className="text-lg font-semibold mt-4 mb-2">Notwendige Cookies</h4>
        {dataProtection.cookies.necessary.map((cookie, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{cookie.name}</p>
            <p>Zweck: {cookie.purpose}</p>
            <p>Speicherdauer: {cookie.duration}</p>
          </div>
        ))}
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Statistik-Cookies</h4>
        {dataProtection.cookies.statistics.map((cookie, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{cookie.name}</p>
            <p>Zweck: {cookie.purpose}</p>
            <p>Speicherdauer: {cookie.duration}</p>
            {cookie.thirdParty && (
              <p>Anbieter: {cookie.provider}</p>
            )}
          </div>
        ))}
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
          49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
          Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
          auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
        </p>
      </div>
    </div>
  )
}
