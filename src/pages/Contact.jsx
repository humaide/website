import { useState } from "react";

function Contact() {
  const [lang, setLang] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const realNumber = '1426-394';
  

    return (
      <>
        <div className="flex flex-col justify-center bg-midnight-blue h-fit text-white px-4 lg:px-32 py-8">
            <div className="w-full flex items-center justify-between">

              <h1 className="font-semibold text-5xl py-8 uppercase"></h1>     
              <button onClick={() => setLang(!lang)} className="px-4 py-2 rounded-md border-2 border-robin-blue hover:bg-robin-blue hover:text-midnight-blue duration-300 shadow-md font-semibold">German</button>            
            </div>

            {lang ? (
              <>
                <h1 className="font-semibold text-5xl py-8 uppercase">Legal Notice</h1>
                <p><strong>HUMAIDE</strong></p>
                <p><strong>Main Responsible</strong>:</p>
                <p>Thomas Franke</p>
                <p>
                    Balauerfohr 31
                    <br />
                    23552 Lübeck</p>
                <p onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}>
                      Phone: 0178/
                      <span className={`${isHovered ? 'hidden' : 'inline'}`}>1HANDY4</span>
                      <span className={`${isHovered ? 'inline' : 'hidden'}`}>{realNumber}</span>
                      <span> (Hover)</span>
                 </p>
                    <br />
                <p>   
                    Email: <a href="mailto:hello@humaide.com">hello@humaide.com</a><br />
                </p><br />

                <p>
                <strong>Represented by:</strong><br />
                    Thomas Franke<br />
                    Tim Schrills<br />
                    Luisa Winzer<br />
                    Michelle Wrage
                </p><br/>

                <h2><strong>Disclaimer – Legal Notices</strong></h2> <br/>

                <strong>§ 1 Warning About Content</strong><br />
                The free and publicly accessible content of this website was created with the utmost care. However, the provider of this website assumes no responsibility for the accuracy and timeliness of the free and publicly accessible journalistic guides and news provided. Contributions identified by name reflect the opinion of the respective author and not always the opinion of the provider. Merely by accessing the free and publicly accessible content, no contractual relationship is established between the user and the provider, as there is no binding intention on the part of the provider.<br />
                <br />
                <strong>§ 2 External Links</strong><br />
                This website contains links to third-party websites (external links). These websites are subject to the liability of the respective operators. The provider checked the external content for legal violations when the external links were first established. At that time, no legal violations were apparent. The provider has no influence on the current and future design and content of the linked pages. Setting external links does not mean that the provider adopts the content behind the reference or link as its own. A continuous control of external links is not reasonable for the provider without concrete evidence of legal violations. However, such external links will be deleted immediately upon becoming aware of legal violations.<br />
                <br />
                <strong>§ 3 Copyright and Performance Protection Rights</strong><br />
                The content published on this website is subject to German copyright and performance protection law. Any use not permitted by German copyright and performance protection law requires the prior written consent of the provider or the respective rights holder. This particularly applies to the reproduction, editing, translation, storage, processing, or reproduction of content in databases or other electronic media and systems. Contents and rights of third parties are marked as such. The unauthorized reproduction or distribution of individual content or complete pages is not permitted and punishable. Only the production of copies and downloads for personal, private, and non-commercial use is allowed.<br />
                <br />
                The presentation of this website in external frames is only permitted with written permission.<br />
                <br />
                <strong>§ 4 Special Terms of Use</strong><br />
                If special conditions for individual uses of this website deviate from the aforementioned paragraphs, this will be explicitly pointed out in the relevant place. In such cases, the special terms of use apply to the individual case.<p>Source: <a href="https://www.fachanwalt.de/impressum-generator/">Click here</a></p>
              </>
            ) : (
              <>
                <h1 className="font-semibold text-5xl py-8 uppercase">Impressum</h1>
                <p><strong>HUMAIDE</strong></p>
                <p><strong>Hauptverantwortlicher</strong>:</p>
                <p>Thomas Franke</p>
                <p>
                    Balauerfohr 31
                    <br />
                    23552 Lübeck</p>
                    <p onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}>
                      Telefon: 0178/
                      <span className={`${isHovered ? 'hidden' : 'inline'}`}>1HANDY4</span>
                      <span className={`${isHovered ? 'inline' : 'hidden'}`}>{realNumber}</span>
                      <span> (Hover)</span>
                 </p>
                    <br />
                <p>   
                    Email: <a href="mailto:hello@humaide.com">hello@humaide.com</a><br />
                </p><br />

                <p>
                <strong>Vertreten durch:</strong><br />
                    Thomas Franke<br />
                    Tim Schrills<br />
                    Luisa Winzer<br />
                    Michelle Wrage
                </p><br/>

                <h2><strong>Disclaimer – rechtliche Hinweise</strong></h2> <br/>

                <strong>§ 1 Warnhinweis zu Inhalten</strong><br />
                Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.<br />
                <br />
                <strong>§ 2 Externe Links</strong><br />
                Diese Website enthält Verknüpfungen zu Websites Dritter (externe Links). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.<br />
                <br />
                <strong>§ 3 Urheber- und Leistungsschutzrechte</strong><br />
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.<br />
                <br />
                Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.<br />
                <br />
                <strong>§ 4 Besondere Nutzungsbedingungen</strong><br />
                Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.<p>Quelle: <a href="https://www.fachanwalt.de/impressum-generator/">Hier klicken</a></p>
              </>
            )}
            </div>
      </>
    );
  };
  
  export default Contact;